import * as ProgressBar from '@/components/ui/progress-bar';

export function ProgressBarDemo() {
  return (
    <div className='w-full max-w-96'>
      <div className='flex items-center gap-2'>
        <ProgressBar.Root value={55} />
        <span className='text-paragraph-xs text-text-sub-600'>80%</span>
      </div>
    </div>
  );
}
