import { RiAddLine } from '@remixicon/react';

import * as CompactButton from '@/components/ui/compact-button';

export function CompactButtonAsChild() {
  return (
    <CompactButton.Root asChild>
      <a href='#'>
        <CompactButton.Icon as={RiAddLine} />
      </a>
    </CompactButton.Root>
  );
}
