import * as Textarea from '@/components/ui/textarea';

export function TextareaDisabled() {
  return (
    <div className='mx-auto w-full max-w-96'>
      <Textarea.Root placeholder='Jot down your thoughts...' disabled>
        <Textarea.CharCounter current={78} max={200} />
      </Textarea.Root>
    </div>
  );
}
