import { RiFlashlightFill } from '@remixicon/react';

import * as Badge from '@/components/ui/badge';

export function BadgeFilled() {
  return (
    <div className='flex flex-col items-center gap-6'>
      <Badge.Root variant='filled'>
        <Badge.Icon as={RiFlashlightFill} />
        Badge
      </Badge.Root>

      <Badge.Root variant='filled' color='red'>
        <Badge.Icon as={RiFlashlightFill} />
        Badge
      </Badge.Root>

      <Badge.Root variant='filled' color='pink'>
        <Badge.Icon as={RiFlashlightFill} />
        Badge
      </Badge.Root>

      <Badge.Root variant='filled' color='yellow'>
        <Badge.Icon as={RiFlashlightFill} />
        Badge
      </Badge.Root>

      <Badge.Root variant='filled' color='blue'>
        <Badge.Icon as={RiFlashlightFill} />
        Badge
      </Badge.Root>
    </div>
  );
}
