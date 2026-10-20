import { RiCheckboxCircleFill } from '@remixicon/react';

import * as StatusBadge from '@/components/ui/status-badge';

export function StatusBadgeCompleted() {
  return (
    <div className='flex items-center gap-6'>
      <div className='flex flex-col gap-6'>
        <StatusBadge.Root status='completed'>
          <StatusBadge.Icon as={RiCheckboxCircleFill} />
          Badge
        </StatusBadge.Root>
        <StatusBadge.Root status='completed' variant='light'>
          <StatusBadge.Icon as={RiCheckboxCircleFill} />
          Badge
        </StatusBadge.Root>
      </div>
      <div className='flex flex-col gap-6'>
        <StatusBadge.Root status='completed'>
          <StatusBadge.Dot />
          Badge
        </StatusBadge.Root>
        <StatusBadge.Root status='completed' variant='light'>
          <StatusBadge.Dot />
          Badge
        </StatusBadge.Root>
      </div>
    </div>
  );
}
