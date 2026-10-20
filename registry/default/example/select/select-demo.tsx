'use client';

import * as React from 'react';

import * as Select from '@/components/ui/select';

const fruits = [
  {
    value: 'apple',
    label: 'Apple',
  },
  {
    value: 'carrot',
    label: 'Carrot',
  },
  {
    value: 'banana',
    label: 'Banana',
  },
  {
    value: 'broccoli',
    label: 'Broccoli',
  },
];

export function SelectBrand() {
  return (
    <div className='w-full max-w-[300px]'>
      <Select.Root>
        <Select.Trigger>
          <Select.Value placeholder='Select your favorite fruit...' />
        </Select.Trigger>
        <Select.Content>
          {fruits.map((item) => (
            <Select.Item key={item.value} value={item.value}>
              {item.label}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
    </div>
  );
}
