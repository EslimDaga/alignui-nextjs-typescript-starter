import { RiAddLine } from '@remixicon/react';

import * as CompactButton from '@/components/ui/compact-button';

export function CompactButtonDisabled() {
  return (
    <CompactButton.Root disabled>
      <CompactButton.Icon as={RiAddLine} />
    </CompactButton.Root>
  );
}
