'use client';

import * as React from 'react';
import { RiGlobalLine } from '@remixicon/react';

import * as Select from '@/components/ui/select';

const countries = [
  {
    icon: '/flags/US.svg',
    value: 'us',
    label: 'US',
  },
  {
    icon: '/flags/DE.svg',
    value: 'de',
    label: 'DE',
  },
  {
    icon: '/flags/FR.svg',
    value: 'fr',
    label: 'FR',
    disabled: true,
  },
  {
    icon: '/flags/TR.svg',
    value: 'tr',
    label: 'TR',
  },
  {
    icon: '/flags/DK.svg',
    value: 'dk',
    label: 'DK',
  },
  {
    icon: '/flags/FI.svg',
    value: 'fi',
    label: 'FI',
  },
];

export function SelectInlineCountry() {
  return (
    <Select.Root variant='inline'>
      <Select.Trigger>
        <Select.Value
          placeholder={
            <>
              <div className='flex items-center'>
                <Select.TriggerIcon as={RiGlobalLine} /> Select
              </div>
            </>
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
  );
}
