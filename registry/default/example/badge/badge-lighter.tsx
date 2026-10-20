import { RiFlashlightFill } from '@remixicon/react';

import * as Badge from '@/components/ui/badge';

export function BadgeLighter() {
  return (
    <div className='flex flex-col items-center gap-6'>
      <Badge.Root variant='lighter'>
        <Badge.Icon as={RiFlashlightFill} />
        Badge
      </Badge.Root>

      <Badge.Root variant='lighter' color='red'>
        <Badge.Icon as={RiFlashlightFill} />
        Badge
      </Badge.Root>

      <Badge.Root variant='lighter' color='pink'>
        <Badge.Icon as={RiFlashlightFill} />
        Badge
      </Badge.Root>

      <Badge.Root variant='lighter' color='yellow'>
        <Badge.Icon as={RiFlashlightFill} />
        Badge
      </Badge.Root>

      <Badge.Root variant='lighter' color='blue'>
        <Badge.Icon as={RiFlashlightFill} />
        Badge
      </Badge.Root>
    </div>
  );
}
