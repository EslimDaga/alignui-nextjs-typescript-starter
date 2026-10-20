'use client';

import * as React from 'react';
import {
  RiBuildingLine,
  RiFileList2Line,
  RiFlashlightLine,
  RiHandCoinLine,
  RiHome4Line,
  RiSmartphoneLine,
} from '@remixicon/react';

import * as Select from '@/components/ui/select';

const payments = [
  {
    icon: RiFlashlightLine,
    value: 'utility-payment',
    label: 'Utility Payment',
  },
  {
    icon: RiHome4Line,
    value: 'rent-payment',
    label: 'Rent Payment',
  },
  {
    icon: RiHandCoinLine,
    value: 'donation',
    label: 'Donation',
  },
  {
    icon: RiFileList2Line,
    value: 'tax-payment',
    label: 'Tax Payment',
    disabled: true,
  },
  {
    icon: RiBuildingLine,
    value: 'tuition-fee',
    label: 'Tuition Fee',
  },
  {
    icon: RiSmartphoneLine,
    value: 'phone-bill',
    label: 'Phone Bill',
  },
];

export function SelectPayment() {
  return (
    <div className='w-full max-w-[300px] space-y-6'>
      <Select.Root defaultValue='utility-payment'>
        <Select.Trigger>
          <Select.Value placeholder='Select a payment...' />
        </Select.Trigger>
        <Select.Content>
          {payments.map((item) => (
            <Select.Item
              key={item.value}
              value={item.value}
              disabled={item.disabled}
            >
              <Select.ItemIcon as={item.icon} />
              {item.label}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>

      <Select.Root defaultValue='utility-payment' size='small'>
        <Select.Trigger>
          <Select.Value placeholder='Select a payment...' />
        </Select.Trigger>
        <Select.Content>
          {payments.map((item) => (
            <Select.Item
              key={item.value}
              value={item.value}
              disabled={item.disabled}
            >
              <Select.ItemIcon as={item.icon} />
              {item.label}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>

      <Select.Root defaultValue='utility-payment' size='xsmall'>
        <Select.Trigger>
          <Select.Value placeholder='Select a payment...' />
        </Select.Trigger>
        <Select.Content>
          {payments.map((item) => (
            <Select.Item
              key={item.value}
              value={item.value}
              disabled={item.disabled}
            >
              <Select.ItemIcon as={item.icon} />
              {item.label}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
    </div>
  );
}
