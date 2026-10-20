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

function SelectCountry({ size }: React.ComponentProps<typeof Select.Root>) {
  return (
    <Select.Root variant='compactForInput' defaultValue='EUR' size={size}>
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

export function SelectWithInputSize() {
  return (
    <div className='flex w-full max-w-[300px] flex-col gap-6'>
      <Input.Root size='medium'>
        <Input.Wrapper>
          <Input.InlineAffix>€</Input.InlineAffix>
          <Input.Input placeholder='0.00' />
        </Input.Wrapper>
        <SelectCountry size='medium' />
      </Input.Root>

      <Input.Root size='small'>
        <Input.Wrapper>
          <Input.InlineAffix>€</Input.InlineAffix>
          <Input.Input placeholder='0.00' />
        </Input.Wrapper>
        <SelectCountry size='small' />
      </Input.Root>

      <Input.Root size='xsmall'>
        <Input.Wrapper>
          <Input.InlineAffix>€</Input.InlineAffix>
          <Input.Input placeholder='0.00' />
        </Input.Wrapper>
        <SelectCountry size='xsmall' />
      </Input.Root>
    </div>
  );
}
