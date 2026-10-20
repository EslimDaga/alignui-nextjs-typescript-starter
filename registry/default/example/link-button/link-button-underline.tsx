import * as LinkButton from '@/components/ui/link-button';

export function LinkButtonUnderline() {
  return (
    <div className='flex flex-col items-center gap-4'>
      <LinkButton.Root underline variant='gray'>
        Link Button
      </LinkButton.Root>
      <LinkButton.Root underline variant='black'>
        Link Button
      </LinkButton.Root>
      <LinkButton.Root underline variant='primary'>
        Link Button
      </LinkButton.Root>
      <LinkButton.Root underline variant='error'>
        Link Button
      </LinkButton.Root>
    </div>
  );
}
