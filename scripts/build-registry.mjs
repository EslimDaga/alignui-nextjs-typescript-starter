import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const SOURCE_DIR = 'registry/default';
const PUBLISHED_DIR = '.registry/default';
const EXAMPLES_INDEX = 'components/site/examples.generated.tsx';
const LIGHT_THEME_OVERRIDES = 'app/light-theme.generated.css';
const BASE_ITEM = 'base';

const FRAMEWORK_PACKAGES = new Set(['react', 'react-dom', 'next']);
const UNPINNED_MAJOR_VERSIONS = { '@tanstack/react-table': '^8' };
const MISSING_PEER_DEPENDENCIES = {
  'react-payment-inputs': ['styled-components'],
};
const TYPE_PACKAGES = { 'react-payment-inputs': '@types/react-payment-inputs' };

const TAILWIND_V4_REWRITES = [
  {
    pattern: /\b(grid-(?:cols|rows)-\[)([^\]\s"'`]+)\]/g,
    replace: (_, prefix, value) =>
      `${prefix}${topLevelCommasToUnderscores(value)}]`,
  },
  {
    pattern: /\brounded-([trblse]{1,2})-sm\b/g,
    replace: (_, side) => `rounded-${side}-xs`,
  },
];

const REGISTRY_URL = (
  process.env.REGISTRY_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000')
).replace(/\/$/, '');

const read = (file) => fs.readFileSync(path.join(ROOT, file), 'utf8');

function write(file, content) {
  fs.mkdirSync(path.dirname(path.join(ROOT, file)), { recursive: true });
  fs.writeFileSync(path.join(ROOT, file), content);
}

const docs = JSON.parse(read(`${SOURCE_DIR}/docs.json`));

const versionPins = {
  ...Object.fromEntries(
    docs.pages
      .flatMap((page) => page.install)
      .map((spec) => spec.match(/^(@?[^@]+)@(.+)$/))
      .filter(Boolean)
      .map(([, name, version]) => [name, version]),
  ),
  ...UNPINNED_MAJOR_VERSIONS,
};

const withVersion = (pkg) =>
  versionPins[pkg] ? `${pkg}@${versionPins[pkg]}` : pkg;

const sorted = (values) => [...values].sort();

const itemUrl = (name) => `${REGISTRY_URL}/r/${name}.json`;

const toTitle = (name) =>
  name
    .split('-')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');

function topLevelCommasToUnderscores(value) {
  let depth = 0;
  return [...value]
    .map((char) => {
      if (char === '(') depth++;
      if (char === ')') depth--;
      return char === ',' && depth === 0 ? '_' : char;
    })
    .join('');
}

function listSources(dir) {
  return fs
    .readdirSync(path.join(ROOT, SOURCE_DIR, dir), { recursive: true })
    .filter((file) => /\.tsx?$/.test(file))
    .sort()
    .map((file) => ({
      name: path.parse(file).name,
      file: `${SOURCE_DIR}/${dir}/${file}`,
      relative: `${dir}/${file}`,
    }));
}

function packageName(specifier) {
  const segments = specifier.split('/');
  return specifier.startsWith('@')
    ? segments.slice(0, 2).join('/')
    : segments[0];
}

function analyze(file) {
  const source = read(file);
  const specifiers = [
    ...source.matchAll(
      /\bfrom\s+["']([^"']+)["']|^\s*import\s+["']([^"']+)["']/gm,
    ),
  ].map((match) => match[1] ?? match[2]);

  const dependencies = new Set();
  const devDependencies = new Set();
  const registryDependencies = new Set([itemUrl(BASE_ITEM)]);

  for (const specifier of specifiers) {
    const localItem =
      specifier.match(/^@\/components\/ui\/(.+)$/)?.[1] ??
      specifier.match(/^@\/hooks\/(.+)$/)?.[1] ??
      specifier.match(/^\.\/(.+)$/)?.[1];

    if (localItem) {
      registryDependencies.add(itemUrl(localItem));
      continue;
    }
    if (specifier.startsWith('.') || specifier.startsWith('@/')) continue;

    const pkg = packageName(specifier);
    if (FRAMEWORK_PACKAGES.has(pkg)) continue;
    dependencies.add(withVersion(pkg));
    MISSING_PEER_DEPENDENCIES[pkg]?.forEach((peer) => dependencies.add(peer));
    if (TYPE_PACKAGES[pkg]) devDependencies.add(TYPE_PACKAGES[pkg]);
  }

  const compoundParts = [...source.matchAll(/export\s*\{([^}]*)\}/g)]
    .flatMap((match) => match[1].split(','))
    .map((entry) => entry.trim().match(/^(?:\w+\s+as\s+)?([A-Z]\w*)$/)?.[1])
    .filter(Boolean);

  const exportedFunction = source.match(
    /^export (?:default )?function (\w+)/m,
  )?.[1];

  return {
    dependencies,
    devDependencies,
    registryDependencies,
    compoundParts,
    exportedFunction,
  };
}

function docsPageFor(name, relative) {
  return (
    docs.pages.find((page) => page.slug === `ui/${name}`) ??
    docs.pages.find((page) => page.file === relative)
  );
}

function baseItem() {
  const utils = listSources('utils');
  const dependencies = new Set(['@remixicon/react', 'tw-animate-css']);
  for (const util of utils) {
    analyze(util.file).dependencies.forEach((dep) => dependencies.add(dep));
  }

  return {
    name: BASE_ITEM,
    type: 'registry:item',
    title: 'AlignUI Base',
    description:
      'AlignUI Tailwind v4 design tokens (official CLI output) plus the cn, tv, polymorphic and recursiveCloneChildren utilities. Required by every component.',
    dependencies: sorted(dependencies),
    files: [
      ...utils.map((util) => ({ path: util.file, type: 'registry:lib' })),
      {
        path: `${SOURCE_DIR}/styles/alignui.css`,
        type: 'registry:file',
        target: '@lib/alignui.css',
      },
    ],
    css: {
      '@import "tw-animate-css"': {},
      '@import "../lib/alignui.css"': {},
      '@layer base': {
        'button:not(:disabled), [role="button"]:not(:disabled)': {
          cursor: 'pointer',
        },
      },
    },
    docs: 'AlignUI tokens were added to lib/alignui.css and imported from app/globals.css. Dark mode follows the `dark` class on <html> (and prefers-color-scheme). AlignUI is designed for the Inter font: expose it as --font-sans.',
  };
}

function hookItems() {
  return listSources('hooks').map(({ name, file }) => {
    const { dependencies, registryDependencies } = analyze(file);
    return {
      name,
      type: 'registry:hook',
      title: toTitle(name),
      description: `AlignUI ${name} hook.`,
      dependencies: sorted(dependencies),
      registryDependencies: sorted(registryDependencies),
      files: [{ path: file, type: 'registry:hook' }],
    };
  });
}

function componentItems() {
  const repoOnly = new Set(
    docs.repoOnly.map((file) => path.basename(file, '.tsx')),
  );

  return listSources('ui').map(({ name, file, relative }) => {
    const { dependencies, registryDependencies, compoundParts } = analyze(file);
    registryDependencies.delete(itemUrl(name));

    const page = docsPageFor(name, relative);
    page?.install.forEach((spec) => dependencies.add(withVersion(spec)));

    const description =
      page?.description ??
      (repoOnly.has(name)
        ? `AlignUI ${toTitle(name)} (from the official starter repository).`
        : `AlignUI ${toTitle(name)}, a helper shipped with the official docs.`);
    const usage = compoundParts.includes('Root')
      ? ` Usage: import * as ${toTitle(name).replace(/ /g, '')} from "@/components/ui/${name}" (parts: ${compoundParts.join(', ')}).`
      : '';

    return {
      name,
      type: 'registry:ui',
      title: page?.title ?? toTitle(name),
      description: `${description}${usage}`,
      dependencies: sorted(dependencies),
      registryDependencies: sorted(registryDependencies),
      files: [{ path: file, type: 'registry:ui' }],
      meta: {
        docs: page ? `${docs.source}/${page.slug}` : undefined,
        parts: compoundParts.length ? compoundParts : undefined,
        examples: [],
      },
    };
  });
}

function exampleItems(components) {
  const byName = new Map(
    components.map((component) => [component.name, component]),
  );

  return listSources('example').map(({ name, file, relative }) => {
    const {
      dependencies,
      devDependencies,
      registryDependencies,
      exportedFunction,
    } = analyze(file);
    const folder = relative.split('/')[1];
    const component = byName.has(folder)
      ? folder
      : path.basename(docsPageFor(folder, '')?.file ?? folder, '.tsx');
    const owner = byName.get(component);
    owner.meta.examples.push(name);

    return {
      name,
      type: 'registry:example',
      title: toTitle(name),
      description: `Official AlignUI example for ${owner.title}: ${toTitle(name)}.`,
      dependencies: sorted(dependencies),
      devDependencies: devDependencies.size
        ? sorted(devDependencies)
        : undefined,
      registryDependencies: sorted(registryDependencies),
      files: [{ path: file, type: 'registry:example' }],
      meta: {
        component,
        exportedFunction,
        module: relative.replace(/\.tsx$/, ''),
      },
    };
  });
}

function applyTailwindV4Rewrites(code, file) {
  return TAILWIND_V4_REWRITES.reduce(
    (current, { pattern, replace }) =>
      current.replace(pattern, (match, ...groups) => {
        const rewritten = replace(match, ...groups);
        if (rewritten !== match) {
          console.log(`tailwind v4: ${file}: ${match} -> ${rewritten}`);
        }
        return rewritten;
      }),
    code,
  );
}

function publish(items) {
  fs.rmSync(path.join(ROOT, path.dirname(PUBLISHED_DIR)), {
    recursive: true,
    force: true,
  });

  for (const file of items.flatMap((item) => item.files)) {
    const relative = path.relative(SOURCE_DIR, file.path);
    const source = read(file.path);
    file.path = path.join(PUBLISHED_DIR, relative);
    write(
      file.path,
      /\.tsx?$/.test(relative)
        ? applyTailwindV4Rewrites(source, relative)
        : source,
    );
  }
}

function writeExamplesIndex(examples) {
  const entries = examples.map(
    ({ name, meta }) =>
      `  '${name}': load(() =>\n    import('@/${SOURCE_DIR}/${meta.module}').then((m) => m.${meta.exportedFunction}),\n  ),`,
  );

  write(
    EXAMPLES_INDEX,
    `'use client';

import dynamic from 'next/dynamic';

const load = (loader: () => Promise<React.ComponentType>) =>
  dynamic(loader, { ssr: false });

export const examples: Record<string, React.ComponentType> = {
${entries.join('\n')}
};
`,
  );
}

function blockAfter(css, marker) {
  const start = css.indexOf(marker);
  return css.slice(start, css.indexOf('\n}', start));
}

function writeLightThemeOverrides() {
  const css = read(`${SOURCE_DIR}/styles/alignui.css`);
  const theme = blockAfter(css, '@theme {');
  const systemDark = blockAfter(css, '@media (prefers-color-scheme: dark)');

  const declarations = [...systemDark.matchAll(/^\s*(--[a-z0-9-]+):/gm)]
    .map(([, variable]) => {
      const light = theme.match(
        new RegExp(`^\\s*${variable}:\\s*([^;]+);`, 'm'),
      )?.[1];
      return light && `    ${variable}: ${light.replace(/\s+/g, ' ').trim()};`;
    })
    .filter(Boolean);

  write(
    LIGHT_THEME_OVERRIDES,
    `@media (prefers-color-scheme: dark) {\n  :root.light {\n${declarations.join('\n')}\n  }\n}\n`,
  );
}

const components = componentItems();
const examples = exampleItems(components);
const items = [baseItem(), ...hookItems(), ...components, ...examples];

publish(items);
writeExamplesIndex(examples);
writeLightThemeOverrides();

write(
  'registry.json',
  `${JSON.stringify(
    {
      $schema: 'https://ui.shadcn.com/schema/registry.json',
      name: 'alignui',
      homepage: REGISTRY_URL,
      items,
    },
    null,
    2,
  )}\n`,
);

const count = (type) => items.filter((item) => item.type === type).length;
console.log(
  `registry.json: ${items.length} items (${count('registry:ui')} ui, ${count('registry:hook')} hooks, ${count('registry:example')} examples) at ${REGISTRY_URL}`,
);
