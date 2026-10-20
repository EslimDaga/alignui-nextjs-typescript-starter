import Link from 'next/link';
import {
  RiArrowRightLine,
  RiChatSmile3Line,
  RiPlugLine,
  RiTerminalBoxLine,
} from '@remixicon/react';

import * as Badge from '@/components/ui/badge';
import * as Button from '@/components/ui/button';
import { Command } from '@/components/site/command';
import { Showcase } from '@/components/site/showcase';
import { getComponents, getExamples } from '@/lib/registry';
import { MCP_URL } from '@/lib/site';

const STEPS = [
  {
    icon: RiPlugLine,
    title: 'Conecta el MCP',
    description:
      'Agrega la URL del servidor en Claude Code, Cursor, VS Code o Claude Desktop. No necesita API key.',
  },
  {
    icon: RiChatSmile3Line,
    title: 'Pide tu interfaz',
    description:
      'Tu asistente busca el componente correcto, lee los ejemplos oficiales y usa los tokens de AlignUI.',
  },
  {
    icon: RiTerminalBoxLine,
    title: 'Se instala con shadcn',
    description: (
      <>
        Cada componente llega con sus dependencias, utilidades y tokens vía{' '}
        <code className='text-text-strong-950 font-mono'>
          npx shadcn add @alignui/…
        </code>
      </>
    ),
  },
];

const PROMPTS = [
  'Arma una pantalla de login con AlignUI: email, contraseña, recordarme y botón principal.',
  'Agrega un modal de confirmación de AlignUI para eliminar un proyecto.',
  '¿Qué componente de AlignUI uso para elegir un rango de fechas? Muéstrame el ejemplo oficial.',
  'Dame los tokens de AlignUI para fondos y textos y refactoriza esta tarjeta para usarlos.',
];

export default function Home() {
  const stats = [
    { value: getComponents().length, label: 'componentes oficiales' },
    { value: getExamples().length, label: 'ejemplos de la documentación' },
    { value: 6, label: 'herramientas MCP' },
  ];

  return (
    <div className='flex flex-col gap-20 pb-24'>
      <section className='border-stroke-soft-200 relative overflow-hidden border-b'>
        <div
          aria-hidden
          className='pointer-events-none absolute inset-0 bg-[radial-gradient(var(--color-stroke-soft-200)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)] [background-size:20px_20px]'
        />
        <div className='relative mx-auto flex max-w-3xl flex-col items-center px-5 pt-20 pb-20 text-center sm:pt-28'>
          <Badge.Root variant='lighter' color='blue' size='medium'>
            Registry de shadcn + servidor MCP
          </Badge.Root>
          <h1 className='text-title-h3 text-text-strong-950 sm:text-title-h2 mt-5 text-balance'>
            Los componentes oficiales de AlignUI, al alcance de tu IA
          </h1>
          <p className='text-paragraph-lg text-text-sub-600 mt-5 max-w-2xl text-balance'>
            Conecta tu asistente a este MCP y construye interfaces con el código
            exacto de AlignUI: componentes, ejemplos y tokens de diseño, listos
            para instalar con shadcn.
          </p>
          <div className='mt-8 flex flex-wrap justify-center gap-3'>
            <Button.Root asChild>
              <Link href='/docs/mcp'>
                Conectar el MCP
                <Button.Icon as={RiArrowRightLine} />
              </Link>
            </Button.Root>
            <Button.Root variant='neutral' mode='stroke' asChild>
              <Link href='/components'>Explorar componentes</Link>
            </Button.Root>
          </div>
          <Command
            className='mt-10 w-full max-w-2xl text-left'
            value={`claude mcp add --transport http alignui ${MCP_URL}`}
          />
          <p className='text-paragraph-xs text-text-soft-400 mt-3'>
            Claude Code. ¿Usas otro cliente?{' '}
            <Link
              href='/docs/mcp'
              className='text-text-sub-600 underline underline-offset-4'
            >
              Ver todos
            </Link>
          </p>
        </div>
      </section>

      <section className='mx-auto grid w-full max-w-6xl gap-4 px-5 sm:grid-cols-3'>
        {stats.map((stat) => (
          <div
            key={stat.label}
            className='rounded-20 bg-bg-weak-50 ring-stroke-soft-200 p-6 ring-1 ring-inset'
          >
            <p className='text-title-h3 text-text-strong-950'>{stat.value}</p>
            <p className='text-paragraph-sm text-text-sub-600 mt-1'>
              {stat.label}
            </p>
          </div>
        ))}
      </section>

      <section className='mx-auto w-full max-w-6xl px-5'>
        <h2 className='text-title-h5 text-text-strong-950'>Cómo funciona</h2>
        <div className='mt-6 grid gap-4 md:grid-cols-3'>
          {STEPS.map(({ icon: Icon, title, description }, index) => (
            <div
              key={title}
              className='rounded-20 ring-stroke-soft-200 flex flex-col gap-3 p-6 ring-1 ring-inset'
            >
              <div className='flex items-center justify-between'>
                <div className='bg-primary-alpha-10 text-primary-base flex size-10 items-center justify-center rounded-full'>
                  <Icon className='size-5' />
                </div>
                <span className='text-label-sm text-text-soft-400 font-mono'>
                  0{index + 1}
                </span>
              </div>
              <p className='text-label-lg text-text-strong-950'>{title}</p>
              <p className='text-paragraph-sm text-text-sub-600'>
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className='mx-auto w-full max-w-6xl px-5'>
        <div className='flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between'>
          <div>
            <h2 className='text-title-h5 text-text-strong-950'>
              Hecho con AlignUI
            </h2>
            <p className='text-paragraph-md text-text-sub-600 mt-2'>
              Esta web usa los componentes instalados desde su propio registry.
              Pruébalos.
            </p>
          </div>
          <Button.Root variant='neutral' mode='ghost' size='small' asChild>
            <Link href='/components'>
              Ver los 240 ejemplos
              <Button.Icon as={RiArrowRightLine} />
            </Link>
          </Button.Root>
        </div>
        <div className='bg-bg-weak-50 ring-stroke-soft-200 mt-6 rounded-3xl p-4 ring-1 ring-inset sm:p-6'>
          <Showcase />
        </div>
      </section>

      <section className='mx-auto w-full max-w-6xl px-5'>
        <h2 className='text-title-h5 text-text-strong-950'>
          Prompts para probar
        </h2>
        <p className='text-paragraph-md text-text-sub-600 mt-2'>
          Con el MCP conectado, tu asistente resuelve estos pedidos usando
          AlignUI.
        </p>
        <ul className='mt-6 grid gap-3 md:grid-cols-2'>
          {PROMPTS.map((prompt) => (
            <li
              key={prompt}
              className='bg-bg-white-0 text-paragraph-sm text-text-strong-950 shadow-regular-xs ring-stroke-soft-200 rounded-2xl p-4 ring-1 ring-inset'
            >
              “{prompt}”
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
