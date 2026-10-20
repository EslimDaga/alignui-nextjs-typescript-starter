import { RiFlashlightFill } from '@remixicon/react';

import * as Badge from '@/components/ui/badge';

export function BadgeWithIcon() {
  return (
    <div className='flex flex-col items-center gap-6'>
      <Badge.Root>
        <Badge.Icon as={RiFlashlightFill} />
        Badge
      </Badge.Root>

      <Badge.Root>
        Badge
        <Badge.Icon as={RiFlashlightFill} />
      </Badge.Root>
    </div>
  );
}
