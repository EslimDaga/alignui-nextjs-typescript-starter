import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { RiArrowLeftLine, RiBookOpenLine } from '@remixicon/react';

import * as Badge from '@/components/ui/badge';
import * as Button from '@/components/ui/button';
import { CodeBlock, highlight } from '@/components/site/code-block';
import { Command } from '@/components/site/command';
import { ExamplePreview } from '@/components/site/example-preview';
import {
  addCommand,
  getComponents,
  getExamplesOf,
  getItem,
  getSource,
  plainDescription,
  registryDependencyNames,
  usageImport,
} from '@/lib/registry';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getComponents().map((item) => ({ slug: item.name }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const item = getItem((await params).slug);
  return item
    ? { title: item.title, description: plainDescription(item.description) }
    : {};
}

export default async function ComponentPage({ params }: Props) {
  const { slug } = await params;
  const item = getItem(slug);
  if (item?.type !== 'registry:ui') notFound();

  const usage = usageImport(item);
  const components = registryDependencyNames(item).filter(
    (name) => name !== 'base',
  );

  const examples = await Promise.all(
    getExamplesOf(item.name).map(async (example) => {
      const code = getSource(example.name) ?? '';
      return { name: example.name, code, html: await highlight(code, 'tsx') };
    }),
  );

  return (
    <div className='mx-auto flex w-full max-w-4xl flex-col gap-10 px-5 py-12 sm:py-16'>
      <div className='flex flex-col gap-4'>
        <Link
          href='/components'
          className='text-label-sm text-text-sub-600 hover:text-text-strong-950 flex items-center gap-1 self-start'
        >
          <RiArrowLeftLine className='size-4' /> Componentes
        </Link>
        <div className='flex flex-wrap items-start justify-between gap-4'>
          <h1 className='text-title-h4 text-text-strong-950'>{item.title}</h1>
          {item.meta?.docs && (
            <Button.Root variant='neutral' mode='stroke' size='small' asChild>
              <a href={item.meta.docs} target='_blank' rel='noreferrer'>
                <Button.Icon as={RiBookOpenLine} />
                Docs de AlignUI
              </a>
            </Button.Root>
          )}
        </div>
        <p className='text-paragraph-lg text-text-sub-600'>
          {plainDescription(item.description)}
        </p>
      </div>

      <section className='flex flex-col gap-3'>
        <h2 className='text-label-lg text-text-strong-950'>Instalación</h2>
        <Command value={addCommand([item.name])} />
        <div className='text-paragraph-sm text-text-sub-600 flex flex-wrap items-center gap-2'>
          {(item.dependencies ?? []).map((dep) => (
            <Badge.Root key={dep} variant='stroke' color='gray' size='medium'>
              {dep}
            </Badge.Root>
          ))}
          {components.map((name) => (
            <Link key={name} href={`/components/${name}`}>
              <Badge.Root variant='lighter' color='blue' size='medium'>
                @alignui/{name}
              </Badge.Root>
            </Link>
          ))}
        </div>
      </section>

      {usage && (
        <section className='flex flex-col gap-3'>
          <h2 className='text-label-lg text-text-strong-950'>Uso</h2>
          <CodeBlock code={usage.code} title='Importación' />
          <div className='flex flex-wrap gap-2'>
            {usage.parts.map((part) => (
              <Badge.Root
                key={part}
                variant='lighter'
                color='gray'
                size='medium'
              >
                {usage.namespace}.{part}
              </Badge.Root>
            ))}
          </div>
        </section>
      )}

      {examples.length > 0 ? (
        <section className='flex flex-col gap-4'>
          <h2 className='text-label-lg text-text-strong-950'>
            Ejemplos oficiales ({examples.length})
          </h2>
          <div className='flex flex-col gap-10'>
            {examples.map((example) => (
              <ExamplePreview
                key={example.name}
                name={example.name}
                code={example.code}
                codeHtml={example.html}
              />
            ))}
          </div>
        </section>
      ) : (
        <section className='flex flex-col gap-3'>
          <h2 className='text-label-lg text-text-strong-950'>Código</h2>
          <CodeBlock
            code={getSource(item.name) ?? ''}
            title={`components/ui/${item.name}.tsx`}
          />
        </section>
      )}
    </div>
  );
}
