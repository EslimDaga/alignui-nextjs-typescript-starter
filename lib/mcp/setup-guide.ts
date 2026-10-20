import { SITE_URL } from '@/lib/site';

export const PACKAGE_MANAGERS = ['npm', 'pnpm', 'yarn', 'bun'] as const;

export type PackageManager = (typeof PACKAGE_MANAGERS)[number];

const RUNNERS: Record<PackageManager, string> = {
  npm: 'npx',
  pnpm: 'pnpm dlx',
  yarn: 'yarn dlx',
  bun: 'bunx --bun',
};

const COMPONENTS_JSON = {
  $schema: 'https://ui.shadcn.com/schema.json',
  style: 'new-york',
  rsc: true,
  tsx: true,
  tailwind: {
    config: '',
    css: 'app/globals.css',
    baseColor: 'neutral',
    cssVariables: true,
  },
  aliases: {
    components: '@/components',
    ui: '@/components/ui',
    lib: '@/lib',
    hooks: '@/hooks',
    utils: '@/lib/utils',
  },
  registries: { '@alignui': `${SITE_URL}/r/{name}.json` },
};

export function setupGuide(packageManager: PackageManager) {
  const run = `${RUNNERS[packageManager]} shadcn@latest add`;
  const npmNote =
    packageManager === 'npm'
      ? `\n**React 19 + npm**: \`datepicker\` uses \`react-day-picker@8.10.1\` (pinned by AlignUI), which declares React 18 as peer. Install it with \`npm_config_legacy_peer_deps=true ${run} @alignui/datepicker\`.\n`
      : '';

  return `# Using AlignUI components (Tailwind CSS v4 + React)

1. **Register the AlignUI namespace** in the project's \`components.json\` (create it if the project has none):

\`\`\`json
${JSON.stringify(COMPONENTS_JSON, null, 2)}
\`\`\`

2. **Install the base**: design tokens in \`lib/alignui.css\` (imported from \`app/globals.css\`) plus the cn, tv, polymorphic and recursiveCloneChildren utils.

\`\`\`bash
${run} @alignui/base
\`\`\`

3. **Add components**. Each one brings its npm and component dependencies:

\`\`\`bash
${run} @alignui/button @alignui/input @alignui/modal
\`\`\`

4. **Font**: AlignUI is designed for Inter. With Next.js, load it with \`next/font/google\` as \`--font-inter\` and map it in \`app/globals.css\`:

\`\`\`css
@theme inline {
  --font-sans: var(--font-inter);
}
\`\`\`

5. **Dark mode**: tokens switch with the \`dark\` class on \`<html>\` (\`next-themes\` with \`attribute="class"\`). The official tokens also follow \`prefers-color-scheme\`.

6. **Providers**: wrap the app in \`<Tooltip.Provider>\` when using tooltips, and mount \`<NotificationProvider />\` or \`<Toaster />\` from \`@/components/ui/toast\` once in the root layout.

7. **Icons**: components use \`@remixicon/react\`, installed with the base.
${npmNote}
Without the namespace, install by URL: \`${run} ${SITE_URL}/r/button.json\`.

Styling: prefer AlignUI tokens over raw Tailwind colors (\`bg-bg-white-0\`, \`text-text-strong-950\`, \`ring-stroke-soft-200\`, \`text-label-sm\`, \`text-paragraph-sm\`, \`shadow-regular-xs\`). Look them up with alignui_get_design_tokens.`;
}
