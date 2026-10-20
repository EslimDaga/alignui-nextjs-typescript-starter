import * as Button from '@/components/ui/button';

export function ButtonError() {
  return (
    <div className='flex flex-col items-center gap-4'>
      <Button.Root variant='error' mode='filled'>
        Try Again
      </Button.Root>
      <Button.Root variant='error' mode='stroke'>
        Try Again
      </Button.Root>
      <Button.Root variant='error' mode='lighter'>
        Try Again
      </Button.Root>
      <Button.Root variant='error' mode='ghost'>
        Try Again
      </Button.Root>
    </div>
  );
}
