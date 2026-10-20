import * as Button from '@/components/ui/button';

export function ButtonFullWidth() {
  return (
    <div className='mx-auto w-full max-w-96'>
      <Button.Root variant='neutral' className='w-full'>
        Learn More
      </Button.Root>
    </div>
  );
}
