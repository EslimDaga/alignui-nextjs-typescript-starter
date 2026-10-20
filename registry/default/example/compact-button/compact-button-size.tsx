import { RiAddLine } from '@remixicon/react';

import * as CompactButton from '@/components/ui/compact-button';

export function CompactButtonSize() {
  return (
    <div className='flex flex-col items-center gap-4'>
      <CompactButton.Root>
        <CompactButton.Icon as={RiAddLine} />
      </CompactButton.Root>

      <CompactButton.Root size='medium'>
        <CompactButton.Icon as={RiAddLine} />
      </CompactButton.Root>
    </div>
  );
}
