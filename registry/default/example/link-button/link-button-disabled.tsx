import { RiArrowRightSLine } from '@remixicon/react';

import * as LinkButton from '@/components/ui/link-button';

export function LinkButtonDisabled() {
  return (
    <div className='flex flex-col items-center gap-4'>
      <LinkButton.Root variant='gray' disabled>
        Link Button
        <LinkButton.Icon as={RiArrowRightSLine} />
      </LinkButton.Root>

      <LinkButton.Root variant='black' disabled>
        Link Button
        <LinkButton.Icon as={RiArrowRightSLine} />
      </LinkButton.Root>

      <LinkButton.Root variant='primary' disabled>
        Link Button
        <LinkButton.Icon as={RiArrowRightSLine} />
      </LinkButton.Root>

      <LinkButton.Root variant='error' disabled>
        Link Button
        <LinkButton.Icon as={RiArrowRightSLine} />
      </LinkButton.Root>

      <LinkButton.Root
        variant='modifiable'
        className='text-success-base'
        disabled
      >
        Link Button
        <LinkButton.Icon as={RiArrowRightSLine} />
      </LinkButton.Root>
    </div>
  );
}
