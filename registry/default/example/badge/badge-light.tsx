import { RiFlashlightFill } from '@remixicon/react';

import * as Badge from '@/components/ui/badge';

export function BadgeLight() {
  return (
    <div className='flex flex-col items-center gap-6'>
      <Badge.Root variant='light'>
        <Badge.Icon as={RiFlashlightFill} />
        Badge
      </Badge.Root>

      <Badge.Root variant='light' color='red'>
        <Badge.Icon as={RiFlashlightFill} />
        Badge
      </Badge.Root>

      <Badge.Root variant='light' color='pink'>
        <Badge.Icon as={RiFlashlightFill} />
        Badge
      </Badge.Root>

      <Badge.Root variant='light' color='yellow'>
        <Badge.Icon as={RiFlashlightFill} />
        Badge
      </Badge.Root>

      <Badge.Root variant='light' color='blue'>
        <Badge.Icon as={RiFlashlightFill} />
        Badge
      </Badge.Root>
    </div>
  );
}
