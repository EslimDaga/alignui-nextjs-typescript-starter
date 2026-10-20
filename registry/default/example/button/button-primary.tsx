import * as Button from '@/components/ui/button';

export function ButtonPrimary() {
  return (
    <div className='flex flex-col items-center gap-4'>
      <Button.Root variant='primary' mode='filled'>
        Get Started
      </Button.Root>
      <Button.Root variant='primary' mode='stroke'>
        Get Started
      </Button.Root>
      <Button.Root variant='primary' mode='lighter'>
        Get Started
      </Button.Root>
      <Button.Root variant='primary' mode='ghost'>
        Get Started
      </Button.Root>
    </div>
  );
}
