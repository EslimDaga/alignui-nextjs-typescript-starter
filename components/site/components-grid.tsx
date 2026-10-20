'use client';

import * as React from 'react';
import Link from 'next/link';
import { RiSearchLine } from '@remixicon/react';

import * as Badge from '@/components/ui/badge';
import * as Input from '@/components/ui/input';

export type ComponentCard = {
  name: string;
  title: string;
  description: string;
  examples: number;
};

export function ComponentsGrid({ items }: { items: ComponentCard[] }) {
  const [query, setQuery] = React.useState('');
  const q = query.trim().toLowerCase();
  const filtered = q
    ? items.filter((item) =>
        [item.name, item.title, item.description].some((field) =>
          field.toLowerCase().includes(q),
        ),
      )
    : items;

  return (
    <div className='flex flex-col gap-6'>
      <Input.Root className='max-w-sm'>
        <Input.Wrapper>
          <Input.Icon as={RiSearchLine} />
          <Input.Input
            placeholder='Buscar componente...'
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </Input.Wrapper>
      </Input.Root>

      <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {filtered.map((item) => (
          <Link
            key={item.name}
            href={`/components/${item.name}`}
            className='group rounded-20 ring-stroke-soft-200 hover:bg-bg-weak-50 flex flex-col gap-2 p-5 ring-1 transition duration-200 ease-out ring-inset'
          >
            <div className='flex items-center justify-between gap-3'>
              <span className='text-label-md text-text-strong-950'>
                {item.title}
              </span>
              {item.examples > 0 && (
                <Badge.Root variant='lighter' color='gray' size='small'>
                  {item.examples} ejemplos
                </Badge.Root>
              )}
            </div>
            <p className='text-paragraph-sm text-text-sub-600 line-clamp-2'>
              {item.description}
            </p>
            <code className='text-paragraph-xs text-text-soft-400 mt-auto pt-2 font-mono'>
              @alignui/{item.name}
            </code>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className='text-paragraph-sm text-text-sub-600'>
          Ningún componente coincide con “{query}”.
        </p>
      )}
    </div>
  );
}
