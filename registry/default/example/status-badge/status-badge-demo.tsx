import { RiForbidFill } from '@remixicon/react';

import * as StatusBadge from '@/components/ui/status-badge';

export function StatusBadgeDemo() {
  return (
    <StatusBadge.Root>
      <StatusBadge.Icon as={RiForbidFill} />
      Badge
    </StatusBadge.Root>
  );
}
