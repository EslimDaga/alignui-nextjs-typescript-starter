'use client';

import * as React from 'react';
import {
  RiAddLine,
  RiCalendar2Line,
  RiComputerLine,
  RiDriveLine,
  RiFileList2Line,
  RiGlobeLine,
  RiLinksLine,
  RiPencilLine,
  RiRocketLine,
} from '@remixicon/react';

import * as Button from '@/components/ui/button';
import * as Divider from '@/components/ui/divider';
import * as Dropdown from '@/components/ui/dropdown';

export function DropdownSubMenu() {
  return (
    <Dropdown.Root>
      <Dropdown.Trigger asChild>
        <Button.Root variant='neutral' mode='stroke'>
          Open
        </Button.Root>
      </Dropdown.Trigger>
      <Dropdown.Content align='start'>
        <Dropdown.Group>
          <Dropdown.Item>
            <Dropdown.ItemIcon as={RiAddLine} />
            New post creation
          </Dropdown.Item>
          <Dropdown.MenuSub>
            <Dropdown.MenuSubTrigger>
              <Dropdown.ItemIcon as={RiFileList2Line} />
              Template Options
            </Dropdown.MenuSubTrigger>
            <Dropdown.MenuSubContent>
              <Dropdown.Item>
                <Dropdown.ItemIcon as={RiPencilLine} />
                Draft Post
              </Dropdown.Item>
              <Dropdown.Item>
                <Dropdown.ItemIcon as={RiRocketLine} />
                Publish Now
              </Dropdown.Item>
              <Dropdown.Item>
                <Dropdown.ItemIcon as={RiCalendar2Line} />
                Schedule Post
              </Dropdown.Item>
            </Dropdown.MenuSubContent>
          </Dropdown.MenuSub>
        </Dropdown.Group>
        <Divider.Root variant='line-spacing' />
        <Dropdown.Group>
          <Dropdown.MenuSub>
            <Dropdown.MenuSubTrigger>
              <Dropdown.ItemIcon as={RiLinksLine} />
              Import Content from File
            </Dropdown.MenuSubTrigger>
            <Dropdown.MenuSubContent>
              <Dropdown.Item>
                <Dropdown.ItemIcon as={RiComputerLine} />
                Upload from Computer
              </Dropdown.Item>
              <Dropdown.Item>
                <Dropdown.ItemIcon as={RiGlobeLine} />
                Import from URL
              </Dropdown.Item>
            </Dropdown.MenuSubContent>
          </Dropdown.MenuSub>
          <Dropdown.Item>
            <Dropdown.ItemIcon as={RiDriveLine} />
            Import from Google Drive
          </Dropdown.Item>
        </Dropdown.Group>
      </Dropdown.Content>
    </Dropdown.Root>
  );
}
