import { RiAddLine } from '@remixicon/react';

import * as CompactButton from '@/components/ui/compact-button';

export function CompactButtonWhite() {
  return (
    <CompactButton.Root variant='white'>
      <CompactButton.Icon as={RiAddLine} />
    </CompactButton.Root>
  );
}
