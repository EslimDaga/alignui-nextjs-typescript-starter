'use client';

import * as React from 'react';
import { RiCheckboxCircleFill } from '@remixicon/react';

import * as Button from '@/components/ui/button';
import * as Modal from '@/components/ui/modal';

export function ModalDemo() {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal.Root open={open} onOpenChange={setOpen}>
      <Modal.Trigger asChild>
        <Button.Root
          variant='neutral'
          mode='stroke'
          onClick={() => setOpen(true)}
        >
          Click to open
        </Button.Root>
      </Modal.Trigger>
      <Modal.Content className='max-w-[440px]'>
        <Modal.Body className='flex items-start gap-4'>
          <div className='rounded-10 bg-success-lighter flex size-10 shrink-0 items-center justify-center'>
            <RiCheckboxCircleFill className='text-success-base size-6' />
          </div>
          <div className='space-y-1'>
            <div className='text-label-md text-text-strong-950'>
              Payment Received
            </div>
            <div className='text-paragraph-sm text-text-sub-600'>
              Your payment has been successfully received. You have unlocked
              premium services now.
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Modal.Close asChild>
            <Button.Root
              variant='neutral'
              mode='stroke'
              size='small'
              className='w-full'
            >
              Cancel
            </Button.Root>
          </Modal.Close>
          <Button.Root size='small' className='w-full'>
            View Receipt
          </Button.Root>
        </Modal.Footer>
      </Modal.Content>
    </Modal.Root>
  );
}
