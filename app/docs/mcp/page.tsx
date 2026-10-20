import type { Metadata } from 'next';
import Link from 'next/link';
import { RiInformationFill } from '@remixicon/react';

import * as Alert from '@/components/ui/alert';
import { CodeBlock } from '@/components/site/code-block';
import { Command } from '@/components/site/command';
import { DocsHeader, Prose, Step } from '@/components/site/docs';
import { Tabs } from '@/components/site/tabs';
import { MCP_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Conectar el MCP',
  description:
    'Conecta Claude Code, Cursor, VS Code o Claude Desktop al servidor MCP de AlignUI.',
};

const TOOLS = [
  {
    name: 'alignui_search',
    description:
      'Busca componentes y ejemplos oficiales por lo que necesitas (“date picker”, “modal”).',
  },
  {
    name: 'alignui_list_components',
    description: 'Lista los 54 componentes con su descripción, paginado.',
  },
  {
    name: 'alignui_get_component',
    description:
      'Código fuente, partes, dependencias, ejemplos y el comando de instalación de un componente.',
  },
  {
    name: 'alignui_get_example',
    description:
      'Código de cualquiera de los 240 ejemplos de la documentación.',
  },
  {
    name: 'alignui_get_design_tokens',
    description:
      'Colores, tipografía, sombras y radios con la clase de Tailwind que genera cada uno.',
  },
  {
    name: 'alignui_get_setup_guide',
    description:
      'Pasos para configurar AlignUI en un proyecto (namespace, base, fuente, dark mode).',
  },
];

export default function McpPage() {
  const json = (value: unknown) => JSON.stringify(value, null, 2);

  const clients = [
    {
      value: 'claude-code',
      label: 'Claude Code',
      content: (
        <div className='flex flex-col gap-3'>
          <Command
            value={`claude mcp add --transport http alignui ${MCP_URL}`}
          />
          <Prose>
            <p>
              Agrega <code>--scope user</code> para tenerlo en todos tus
              proyectos. Verifica con <code>/mcp</code> dentro de Claude Code.
            </p>
          </Prose>
        </div>
      ),
    },
    {
      value: 'cursor',
      label: 'Cursor',
      content: (
        <div className='flex flex-col gap-3'>
          <Prose>
            <p>
              En <code>~/.cursor/mcp.json</code> (global) o{' '}
              <code>.cursor/mcp.json</code> (proyecto):
            </p>
          </Prose>
          <CodeBlock
            lang='json'
            title='.cursor/mcp.json'
            code={json({ mcpServers: { alignui: { url: MCP_URL } } })}
          />
        </div>
      ),
    },
    {
      value: 'vscode',
      label: 'VS Code',
      content: (
        <div className='flex flex-col gap-3'>
          <Prose>
            <p>
              En <code>.vscode/mcp.json</code> del proyecto (GitHub Copilot en
              modo agente):
            </p>
          </Prose>
          <CodeBlock
            lang='json'
            title='.vscode/mcp.json'
            code={json({
              servers: { alignui: { type: 'http', url: MCP_URL } },
            })}
          />
        </div>
      ),
    },
    {
      value: 'claude-desktop',
      label: 'Claude Desktop',
      content: (
        <div className='flex flex-col gap-3'>
          <Prose>
            <p>
              En <code>claude_desktop_config.json</code> (Settings → Developer →
              Edit Config), usando <code>mcp-remote</code> como puente. Reinicia
              la app después.
            </p>
          </Prose>
          <CodeBlock
            lang='json'
            title='claude_desktop_config.json'
            code={json({
              mcpServers: {
                alignui: {
                  command: 'npx',
                  args: ['-y', 'mcp-remote', MCP_URL],
                },
              },
            })}
          />
        </div>
      ),
    },
    {
      value: 'other',
      label: 'Otros',
      content: (
        <div className='flex flex-col gap-3'>
          <Prose>
            <p>
              Cualquier cliente con soporte de <strong>Streamable HTTP</strong>{' '}
              puede usar la URL directamente. Si tu cliente solo soporta stdio,
              usa <code>npx -y mcp-remote {MCP_URL}</code> como comando.
            </p>
          </Prose>
        </div>
      ),
    },
  ];

  return (
    <div className='flex flex-col gap-10'>
      <DocsHeader
        eyebrow='MCP'
        title='Conectar el MCP de AlignUI'
        description='Un servidor MCP remoto, de solo lectura y sin API key, que le da a tu asistente los componentes, ejemplos y tokens oficiales de AlignUI.'
      />

      <div>
        <Step number={1} title='Copia la URL del servidor'>
          <Command prompt='' value={MCP_URL} />
          <Prose>
            <p>Transporte Streamable HTTP. No requiere autenticación.</p>
          </Prose>
        </Step>

        <Step number={2} title='Agrégalo a tu cliente'>
          <Tabs items={clients} />
        </Step>

        <Step number={3} title='Configura el proyecto para instalar'>
          <Prose>
            <p>
              El MCP devuelve comandos como{' '}
              <code>npx shadcn@latest add @alignui/modal</code>. Para que
              funcionen, registra el namespace <code>@alignui</code> en tu{' '}
              <code>components.json</code> e instala la base una vez. Los pasos
              están en <Link href='/docs/cli'>Instalar con CLI</Link>, o pídele
              a tu asistente que llame a <code>alignui_get_setup_guide</code>.
            </p>
          </Prose>
        </Step>

        <Step number={4} title='Pruébalo'>
          <Prose>
            <p>Pídele algo como:</p>
          </Prose>
          <blockquote className='bg-bg-weak-50 text-paragraph-md text-text-strong-950 ring-stroke-soft-200 rounded-2xl p-4 ring-1 ring-inset'>
            “Usando el MCP de AlignUI, crea una página de configuración de
            cuenta con inputs, un switch de notificaciones y un botón para
            guardar.”
          </blockquote>
        </Step>
      </div>

      <section className='flex flex-col gap-4'>
        <h2 className='text-title-h6 text-text-strong-950'>
          Herramientas disponibles
        </h2>
        <div className='ring-stroke-soft-200 overflow-hidden rounded-2xl ring-1 ring-inset'>
          {TOOLS.map((tool) => (
            <div
              key={tool.name}
              className='border-stroke-soft-200 flex flex-col gap-1 border-b p-4 last:border-b-0 sm:flex-row sm:gap-6'
            >
              <code className='text-label-sm text-text-strong-950 shrink-0 font-mono sm:w-56'>
                {tool.name}
              </code>
              <p className='text-paragraph-sm text-text-sub-600'>
                {tool.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Alert.Root variant='lighter' status='information' size='large'>
        <Alert.Icon as={RiInformationFill} />
        <div className='space-y-1'>
          <div className='text-label-sm'>¿Quieres inspeccionarlo?</div>
          <div>
            Abre <code>npx @modelcontextprotocol/inspector</code>, elige
            Streamable HTTP y usa <code>{MCP_URL}</code>.
          </div>
        </div>
      </Alert.Root>
    </div>
  );
}
