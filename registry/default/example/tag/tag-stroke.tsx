import { RiPushpinFill } from '@remixicon/react';

import * as Tag from '@/components/ui/tag';

export function TagStroke() {
  return (
    <div className='flex gap-6'>
      <Tag.Root variant='stroke'>Tag</Tag.Root>
      <Tag.Root variant='stroke'>
        <Tag.Icon as={RiPushpinFill} />
        Customer
      </Tag.Root>
    </div>
  );
}
