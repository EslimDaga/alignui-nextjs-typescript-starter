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

export function SelectCompactCountry() {
  return (
    <Select.Root variant='compact'>
      <Select.Trigger className='pl-2.5'>
        <Select.Value placeholder={<Select.TriggerIcon as={RiGlobalLine} />} />
      </Select.Trigger>
      <Select.Content align='center'>
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
            <span className='group-has-[&]/trigger:hidden'>{item.label}</span>
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
}
