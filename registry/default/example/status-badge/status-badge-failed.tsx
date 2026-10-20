import { RiErrorWarningFill } from '@remixicon/react';

import * as StatusBadge from '@/components/ui/status-badge';

export function StatusBadgeFailed() {
  return (
    <div className='flex items-center gap-6'>
      <div className='flex flex-col gap-6'>
        <StatusBadge.Root status='failed'>
          <StatusBadge.Icon as={RiErrorWarningFill} />
          Badge
        </StatusBadge.Root>
        <StatusBadge.Root status='failed' variant='light'>
          <StatusBadge.Icon as={RiErrorWarningFill} />
          Badge
        </StatusBadge.Root>
      </div>
      <div className='flex flex-col gap-6'>
        <StatusBadge.Root status='failed'>
          <StatusBadge.Dot />
          Badge
        </StatusBadge.Root>
        <StatusBadge.Root status='failed' variant='light'>
          <StatusBadge.Dot />
          Badge
        </StatusBadge.Root>
      </div>
    </div>
  );
}
