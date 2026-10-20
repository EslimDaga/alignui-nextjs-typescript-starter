'use client';

import * as React from 'react';
import { RiInformationFill } from '@remixicon/react';

import * as Hint from '@/components/ui/hint';
import * as Label from '@/components/ui/label';
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

export function SelectWithLabelHint() {
  return (
    <div className='w-full max-w-[300px]'>
      <div className='flex flex-col gap-1'>
        <Label.Root htmlFor='fruit'>Fruit</Label.Root>

        <Select.Root>
          <Select.Trigger id='fruit'>
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

        <Hint.Root>
          <Hint.Icon as={RiInformationFill} />
          This is a hint text to help user.
        </Hint.Root>
      </div>
    </div>
  );
}
