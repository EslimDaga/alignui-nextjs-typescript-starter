import * as ProgressBar from '@/components/ui/progress-bar';

export function ProgressBarColor() {
  return (
    <div className='flex w-full max-w-96 flex-col gap-6'>
      <ProgressBar.Root value={50} max={100} color='blue' />
      <ProgressBar.Root value={50} max={100} color='red' />
      <ProgressBar.Root value={50} max={100} color='orange' />
      <ProgressBar.Root value={50} max={100} color='green' />
    </div>
  );
}
