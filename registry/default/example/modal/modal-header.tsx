'use client';

import * as React from 'react';
import { RiChatSettingsLine } from '@remixicon/react';

import * as Avatar from '@/components/ui/avatar';
import * as Button from '@/components/ui/button';
import * as Modal from '@/components/ui/modal';
import * as SegmentedControl from '@/components/ui/segmented-control';
import * as Switch from '@/components/ui/switch';

export function ModalHeader() {
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
      <Modal.Content>
        <Modal.Header
          icon={RiChatSettingsLine}
          title='Communication Preferences'
          description='Choose contact preferences for companies.'
        />
        <Modal.Body>
          <SegmentedControl.Root>
            <SegmentedControl.List>
              <SegmentedControl.Trigger value='email'>
                Email
              </SegmentedControl.Trigger>
              <SegmentedControl.Trigger value='sms'>
                SMS
              </SegmentedControl.Trigger>
              <SegmentedControl.Trigger value='push'>
                Push
              </SegmentedControl.Trigger>
            </SegmentedControl.List>
          </SegmentedControl.Root>

          <div className='mt-5 space-y-5'>
            <div className='flex items-center gap-3.5'>
              <Avatar.Root size='40'>
                <Avatar.Image src='/images/logo/apex.svg' />
              </Avatar.Root>
              <div className='flex-1 space-y-1'>
                <div className='text-label-sm text-text-strong-950'>Apex</div>
                <div className='text-paragraph-xs text-text-sub-600'>
                  Allow Apex to contact you.
                </div>
              </div>
              <Switch.Root />
            </div>
            <div className='flex items-center gap-3.5'>
              <Avatar.Root size='40'>
                <Avatar.Image src='/images/logo/aurora.svg' />
              </Avatar.Root>
              <div className='flex-1 space-y-1'>
                <div className='text-label-sm text-text-strong-950'>Aurora</div>
                <div className='text-paragraph-xs text-text-sub-600'>
                  Allow Aurora to contact you.
                </div>
              </div>
              <Switch.Root />
            </div>
            <div className='flex items-center gap-3.5'>
              <Avatar.Root size='40'>
                <Avatar.Image src='/images/logo/solaris.svg' />
              </Avatar.Root>
              <div className='flex-1 space-y-1'>
                <div className='text-label-sm text-text-strong-950'>
                  Solaris
                </div>
                <div className='text-paragraph-xs text-text-sub-600'>
                  Allow Solaris to contact you.
                </div>
              </div>
              <Switch.Root />
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
            Update Changes
          </Button.Root>
        </Modal.Footer>
      </Modal.Content>
    </Modal.Root>
  );
}
