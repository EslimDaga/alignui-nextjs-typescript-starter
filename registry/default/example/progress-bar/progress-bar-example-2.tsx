import * as LinkButton from '@/components/ui/link-button';
import * as ProgressBar from '@/components/ui/progress-bar';

export function ProgressBarExample2() {
  return (
    <div className='w-full max-w-96'>
      <div className='space-y-1.5'>
        <div className='flex justify-between gap-1.5'>
          <span className='text-label-sm text-text-strong-950'>
            Data Storage
          </span>
          <span className='text-paragraph-xs text-text-sub-600'>80%</span>
        </div>
        <ProgressBar.Root value={55} />
        <div className='text-paragraph-xs text-text-sub-600'>
          <LinkButton.Root variant='primary' underline>
            Upgrade
          </LinkButton.Root>{' '}
          to unlock unlimited date storage.
        </div>
      </div>
    </div>
  );
}
