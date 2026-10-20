import * as Textarea from '@/components/ui/textarea';

export function TextareaDemo() {
  return (
    <div className='mx-auto w-full max-w-96'>
      <Textarea.Root placeholder='Jot down your thoughts...'>
        <Textarea.CharCounter current={78} max={200} />
      </Textarea.Root>
    </div>
  );
}
