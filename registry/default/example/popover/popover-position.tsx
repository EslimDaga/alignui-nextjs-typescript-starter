import { RiCloseLine, RiUser6Line } from '@remixicon/react';

import * as Button from '@/components/ui/button';
import * as CompactButton from '@/components/ui/compact-button';
import * as Popover from '@/components/ui/popover';

export function PopoverPosition() {
  return (
    <div className='flex flex-col items-center gap-6'>
      <Popover.Root>
        <Popover.Trigger asChild>
          <Button.Root variant='neutral' mode='stroke'>
            Top
          </Button.Root>
        </Popover.Trigger>
        <Popover.Content className='w-80' side='top'>
          <Popover.Close asChild>
            <CompactButton.Root size='large' variant='ghost'>
              <CompactButton.Icon as={RiCloseLine} />
            </CompactButton.Root>
          </Popover.Close>

          <div className='bg-bg-white-0 shadow-regular-xs ring-stroke-soft-200 flex size-12 shrink-0 items-center justify-center rounded-full ring-1 ring-inset'>
            <RiUser6Line className='text-text-sub-600 size-6' />
          </div>

          <div className='mt-4'>
            <div className='text-label-md text-text-strong-950'>
              Insert Popover
            </div>
            <p className='text-paragraph-sm text-text-sub-600 mt-1'>
              Insert popover description here. It would look much better as
              three lines of text.
            </p>
          </div>

          <div className='border-stroke-soft-200 -mx-5 -mb-5 mt-5 flex items-center justify-between gap-9 border-t px-5 py-4'>
            <span className='text-paragraph-sm text-text-sub-600'>
              Step 1 of 4
            </span>

            <div className='flex flex-1 gap-3'>
              <Button.Root
                size='small'
                variant='neutral'
                mode='stroke'
                className='w-full'
              >
                Back
              </Button.Root>
              <Button.Root size='small' className='w-full'>
                Next
              </Button.Root>
            </div>
          </div>
        </Popover.Content>
      </Popover.Root>

      <Popover.Root>
        <Popover.Trigger asChild>
          <Button.Root variant='neutral' mode='stroke'>
            Left
          </Button.Root>
        </Popover.Trigger>
        <Popover.Content className='w-80' side='left'>
          <Popover.Close asChild>
            <CompactButton.Root size='large' variant='ghost'>
              <CompactButton.Icon as={RiCloseLine} />
            </CompactButton.Root>
          </Popover.Close>

          <div className='bg-bg-white-0 shadow-regular-xs ring-stroke-soft-200 flex size-12 shrink-0 items-center justify-center rounded-full ring-1 ring-inset'>
            <RiUser6Line className='text-text-sub-600 size-6' />
          </div>

          <div className='mt-4'>
            <div className='text-label-md text-text-strong-950'>
              Insert Popover
            </div>
            <p className='text-paragraph-sm text-text-sub-600 mt-1'>
              Insert popover description here. It would look much better as
              three lines of text.
            </p>
          </div>

          <div className='border-stroke-soft-200 -mx-5 -mb-5 mt-5 flex items-center justify-between gap-9 border-t px-5 py-4'>
            <span className='text-paragraph-sm text-text-sub-600'>
              Step 1 of 4
            </span>

            <div className='flex flex-1 gap-3'>
              <Button.Root
                size='small'
                variant='neutral'
                mode='stroke'
                className='w-full'
              >
                Back
              </Button.Root>
              <Button.Root size='small' className='w-full'>
                Next
              </Button.Root>
            </div>
          </div>
        </Popover.Content>
      </Popover.Root>

      <Popover.Root>
        <Popover.Trigger asChild>
          <Button.Root variant='neutral' mode='stroke'>
            Right
          </Button.Root>
        </Popover.Trigger>
        <Popover.Content className='w-80' side='right'>
          <Popover.Close asChild>
            <CompactButton.Root size='large' variant='ghost'>
              <CompactButton.Icon as={RiCloseLine} />
            </CompactButton.Root>
          </Popover.Close>

          <div className='bg-bg-white-0 shadow-regular-xs ring-stroke-soft-200 flex size-12 shrink-0 items-center justify-center rounded-full ring-1 ring-inset'>
            <RiUser6Line className='text-text-sub-600 size-6' />
          </div>

          <div className='mt-4'>
            <div className='text-label-md text-text-strong-950'>
              Insert Popover
            </div>
            <p className='text-paragraph-sm text-text-sub-600 mt-1'>
              Insert popover description here. It would look much better as
              three lines of text.
            </p>
          </div>

          <div className='border-stroke-soft-200 -mx-5 -mb-5 mt-5 flex items-center justify-between gap-9 border-t px-5 py-4'>
            <span className='text-paragraph-sm text-text-sub-600'>
              Step 1 of 4
            </span>

            <div className='flex flex-1 gap-3'>
              <Button.Root
                size='small'
                variant='neutral'
                mode='stroke'
                className='w-full'
              >
                Back
              </Button.Root>
              <Button.Root size='small' className='w-full'>
                Next
              </Button.Root>
            </div>
          </div>
        </Popover.Content>
      </Popover.Root>
    </div>
  );
}
