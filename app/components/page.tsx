import type { Metadata } from 'next';

import { ComponentsGrid } from '@/components/site/components-grid';
import { getComponents, plainDescription } from '@/lib/registry';

export const metadata: Metadata = {
  title: 'Componentes',
  description: 'Los 54 componentes oficiales de AlignUI con sus ejemplos.',
};

export default function ComponentsPage() {
  const items = getComponents().map((item) => ({
    name: item.name,
    title: item.title,
    description: plainDescription(item.description),
    examples: item.meta?.examples?.length ?? 0,
  }));

  return (
    <div className='mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 py-12 sm:py-16'>
      <header className='flex flex-col gap-3'>
        <h1 className='text-title-h4 text-text-strong-950'>Componentes</h1>
        <p className='text-paragraph-lg text-text-sub-600 max-w-2xl'>
          {items.length} componentes oficiales de AlignUI. Cada uno incluye sus
          ejemplos de la documentación, en vivo, y el comando para instalarlo.
        </p>
      </header>
      <ComponentsGrid items={items} />
    </div>
  );
}
