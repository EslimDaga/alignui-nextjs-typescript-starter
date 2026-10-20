import { RiForbidFill } from '@remixicon/react';

import * as StatusBadge from '@/components/ui/status-badge';

export function StatusBadgeDisabled() {
  return (
    <div className='flex items-center gap-6'>
      <div className='flex flex-col gap-6'>
        <StatusBadge.Root status='disabled'>
          <StatusBadge.Icon as={RiForbidFill} />
          Badge
        </StatusBadge.Root>
        <StatusBadge.Root status='disabled' variant='light'>
          <StatusBadge.Icon as={RiForbidFill} />
          Badge
        </StatusBadge.Root>
      </div>
      <div className='flex flex-col gap-6'>
        <StatusBadge.Root status='disabled'>
          <StatusBadge.Dot />
          Badge
        </StatusBadge.Root>
        <StatusBadge.Root status='disabled' variant='light'>
          <StatusBadge.Dot />
          Badge
        </StatusBadge.Root>
      </div>
    </div>
  );
}
