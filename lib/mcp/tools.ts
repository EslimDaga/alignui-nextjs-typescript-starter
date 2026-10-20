import 'server-only';

import type { McpServer } from '@modelcontextprotocol/server';
import { z } from 'zod';

import { PACKAGE_MANAGERS, setupGuide } from '@/lib/mcp/setup-guide';
import {
  addCommand,
  addCommandByUrl,
  getComponents,
  getItem,
  getSource,
  getTokens,
  registryDependencyNames,
  searchItems,
  suggestNames,
  TOKEN_CATEGORIES,
  usageImport,
  type RegistryItem,
  type RegistryItemType,
} from '@/lib/registry';

const CHARACTER_LIMIT = 25_000;

const READ_ONLY = {
  readOnlyHint: true,
  destructiveHint: false,
  idempotentHint: true,
  openWorldHint: false,
} as const;

const KINDS = {
  all: ['registry:ui', 'registry:example'],
  component: ['registry:ui'],
  example: ['registry:example'],
} as const satisfies Record<string, RegistryItemType[]>;

const responseFormat = z
  .enum(['markdown', 'json'])
  .default('markdown')
  .describe("'markdown' for reading, 'json' for structured data");

const itemName = (example: string) =>
  z
    .string()
    .trim()
    .toLowerCase()
    .min(1)
    .max(100)
    .describe(`Registry name, e.g. "${example}"`);

const limit = (max: number, fallback: number) =>
  z.number().int().min(1).max(max).default(fallback);

const offset = z.number().int().min(0).default(0);

const page = {
  total: z.number().int(),
  count: z.number().int(),
  offset: z.number().int(),
  has_more: z.boolean(),
  next_offset: z.number().int().optional(),
};

const summarySchema = z.object({
  name: z.string(),
  kind: z.enum(['component', 'example']),
  title: z.string(),
  description: z.string(),
  component: z.string().optional(),
  examples: z.number().int().optional(),
});

const tokenSchema = z.object({
  name: z.string(),
  value: z.string(),
  utility: z.string(),
});

type Format = 'markdown' | 'json';

const truncate = (text: string) =>
  text.length <= CHARACTER_LIMIT
    ? text
    : `${text.slice(0, CHARACTER_LIMIT)}\n\n[Truncated at ${CHARACTER_LIMIT} characters]`;

function respond<T extends Record<string, unknown>>(
  format: Format,
  data: T,
  markdown: (data: T) => string,
) {
  const text =
    format === 'json' ? JSON.stringify(data, null, 2) : markdown(data);
  return {
    content: [{ type: 'text' as const, text: truncate(text) }],
    structuredContent: data,
  };
}

function fail(message: string) {
  return {
    content: [{ type: 'text' as const, text: `Error: ${message}` }],
    isError: true,
  };
}

function notFound(name: string, type: RegistryItemType) {
  const kind = type === 'registry:ui' ? 'component' : 'example';
  const suggestions = suggestNames(name, type);
  return fail(
    suggestions.length
      ? `No ${kind} named "${name}". Did you mean: ${suggestions.join(', ')}?`
      : `No ${kind} named "${name}". Use alignui_search to find valid names.`,
  );
}

function paginate<T>(all: T[], start: number, size: number) {
  const items = all.slice(start, start + size);
  const has_more = start + items.length < all.length;
  return {
    total: all.length,
    count: items.length,
    offset: start,
    has_more,
    next_offset: has_more ? start + items.length : undefined,
    items,
  };
}

const moreHint = (next?: number) =>
  next === undefined
    ? ''
    : `\n\nMore available: call again with offset=${next}.`;

const summarize = (item: RegistryItem): z.infer<typeof summarySchema> => ({
  name: item.name,
  kind: item.type === 'registry:ui' ? 'component' : 'example',
  title: item.title,
  description: item.description,
  component: item.meta?.component,
  examples: item.meta?.examples?.length,
});

const summaryLine = (item: z.infer<typeof summarySchema>) =>
  `- **${item.name}** (${item.kind}${item.component ? ` of ${item.component}` : ''}): ${item.description}`;

const codeBlock = (code: string, lang = 'tsx') =>
  `\`\`\`${lang}\n${code}\n\`\`\``;

export const SERVER_INSTRUCTIONS =
  'Official AlignUI components for React + Tailwind CSS v4. Call alignui_get_setup_guide once per project, alignui_search to find components, alignui_get_component or alignui_get_example for usage and source, then run the returned `npx shadcn@latest add @alignui/...` command. Style with AlignUI tokens from alignui_get_design_tokens.';

export function registerTools(server: McpServer) {
  server.registerTool(
    'alignui_search',
    {
      title: 'Search AlignUI components and examples',
      description: `Search the official AlignUI components and their 240 official examples by name, title or description. Use it first to find the right component for a UI need, then call alignui_get_component or alignui_get_example with a returned name.

Args:
  - query: words describing the UI element, e.g. "date picker", "file upload"
  - kind: 'all' | 'component' | 'example' (default 'all')
  - limit: 1-50 (default 10), offset: results to skip (default 0)
  - response_format: 'markdown' | 'json' (default 'markdown')

Returns: { query, total, count, offset, has_more, next_offset, results: [{ name, kind, title, description, component, examples }] }`,
      inputSchema: z.object({
        query: z
          .string()
          .trim()
          .min(1)
          .max(200)
          .describe('Words describing the UI element'),
        kind: z.enum(['all', 'component', 'example']).default('all'),
        limit: limit(50, 10),
        offset,
        response_format: responseFormat,
      }),
      outputSchema: z.object({
        query: z.string(),
        ...page,
        results: z.array(summarySchema),
      }),
      annotations: READ_ONLY,
    },
    async ({ query, kind, limit, offset, response_format }) => {
      const { items, ...pagination } = paginate(
        searchItems(query, [...KINDS[kind]]).map(summarize),
        offset,
        limit,
      );
      return respond(
        response_format,
        { query, ...pagination, results: items },
        (data) =>
          data.total === 0
            ? `No AlignUI items match "${query}". Try a broader word such as "input", "button" or "menu", or call alignui_list_components.`
            : [
                `# AlignUI results for "${query}" (${data.count} of ${data.total})`,
                ...data.results.map(summaryLine),
              ].join('\n') + moreHint(data.next_offset),
      );
    },
  );

  server.registerTool(
    'alignui_list_components',
    {
      title: 'List AlignUI components',
      description: `List the 54 official AlignUI components with their description and number of official examples.

Args:
  - limit: 1-100 (default 60), offset: items to skip (default 0)
  - response_format: 'markdown' | 'json' (default 'markdown')

Returns: { total, count, offset, has_more, next_offset, components: [{ name, kind, title, description, examples }] }`,
      inputSchema: z.object({
        limit: limit(100, 60),
        offset,
        response_format: responseFormat,
      }),
      outputSchema: z.object({ ...page, components: z.array(summarySchema) }),
      annotations: READ_ONLY,
    },
    async ({ limit, offset, response_format }) => {
      const { items, ...pagination } = paginate(
        getComponents().map(summarize),
        offset,
        limit,
      );
      return respond(
        response_format,
        { ...pagination, components: items },
        (data) =>
          [
            `# AlignUI components (${data.count} of ${data.total})`,
            ...data.components.map(
              (component) =>
                `- **${component.name}**: ${component.description} _(${component.examples ?? 0} examples)_`,
            ),
          ].join('\n') + moreHint(data.next_offset),
      );
    },
  );

  server.registerTool(
    'alignui_get_component',
    {
      title: 'Get an AlignUI component',
      description: `Get everything needed to use one AlignUI component: description, compound parts and import line, npm and component dependencies, install commands, official example names and the source code.

Args:
  - name: component name, e.g. "button", "select", "datepicker"
  - include_source: include the source code (default true)
  - response_format: 'markdown' | 'json' (default 'markdown')

Unknown names return the closest matches.`,
      inputSchema: z.object({
        name: itemName('button'),
        include_source: z.boolean().default(true),
        response_format: responseFormat,
      }),
      outputSchema: z.object({
        name: z.string(),
        title: z.string(),
        description: z.string(),
        docs: z.string().optional(),
        usage: z.string().optional(),
        parts: z.array(z.string()),
        dependencies: z.array(z.string()),
        component_dependencies: z.array(z.string()),
        install: z.string(),
        install_by_url: z.string(),
        examples: z.array(z.string()),
        source: z.string().optional(),
      }),
      annotations: READ_ONLY,
    },
    async ({ name, include_source, response_format }) => {
      const item = getItem(name);
      if (item?.type !== 'registry:ui') return notFound(name, 'registry:ui');

      const usage = usageImport(item);
      const source = include_source ? getSource(item.name) : undefined;
      const data = {
        name: item.name,
        title: item.title,
        description: item.description,
        docs: item.meta?.docs,
        usage:
          usage &&
          `${usage.code} // ${usage.parts.map((part) => `${usage.namespace}.${part}`).join(', ')}`,
        parts: item.meta?.parts ?? [],
        dependencies: item.dependencies ?? [],
        component_dependencies: registryDependencyNames(item),
        install: addCommand([item.name]),
        install_by_url: addCommandByUrl([item.name]),
        examples: item.meta?.examples ?? [],
        source: source && truncate(source),
      };

      return respond(response_format, data, (d) =>
        [
          `# ${d.title} (\`${d.name}\`)`,
          d.description,
          d.docs && `Docs: ${d.docs}`,
          `## Install\n${codeBlock(d.install, 'bash')}\nWithout the @alignui namespace: \`${d.install_by_url}\``,
          d.usage && `## Usage\n${codeBlock(d.usage)}`,
          `## Dependencies\n- npm: ${d.dependencies.join(', ') || 'none'}\n- components: ${d.component_dependencies.join(', ')}`,
          d.examples.length > 0 &&
            `## Official examples (alignui_get_example)\n${d.examples.join(', ')}`,
          d.source && `## Source\n${codeBlock(d.source)}`,
        ]
          .filter(Boolean)
          .join('\n\n'),
      );
    },
  );

  server.registerTool(
    'alignui_get_example',
    {
      title: 'Get an official AlignUI example',
      description: `Get the source of one of the 240 official AlignUI examples, as published on alignui.com/docs, plus the command that installs it with its components. Use it to see idiomatic usage before writing UI code.

Args:
  - name: example name, e.g. "select-demo", "modal-demo", "datepicker-range"
  - response_format: 'markdown' | 'json' (default 'markdown')

Unknown names return the closest matches.`,
      inputSchema: z.object({
        name: itemName('select-demo'),
        response_format: responseFormat,
      }),
      outputSchema: z.object({
        name: z.string(),
        component: z.string(),
        components_used: z.array(z.string()),
        dependencies: z.array(z.string()),
        install: z.string(),
        source: z.string(),
      }),
      annotations: READ_ONLY,
    },
    async ({ name, response_format }) => {
      const item = getItem(name);
      if (item?.type !== 'registry:example')
        return notFound(name, 'registry:example');

      const data = {
        name: item.name,
        component: item.meta?.component ?? '',
        components_used: registryDependencyNames(item).filter(
          (dep) => dep !== 'base',
        ),
        dependencies: item.dependencies ?? [],
        install: addCommand([item.name]),
        source: truncate(getSource(item.name) ?? ''),
      };

      return respond(response_format, data, (d) =>
        [
          `# Example \`${d.name}\` (${d.component})`,
          `Components used: ${d.components_used.join(', ')}`,
          `Install with its components: \`${d.install}\``,
          codeBlock(d.source),
        ].join('\n\n'),
      );
    },
  );

  server.registerTool(
    'alignui_get_design_tokens',
    {
      title: 'Get AlignUI design tokens',
      description: `Look up AlignUI design tokens and the Tailwind utilities they create, so generated UI uses the design system instead of raw Tailwind values.

Args:
  - category: 'colors' | 'typography' | 'shadows' | 'radius'
  - query: optional token name filter, e.g. "bg-", "text-label", "primary"
  - limit: 1-300 (default 100), offset: items to skip (default 0)
  - response_format: 'markdown' | 'json' (default 'markdown')

Example: category "colors" with query "bg-" lists bg-bg-white-0, bg-bg-weak-50 and the other background tokens.`,
      inputSchema: z.object({
        category: z.enum(TOKEN_CATEGORIES),
        query: z.string().trim().max(100).optional(),
        limit: limit(300, 100),
        offset,
        response_format: responseFormat,
      }),
      outputSchema: z.object({
        category: z.enum(TOKEN_CATEGORIES),
        ...page,
        tokens: z.array(tokenSchema),
      }),
      annotations: READ_ONLY,
    },
    async ({ category, query, limit, offset, response_format }) => {
      const matches = getTokens()[category].filter(
        (token) =>
          !query ||
          token.name.includes(query) ||
          (category !== 'colors' && token.utility.includes(query)),
      );
      const { items, ...pagination } = paginate(matches, offset, limit);

      return respond(
        response_format,
        { category, ...pagination, tokens: items },
        (data) =>
          [
            `# AlignUI ${category} tokens (${data.count} of ${data.total})`,
            '| Token | Utility | Value |',
            '| --- | --- | --- |',
            ...data.tokens.map(
              (token) =>
                `| \`${token.name}\` | \`${token.utility}\` | ${token.value} |`,
            ),
          ].join('\n') + moreHint(data.next_offset),
      );
    },
  );

  server.registerTool(
    'alignui_get_setup_guide',
    {
      title: 'Get the AlignUI setup guide',
      description: `Step-by-step guide to set up AlignUI in a React + Tailwind CSS v4 project (Next.js App Router by default): registry namespace, base install, font, dark mode, providers and known caveats. Call it before installing the first AlignUI component in a project.

Args:
  - package_manager: 'npm' | 'pnpm' | 'yarn' | 'bun' (default 'npm')`,
      inputSchema: z.object({
        package_manager: z.enum(PACKAGE_MANAGERS).default('npm'),
      }),
      outputSchema: z.object({
        package_manager: z.enum(PACKAGE_MANAGERS),
        guide: z.string(),
      }),
      annotations: READ_ONLY,
    },
    async ({ package_manager }) =>
      respond(
        'markdown',
        { package_manager, guide: setupGuide(package_manager) },
        (data) => data.guide,
      ),
  );
}
