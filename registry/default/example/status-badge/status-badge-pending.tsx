import { RiAlertFill } from '@remixicon/react';

import * as StatusBadge from '@/components/ui/status-badge';

export function StatusBadgePending() {
  return (
    <div className='flex items-center gap-6'>
      <div className='flex flex-col gap-6'>
        <StatusBadge.Root status='pending'>
          <StatusBadge.Icon as={RiAlertFill} />
          Badge
        </StatusBadge.Root>
        <StatusBadge.Root status='pending' variant='light'>
          <StatusBadge.Icon as={RiAlertFill} />
          Badge
        </StatusBadge.Root>
      </div>
      <div className='flex flex-col gap-6'>
        <StatusBadge.Root status='pending'>
          <StatusBadge.Dot />
          Badge
        </StatusBadge.Root>
        <StatusBadge.Root status='pending' variant='light'>
          <StatusBadge.Dot />
          Badge
        </StatusBadge.Root>
      </div>
    </div>
  );
}
