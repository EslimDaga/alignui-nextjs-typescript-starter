'use client';

import * as React from 'react';

import * as Button from '@/components/ui/button';
import * as Drawer from '@/components/ui/drawer';

export function DrawerBasic() {
  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <Button.Root variant='neutral' mode='stroke' onClick={() => {}}>
          Open Drawer
        </Button.Root>
      </Drawer.Trigger>
      <Drawer.Content>
        <Drawer.Header>
          <Drawer.Title>Drawer Title</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
          <div className='text-paragraph-sm text-text-sub-600 flex h-full items-center justify-center text-center'>
            Drawer Body Content
          </div>
        </Drawer.Body>

        <Drawer.Footer className='border-t'>
          <Button.Root
            variant='neutral'
            mode='stroke'
            size='medium'
            className='w-full'
          >
            Footer Button
          </Button.Root>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer.Root>
  );
}
