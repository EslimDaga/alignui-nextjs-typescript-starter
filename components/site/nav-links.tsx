'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/cn';

const LINKS = [
  { href: '/components', label: 'Componentes' },
  { href: '/docs/mcp', label: 'Conectar el MCP' },
  { href: '/docs/cli', label: 'Instalar con CLI' },
];

export function NavLinks({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <nav className={cn('items-center gap-1', className)}>
      {LINKS.map(({ href, label }) => {
        const active = pathname === href || pathname.startsWith(`${href}/`);
        return (
          <Link
            key={href}
            href={href}
            className={cn(
              'text-label-sm shrink-0 rounded-lg px-3 py-1.5 transition duration-200 ease-out',
              active
                ? 'bg-bg-weak-50 text-text-strong-950'
                : 'text-text-sub-600 hover:text-text-strong-950',
            )}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
