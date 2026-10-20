'use client';

import * as React from 'react';

import * as Select from '@/components/ui/select';
import { cn } from '@/utils/cn';

const paymentMtehods = [
  {
    icon: '/images/payment-methods/amex.svg',
    value: 'Amex',
    label: 'Amex',
  },
  {
    icon: '/images/payment-methods/amazon-pay.svg',
    value: 'AmazonPay',
    label: 'Amazon Pay',
  },
  {
    icon: '/images/payment-methods/apple-pay.svg',
    value: 'ApplePay',
    label: 'Apple Pay',
  },
  {
    icon: '/images/payment-methods/mastercard.svg',
    value: 'Mastercard',
    label: 'Mastercard',
    disabled: true,
  },
  {
    icon: '/images/payment-methods/bitcoin.svg',
    value: 'Bitcoin',
    label: 'Bitcoin',
  },
  {
    icon: '/images/payment-methods/citadele.svg',
    value: 'Citadele',
    label: 'Citadele',
  },
];

export function SelectPaymentMethod() {
  return (
    <div className='w-full max-w-[300px]'>
      <Select.Root>
        <Select.Trigger className='pl-2'>
          <Select.Value
            placeholder={
              <div className='flex items-center gap-2'>
                <Select.TriggerIcon
                  as='img'
                  src='/images/payment-methods/placeholder.svg'
                />{' '}
                Select a payment method...
              </div>
            }
          />
        </Select.Trigger>
        <Select.Content>
          {paymentMtehods.map((item) => (
            <Select.Item
              key={item.value}
              value={item.value}
              disabled={item.disabled}
            >
              <Select.ItemIcon
                className={cn(
                  'w-[26px] bg-[length:26px_20px]',
                  // different styles in trigger
                  'group-has-[&]/trigger:h-6 group-has-[&]/trigger:w-8 group-has-[&]/trigger:bg-[length:32px_24px]',
                )}
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
