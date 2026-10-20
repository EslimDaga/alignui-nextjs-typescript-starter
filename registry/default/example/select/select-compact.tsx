'use client';

import * as React from 'react';

import * as Select from '@/components/ui/select';

const items = [
  {
    value: '5',
    label: '5',
  },
  {
    value: '10',
    label: '10',
  },
  {
    value: '25',
    label: '25',
  },
  {
    value: '100',
    label: '100',
  },
];

export function SelectCompact() {
  return (
    <Select.Root variant='compact' defaultValue='25'>
      <Select.Trigger>
        <Select.Value />
      </Select.Trigger>
      <Select.Content align='center'>
        {items.map((item) => (
          <Select.Item key={item.value} value={item.value}>
            {item.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
}
