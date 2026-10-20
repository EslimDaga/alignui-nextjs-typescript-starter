import { RiAddLine } from '@remixicon/react';

import * as CompactButton from '@/components/ui/compact-button';

export function CompactButtonModifiable() {
  return (
    <CompactButton.Root
      variant='modifiable'
      className='text-error-base hover:bg-error-lighter'
    >
      <CompactButton.Icon as={RiAddLine} />
    </CompactButton.Root>
  );
}
