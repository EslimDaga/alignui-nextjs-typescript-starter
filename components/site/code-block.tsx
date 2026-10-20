import { cacheLife } from 'next/cache';
import { codeToHtml } from 'shiki';

import { cn } from '@/lib/cn';

import { CodeHtml } from './code-html';
import { CopyButton } from './copy-button';

export async function highlight(code: string, lang: string) {
  'use cache';
  cacheLife('max');
  return codeToHtml(code, {
    lang,
    themes: { light: 'github-light', dark: 'github-dark' },
    defaultColor: false,
  });
}

export async function CodeBlock({
  code,
  lang = 'tsx',
  title,
  className,
}: {
  code: string;
  lang?: string;
  title?: string;
  className?: string;
}) {
  const html = await highlight(code, lang);

  return (
    <div
      className={cn(
        'bg-bg-weak-50 ring-stroke-soft-200 overflow-hidden rounded-2xl ring-1 ring-inset',
        className,
      )}
    >
      <div className='border-stroke-soft-200 flex items-center justify-between border-b py-1.5 pr-1.5 pl-4'>
        <span className='text-paragraph-xs text-text-sub-600 font-mono'>
          {title ?? lang}
        </span>
        <CopyButton value={code} />
      </div>
      <CodeHtml html={html} />
    </div>
  );
}
