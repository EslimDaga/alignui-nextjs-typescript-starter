import * as Badge from '@/components/ui/badge';

export function DocsHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: React.ReactNode;
}) {
  return (
    <header className='border-stroke-soft-200 flex flex-col gap-3 border-b pb-8'>
      <Badge.Root
        variant='lighter'
        color='blue'
        size='medium'
        className='self-start'
      >
        {eyebrow}
      </Badge.Root>
      <h1 className='text-title-h4 text-text-strong-950'>{title}</h1>
      <p className='text-paragraph-lg text-text-sub-600'>{description}</p>
    </header>
  );
}

export function Step({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className='relative flex gap-4 pb-10 last:pb-0'>
      <div className='flex flex-col items-center'>
        <span className='bg-bg-strong-950 text-label-sm text-text-white-0 flex size-8 shrink-0 items-center justify-center rounded-full'>
          {number}
        </span>
        <span className='bg-stroke-soft-200 mt-2 w-px flex-1' />
      </div>
      <div className='flex min-w-0 flex-1 flex-col gap-3 pt-1'>
        <h2 className='text-label-lg text-text-strong-950'>{title}</h2>
        {children}
      </div>
    </section>
  );
}

export function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className='text-paragraph-md text-text-sub-600 [&_a]:text-text-strong-950 [&_code]:bg-bg-weak-50 [&_code]:text-text-strong-950 [&_a]:underline [&_a]:underline-offset-4 [&_code]:rounded-md [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[0.875em]'>
      {children}
    </div>
  );
}
