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

const pages = [
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

export function SelectCompactSize() {
  return (
    <div className='flex gap-6'>
      <div className='flex flex-col items-center gap-6'>
        <Select.Root variant='compact'>
          <Select.Trigger>
            <Select.Value
              placeholder={<Select.TriggerIcon as={RiGlobalLine} />}
            />
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
                <span className='group-has-[&]/trigger:hidden'>
                  {item.label}
                </span>
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Root>

        <Select.Root variant='compact' size='small'>
          <Select.Trigger>
            <Select.Value
              placeholder={<Select.TriggerIcon as={RiGlobalLine} />}
            />
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
                <span className='group-has-[&]/trigger:hidden'>
                  {item.label}
                </span>
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Root>

        <Select.Root variant='compact' size='xsmall'>
          <Select.Trigger>
            <Select.Value
              placeholder={<Select.TriggerIcon as={RiGlobalLine} />}
            />
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
                <span className='group-has-[&]/trigger:hidden'>
                  {item.label}
                </span>
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Root>
      </div>

      <div className='flex flex-col items-center gap-6'>
        <Select.Root variant='compact' defaultValue='25'>
          <Select.Trigger>
            <Select.Value />
          </Select.Trigger>
          <Select.Content align='center'>
            {pages.map((item) => (
              <Select.Item key={item.value} value={item.value}>
                {item.label}
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Root>

        <Select.Root variant='compact' size='small' defaultValue='25'>
          <Select.Trigger>
            <Select.Value />
          </Select.Trigger>
          <Select.Content align='center'>
            {pages.map((item) => (
              <Select.Item key={item.value} value={item.value}>
                {item.label}
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Root>

        <Select.Root variant='compact' size='xsmall' defaultValue='25'>
          <Select.Trigger>
            <Select.Value />
          </Select.Trigger>
          <Select.Content align='center'>
            {pages.map((item) => (
              <Select.Item key={item.value} value={item.value}>
                {item.label}
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Root>
      </div>
    </div>
  );
}
