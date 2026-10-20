import * as Textarea from '@/components/ui/textarea';

export function TextareaHasError() {
  return (
    <div className='mx-auto w-full max-w-96'>
      <Textarea.Root placeholder='Jot down your thoughts...' hasError>
        <Textarea.CharCounter current={78} max={200} />
      </Textarea.Root>
    </div>
  );
}
