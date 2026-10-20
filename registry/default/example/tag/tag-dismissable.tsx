'use client';

import { RiPushpinFill } from '@remixicon/react';

import * as Tag from '@/components/ui/tag';

export function TagDismissable() {
  return (
    <div className='flex flex-col items-center gap-6'>
      <div className='flex gap-6'>
        <Tag.Root>
          Tag
          <Tag.DismissButton onClick={() => alert('dismiss clicked!')} />
        </Tag.Root>
        <Tag.Root>
          <Tag.Icon as={RiPushpinFill} />
          Customer
          <Tag.DismissButton onClick={() => alert('dismiss clicked!')} />
        </Tag.Root>
      </div>

      <div className='flex gap-6'>
        <Tag.Root variant='gray'>
          Tag
          <Tag.DismissButton onClick={() => alert('dismiss clicked!')} />
        </Tag.Root>
        <Tag.Root variant='gray'>
          <Tag.Icon as={RiPushpinFill} />
          Customer
          <Tag.DismissButton onClick={() => alert('dismiss clicked!')} />
        </Tag.Root>
      </div>
    </div>
  );
}
