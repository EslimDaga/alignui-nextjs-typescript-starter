import * as FileFormatIcon from '@/components/ui/file-format-icon';

export function FileFormatIconDemo() {
  return (
    <div className='flex w-full max-w-[400px] flex-col items-center gap-12'>
      <div className='flex flex-wrap justify-center gap-6'>
        <FileFormatIcon.Root format='PDF' color='red' />
        <FileFormatIcon.Root format='PDF' color='orange' />
        <FileFormatIcon.Root format='PDF' color='yellow' />
        <FileFormatIcon.Root format='PDF' color='green' />
        <FileFormatIcon.Root format='PDF' color='sky' />
        <FileFormatIcon.Root format='PDF' color='blue' />
        <FileFormatIcon.Root format='PDF' color='purple' />
        <FileFormatIcon.Root format='PDF' color='pink' />
        <FileFormatIcon.Root format='PDF' />
      </div>

      <div className='flex flex-wrap justify-center gap-6'>
        <FileFormatIcon.Root size='small' format='DOC' color='red' />
        <FileFormatIcon.Root size='small' format='DOC' color='orange' />
        <FileFormatIcon.Root size='small' format='DOC' color='yellow' />
        <FileFormatIcon.Root size='small' format='DOC' color='green' />
        <FileFormatIcon.Root size='small' format='DOC' color='sky' />
        <FileFormatIcon.Root size='small' format='DOC' color='blue' />
        <FileFormatIcon.Root size='small' format='DOC' color='purple' />
        <FileFormatIcon.Root size='small' format='DOC' color='pink' />
        <FileFormatIcon.Root size='small' format='DOC' />
      </div>
    </div>
  );
}
