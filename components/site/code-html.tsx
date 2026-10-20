import { cn } from '@/lib/cn';

export function CodeHtml({
  html,
  className,
}: {
  html: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'max-h-[480px] overflow-auto p-4 font-mono text-[13px] leading-6 [&_pre]:outline-none',
        className,
      )}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
