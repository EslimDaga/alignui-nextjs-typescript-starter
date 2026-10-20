import { SITE_URL } from '@/lib/site';

export const PACKAGE_MANAGERS = ['npm', 'pnpm', 'yarn', 'bun'] as const;

export type PackageManager = (typeof PACKAGE_MANAGERS)[number];

export const FRAMEWORKS = ['nextjs', 'vite'] as const;

export type Framework = (typeof FRAMEWORKS)[number];

const RUNNERS: Record<PackageManager, string> = {
  npm: 'npx',
  pnpm: 'pnpm dlx',
  yarn: 'yarn dlx',
  bun: 'bunx --bun',
};

const INSTALLERS: Record<PackageManager, string> = {
  npm: 'npm install',
  pnpm: 'pnpm add',
  yarn: 'yarn add',
  bun: 'bun add',
};

const CSS_FILES: Record<Framework, string> = {
  nextjs: 'app/globals.css',
  vite: 'src/styles/globals.css',
};

const componentsJson = (framework: Framework) => ({
  $schema: 'https://ui.shadcn.com/schema.json',
  style: 'new-york',
  rsc: framework === 'nextjs',
  tsx: true,
  tailwind: {
    config: '',
    css: CSS_FILES[framework],
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
});

const VITE_PREREQUISITES = `0. **Vite prerequisites**: Tailwind CSS v4 with \`@tailwindcss/vite\`, and the \`@/*\` → \`./src/*\` alias in \`tsconfig.json\`, \`tsconfig.app.json\` and \`vite.config.ts\` (same setup as shadcn/ui for Vite). Keep the Tailwind CSS entry in \`src/styles/globals.css\` (move \`src/index.css\` there and import \`./styles/globals.css\` from \`src/main.tsx\`): the base imports the tokens with \`../lib/alignui.css\`, a path that only resolves from a folder one level below \`src/\`.

`;

function baseStep(framework: Framework, run: string) {
  const install = `\`\`\`bash
${run} @alignui/base
\`\`\``;

  if (framework === 'nextjs') {
    return `2. **Install the base**: design tokens in \`lib/alignui.css\` (imported from \`app/globals.css\`) plus the cn, tv, polymorphic and recursiveCloneChildren utils.

${install}`;
  }

  return `2. **Install the base**: design tokens in \`src/lib/alignui.css\` (imported from \`src/styles/globals.css\`) plus the cn, tv, polymorphic and recursiveCloneChildren utils.

${install}`;
}

function fontStep(framework: Framework, packageManager: PackageManager) {
  if (framework === 'nextjs') {
    return `4. **Font**: AlignUI is designed for Inter. Load it with \`next/font/google\` as \`--font-inter\` and map it in \`app/globals.css\`:

\`\`\`css
@theme inline {
  --font-sans: var(--font-inter);
}
\`\`\``;
  }

  return `4. **Font**: AlignUI is designed for Inter. Install \`@fontsource-variable/inter\`, import it once in \`src/main.tsx\` and map it in \`src/styles/globals.css\`:

\`\`\`bash
${INSTALLERS[packageManager]} @fontsource-variable/inter
\`\`\`

\`\`\`ts
import '@fontsource-variable/inter';
\`\`\`

\`\`\`css
@theme inline {
  --font-sans: 'Inter Variable', ui-sans-serif, system-ui, sans-serif;
}
\`\`\``;
}

function darkModeStep(framework: Framework) {
  const toggle =
    framework === 'nextjs'
      ? '`next-themes` with `attribute="class"` and `disableTransitionOnChange`'
      : '`next-themes` (it does not need Next.js) with `attribute="class"` and `disableTransitionOnChange`, or toggle the class on `document.documentElement` yourself';

  return `5. **Dark mode** is opt-in: tokens and \`dark:\` utilities switch only with the \`dark\` class on \`<html>\`, so without it the UI stays light whatever the OS theme. To offer light, dark and system themes, use ${toggle}.`;
}

export function setupGuide(
  packageManager: PackageManager,
  framework: Framework = 'nextjs',
) {
  const run = `${RUNNERS[packageManager]} shadcn@latest add`;
  const rootFile = framework === 'nextjs' ? 'the root layout' : '`src/App.tsx`';
  const viteExamples =
    framework === 'vite'
      ? '\n**Examples**: `avatar-next-image`, `breadcrumb-as-link` and `pagination-as-link` import `next/image` or `next/link`. With Vite, use `<img>`, `<a>` or your router link instead.\n'
      : '';

  return `# Using AlignUI components (${framework === 'nextjs' ? 'Next.js' : 'Vite'} + React + Tailwind CSS v4)

${framework === 'vite' ? VITE_PREREQUISITES : ''}1. **Register the AlignUI namespace** in the project's \`components.json\` (create it if the project has none):

\`\`\`json
${JSON.stringify(componentsJson(framework), null, 2)}
\`\`\`

${baseStep(framework, run)}

3. **Add components**. Each one brings its npm and component dependencies:

\`\`\`bash
${run} @alignui/button @alignui/input @alignui/modal
\`\`\`

${fontStep(framework, packageManager)}

${darkModeStep(framework)}

6. **Providers**: wrap the app in \`<Tooltip.Provider>\` when using tooltips, and mount \`<NotificationProvider />\` or \`<Toaster />\` from \`@/components/ui/toast\` once in ${rootFile}.

7. **Icons**: components use \`@remixicon/react\`, installed with the base.
${viteExamples}
Without the namespace, install by URL: \`${run} ${SITE_URL}/r/button.json\`.

Styling: prefer AlignUI tokens over raw Tailwind colors (\`bg-bg-white-0\`, \`text-text-strong-950\`, \`ring-stroke-soft-200\`, \`text-label-sm\`, \`text-paragraph-sm\`, \`shadow-regular-xs\`). Look them up with alignui_get_design_tokens.`;
}
