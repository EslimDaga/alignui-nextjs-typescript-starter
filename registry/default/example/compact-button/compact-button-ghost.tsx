import { RiAddLine } from '@remixicon/react';

import * as CompactButton from '@/components/ui/compact-button';

export function CompactButtonGhost() {
  return (
    <CompactButton.Root variant='ghost'>
      <CompactButton.Icon as={RiAddLine} />
    </CompactButton.Root>
  );
}
