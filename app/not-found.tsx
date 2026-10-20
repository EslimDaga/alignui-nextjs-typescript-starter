import Link from 'next/link';
import { RiArrowLeftLine } from '@remixicon/react';

import * as Button from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className='mx-auto flex max-w-md flex-1 flex-col items-center justify-center gap-4 px-5 py-24 text-center'>
      <p className='text-label-sm text-text-soft-400 font-mono'>404</p>
      <h1 className='text-title-h5 text-text-strong-950'>
        Esta página no existe
      </h1>
      <p className='text-paragraph-md text-text-sub-600'>
        Revisa la dirección o vuelve al catálogo de componentes.
      </p>
      <div className='mt-2 flex gap-3'>
        <Button.Root variant='neutral' mode='stroke' asChild>
          <Link href='/'>
            <Button.Icon as={RiArrowLeftLine} />
            Inicio
          </Link>
        </Button.Root>
        <Button.Root asChild>
          <Link href='/components'>Ver componentes</Link>
        </Button.Root>
      </div>
    </div>
  );
}
