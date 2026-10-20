import { cn } from '@/lib/cn';

import { CopyButton } from './copy-button';

export function Command({
  value,
  prompt = '$',
  className,
}: {
  value: string;
  prompt?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'bg-bg-weak-50 ring-stroke-soft-200 flex items-center gap-2 rounded-xl py-1.5 pr-1.5 pl-3.5 ring-1 ring-inset',
        className,
      )}
    >
      {prompt && (
        <span className='text-paragraph-sm text-text-soft-400 font-mono select-none'>
          {prompt}
        </span>
      )}
      <code className='text-paragraph-sm text-text-strong-950 min-w-0 flex-1 [scrollbar-width:none] overflow-x-auto py-1 font-mono whitespace-nowrap'>
        {value}
      </code>
      <CopyButton value={value} />
    </div>
  );
}
