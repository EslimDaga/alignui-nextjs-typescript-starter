import * as Textarea from '@/components/ui/textarea';

export function TextareaSimpleResize() {
  return (
    <div className='mx-auto w-full max-w-96'>
      <Textarea.Root
        placeholder='Jot down your thoughts...'
        simple
        className='resize-y'
      />
    </div>
  );
}
