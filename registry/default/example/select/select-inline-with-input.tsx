'use client';

import * as React from 'react';
import { RiGlobalLine, RiUser6Line } from '@remixicon/react';

import * as Input from '@/components/ui/input';
import * as Select from '@/components/ui/select';

const data = [
  {
    value: 'view',
    label: 'can view',
  },
  {
    value: 'edit',
    label: 'can edit',
  },
];

function SelectInline() {
  return (
    <Select.Root variant='inline' defaultValue='view'>
      <Select.Trigger>
        <Select.TriggerIcon as={RiGlobalLine} />
        <Select.Value />
      </Select.Trigger>
      <Select.Content>
        {data.map((item) => (
          <Select.Item key={item.value} value={item.value}>
            {item.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
}

export function InputWithInlineSelect() {
  return (
    <div className='w-full max-w-[300px]'>
      <Input.Root>
        <Input.Wrapper>
          <Input.Icon as={RiUser6Line} />
          <Input.Input placeholder='Placeholder text...' />
          <SelectInline />
        </Input.Wrapper>
      </Input.Root>
    </div>
  );
}
