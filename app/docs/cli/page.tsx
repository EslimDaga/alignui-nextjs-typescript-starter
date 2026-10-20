import type { Metadata } from 'next';
import Link from 'next/link';
import { RiErrorWarningFill } from '@remixicon/react';

import * as Alert from '@/components/ui/alert';
import { CodeBlock } from '@/components/site/code-block';
import { Command } from '@/components/site/command';
import { DocsHeader, Prose, Step } from '@/components/site/docs';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Instalar con CLI',
  description:
    'Instala los componentes oficiales de AlignUI en tu proyecto con el CLI de shadcn.',
};

const COMPONENTS_JSON = (url: string) => `{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks",
    "utils": "@/lib/utils"
  },
  "registries": {
    "@alignui": "${url}/r/{name}.json"
  }
}`;

const LAYOUT = `import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';

import { Provider as TooltipProvider } from '@/components/ui/tooltip';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='es' className={inter.variable} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute='class' disableTransitionOnChange>
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}`;

export default function CliPage() {
  return (
    <div className='flex flex-col gap-10'>
      <DocsHeader
        eyebrow='CLI'
        title='Instalar con el CLI de shadcn'
        description='Los componentes de AlignUI se publican como registry de shadcn. Funciona en cualquier proyecto React con Tailwind CSS v4; los ejemplos usan Next.js App Router.'
      />

      <div>
        <Step number={1} title='Registra el namespace @alignui'>
          <Prose>
            <p>
              En el <code>components.json</code> de tu proyecto (créalo si no
              existe):
            </p>
          </Prose>
          <CodeBlock
            lang='json'
            title='components.json'
            code={COMPONENTS_JSON(SITE_URL)}
          />
        </Step>

        <Step number={2} title='Instala la base'>
          <Command value='npx shadcn@latest add @alignui/base' />
          <Prose>
            <p>
              Agrega los tokens de diseño en <code>lib/alignui.css</code> (los
              importa desde <code>app/globals.css</code>) y las utilidades{' '}
              <code>cn</code>, <code>tv</code>, <code>polymorphic</code> y{' '}
              <code>recursiveCloneChildren</code>.
            </p>
          </Prose>
        </Step>

        <Step number={3} title='Agrega componentes'>
          <Command value='npx shadcn@latest add @alignui/button @alignui/input @alignui/modal' />
          <Prose>
            <p>
              Cada componente trae sus dependencias de npm y los componentes que
              usa. También puedes instalar los{' '}
              <Link href='/components'>ejemplos oficiales</Link>, por ejemplo{' '}
              <code>@alignui/select-demo</code>.
            </p>
          </Prose>
        </Step>

        <Step number={4} title='Fuente, tema y providers'>
          <Prose>
            <p>
              AlignUI está diseñado con Inter. Expónla como{' '}
              <code>--font-inter</code> y mapéala en tu CSS. El modo oscuro es
              opcional: solo se activa con la clase <code>dark</code> en{' '}
              <code>&lt;html&gt;</code>, nunca por el sistema operativo.
            </p>
          </Prose>
          <CodeBlock
            lang='css'
            title='app/globals.css'
            code={`@import "tailwindcss";\n@import "tw-animate-css";\n@import "../lib/alignui.css";\n\n@custom-variant dark (&:where(.dark, .dark *));\n\n@theme inline {\n  --font-sans: var(--font-inter);\n}\n\n@layer base {\n  button:not(:disabled),\n  [role="button"]:not(:disabled) {\n    cursor: pointer;\n  }\n}`}
          />
          <CodeBlock lang='tsx' title='app/layout.tsx' code={LAYOUT} />
          <Prose>
            <p>
              Si usas notificaciones o toasts, monta una vez{' '}
              <code>&lt;NotificationProvider /&gt;</code> o{' '}
              <code>&lt;Toaster /&gt;</code> en el layout.
            </p>
          </Prose>
        </Step>
      </div>

      <section className='flex flex-col gap-4'>
        <h2 className='text-title-h6 text-text-strong-950'>
          Sin configurar el namespace
        </h2>
        <Prose>
          <p>También puedes instalar directamente con la URL del item:</p>
        </Prose>
        <Command value={`npx shadcn@latest add ${SITE_URL}/r/button.json`} />
      </section>

      <Alert.Root variant='lighter' status='warning' size='large'>
        <Alert.Icon as={RiErrorWarningFill} />
        <div className='space-y-1'>
          <div className='text-label-sm'>¿Usas Vite?</div>
          <div>
            La base importa los tokens con <code>../lib/alignui.css</code>, así
            que tu CSS de Tailwind debe estar en{' '}
            <code>src/styles/globals.css</code> (en lugar de{' '}
            <code>src/index.css</code>) y declararse así en{' '}
            <code>components.json</code>. Carga Inter con{' '}
            <code>@fontsource-variable/inter</code>. Tu asistente recibe estos
            pasos al llamar a <code>alignui_get_setup_guide</code> con{' '}
            <code>framework: &quot;vite&quot;</code>.
          </div>
        </div>
      </Alert.Root>
    </div>
  );
}
