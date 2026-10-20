import { RiPushpinFill } from '@remixicon/react';

import * as Tag from '@/components/ui/tag';

export function TagDisabled() {
  return (
    <div className='flex flex-col items-center gap-6'>
      <div className='flex gap-6'>
        <Tag.Root variant='stroke' disabled>
          Tag
        </Tag.Root>
        <Tag.Root variant='stroke' disabled>
          <Tag.Icon as={RiPushpinFill} />
          Customer
        </Tag.Root>
      </div>

      <div className='flex gap-6'>
        <Tag.Root variant='gray' disabled>
          Tag
        </Tag.Root>
        <Tag.Root variant='gray' disabled>
          <Tag.Icon as={RiPushpinFill} />
          Customer
        </Tag.Root>
      </div>
    </div>
  );
}
