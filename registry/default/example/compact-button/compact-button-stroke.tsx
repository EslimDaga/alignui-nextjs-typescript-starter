import { RiAddLine } from '@remixicon/react';

import * as CompactButton from '@/components/ui/compact-button';

export function CompactButtonStroke() {
  return (
    <CompactButton.Root variant='stroke'>
      <CompactButton.Icon as={RiAddLine} />
    </CompactButton.Root>
  );
}
