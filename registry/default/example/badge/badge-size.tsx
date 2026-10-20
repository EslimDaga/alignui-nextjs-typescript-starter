import { RiFlashlightFill } from '@remixicon/react';

import * as Badge from '@/components/ui/badge';

export function BadgeSize() {
  return (
    <div className='flex items-center gap-6'>
      <div className='flex flex-col gap-6'>
        <Badge.Root size='medium'>
          <Badge.Icon as={RiFlashlightFill} />
          Badge
        </Badge.Root>

        <Badge.Root>
          <Badge.Icon as={RiFlashlightFill} />
          Badge
        </Badge.Root>
      </div>

      <div className='flex flex-col gap-6'>
        <Badge.Root size='medium'>
          <Badge.Dot />
          Badge
        </Badge.Root>

        <Badge.Root>
          <Badge.Dot />
          Badge
        </Badge.Root>
      </div>
    </div>
  );
}
