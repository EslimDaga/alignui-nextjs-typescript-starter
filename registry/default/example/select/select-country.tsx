'use client';

import * as React from 'react';
import { RiGlobalLine } from '@remixicon/react';

import * as Select from '@/components/ui/select';

const countries = [
  {
    icon: '/flags/US.svg',
    value: 'us',
    label: 'United States',
  },
  {
    icon: '/flags/DE.svg',
    value: 'germany',
    label: 'Germany',
  },
  {
    icon: '/flags/FR.svg',
    value: 'france',
    label: 'France',
    disabled: true,
  },
  {
    icon: '/flags/TR.svg',
    value: 'turkey',
    label: 'Turkey',
  },
  {
    icon: '/flags/DK.svg',
    value: 'denmark',
    label: 'Denmark',
  },
  {
    icon: '/flags/FI.svg',
    value: 'finland',
    label: 'Finland',
  },
];

export function SelectCountry() {
  return (
    <div className='w-full max-w-[300px]'>
      <Select.Root>
        <Select.Trigger>
          <Select.Value
            placeholder={
              <div className='flex items-center gap-2'>
                <Select.TriggerIcon as={RiGlobalLine} /> Select a country...
              </div>
            }
          />
        </Select.Trigger>
        <Select.Content>
          {countries.map((item) => (
            <Select.Item
              key={item.value}
              value={item.value}
              disabled={item.disabled}
            >
              <Select.ItemIcon
                style={{
                  backgroundImage: `url(${item.icon})`,
                }}
              />
              {item.label}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
    </div>
  );
}
