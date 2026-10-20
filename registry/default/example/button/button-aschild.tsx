import * as Button from '@/components/ui/button';

export function ButtonAsChild() {
  return (
    <div className='flex flex-col items-center gap-4'>
      <Button.Root asChild>
        <a href='#'>As link</a>
      </Button.Root>
    </div>
  );
}
