import * as Textarea from '@/components/ui/textarea';

export function TextareaSimple() {
  return (
    <div className='mx-auto w-full max-w-96'>
      <Textarea.Root placeholder='Jot down your thoughts...' simple />
    </div>
  );
}
