import { RiForbidFill } from '@remixicon/react';

import * as StatusBadge from '@/components/ui/status-badge';

export function StatusBadgeAsChild() {
  return (
    <StatusBadge.Root asChild>
      <button type='button'>
        <StatusBadge.Icon as={RiForbidFill} />
        Badge
      </button>
    </StatusBadge.Root>
  );
}
