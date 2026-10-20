import Image from 'next/image';
import Link from 'next/link';
import { RiGithubFill } from '@remixicon/react';

import * as Button from '@/components/ui/button';
import { GITHUB_URL } from '@/lib/site';

import { NavLinks } from './nav-links';
import { ThemeSwitch } from './theme-switch';

export function Header() {
  return (
    <div className='border-stroke-soft-200 bg-bg-white-0/80 sticky top-0 z-40 border-b backdrop-blur'>
      <header className='mx-auto flex h-16 max-w-6xl items-center gap-6 px-5'>
        <Link
          href='/'
          className='text-label-md text-text-strong-950 flex shrink-0 items-center gap-2'
        >
          <Image
            src='/images/logo.svg'
            alt=''
            width={32}
            height={32}
            priority
          />
          AlignUI <span className='text-text-soft-400'>MCP</span>
        </Link>

        <NavLinks className='hidden md:flex' />

        <div className='ml-auto flex items-center gap-3'>
          <ThemeSwitch />
          <Button.Root variant='neutral' mode='stroke' size='small' asChild>
            <a href={GITHUB_URL} target='_blank' rel='noreferrer'>
              <Button.Icon as={RiGithubFill} />
              <span className='hidden sm:inline'>GitHub</span>
            </a>
          </Button.Root>
        </div>
      </header>
      <NavLinks className='flex [scrollbar-width:none] overflow-x-auto px-5 pb-3 md:hidden' />
    </div>
  );
}
