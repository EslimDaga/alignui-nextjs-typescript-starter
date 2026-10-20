import * as Button from '@/components/ui/button';

export function ButtonDisabled() {
  return (
    <div className='flex flex-col items-center gap-4'>
      <Button.Root disabled>Disabled</Button.Root>
      <Button.Root mode='stroke' disabled>
        Disabled
      </Button.Root>
      <Button.Root mode='lighter' disabled>
        Disabled
      </Button.Root>
      <Button.Root mode='ghost' disabled>
        Disabled
      </Button.Root>
    </div>
  );
}
