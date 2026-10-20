'use client';

import * as React from 'react';

import * as Input from '@/components/ui/input';
import * as Select from '@/components/ui/select';

const currencies = [
  {
    icon: '/flags/EU.svg',
    value: 'EUR',
    label: 'EUR',
  },
  {
    icon: '/flags/US.svg',
    value: 'USD',
    label: 'USD',
  },
  {
    icon: '/flags/TR.svg',
    value: 'TRY',
    label: 'TRY',
  },
];

function SelectCountry() {
  return (
    <Select.Root variant='compactForInput' defaultValue='EUR'>
      <Select.Trigger>
        <Select.Value />
      </Select.Trigger>
      <Select.Content>
        {currencies.map((item) => (
          <Select.Item key={item.value} value={item.value}>
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

export function SelectWithInput() {
  return (
    <div className='w-full max-w-[300px]'>
      <Input.Root>
        <Input.Wrapper>
          <Input.InlineAffix>€</Input.InlineAffix>
          <Input.Input placeholder='0.00' />
        </Input.Wrapper>
        <SelectCountry />
      </Input.Root>
    </div>
  );
}
