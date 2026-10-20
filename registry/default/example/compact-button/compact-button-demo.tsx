import { RiAddLine } from '@remixicon/react';

import * as CompactButton from '@/components/ui/compact-button';

export function CompactButtonDemo() {
  return (
    <CompactButton.Root>
      <CompactButton.Icon as={RiAddLine} />
    </CompactButton.Root>
  );
}
