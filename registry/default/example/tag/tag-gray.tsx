import { RiPushpinFill } from '@remixicon/react';

import * as Tag from '@/components/ui/tag';

export function TagGray() {
  return (
    <div className='flex gap-6'>
      <Tag.Root variant='gray'>Tag</Tag.Root>
      <Tag.Root variant='gray'>
        <Tag.Icon as={RiPushpinFill} />
        Customer
      </Tag.Root>
    </div>
  );
}
