'use client';

import * as React from 'react';
import { RiBankCardLine } from '@remixicon/react';
import { usePaymentInputs } from 'react-payment-inputs';

import * as Input from '@/components/ui/input';
import * as Label from '@/components/ui/label';

export function PaymentInput() {
  const { getCardNumberProps, meta } = usePaymentInputs();
  const { cardType } = meta;

  const cardIcon = React.useMemo(() => {
    if (cardType?.displayName === 'Visa') {
      return '/images/payment-methods/visa.svg';
    }
    if (cardType?.displayName === 'Mastercard') {
      return '/images/payment-methods/mastercard.svg';
    }
    if (cardType?.displayName === 'American Express') {
      return '/images/payment-methods/amex.svg';
    }
    return '/images/payment-methods/placeholder.svg';
  }, [cardType?.displayName]);

  return (
    <div className='w-full max-w-[300px]'>
      <div className='flex flex-col gap-1'>
        <Label.Root htmlFor='card-number'>
          Card Number <Label.Asterisk />
        </Label.Root>

        <Input.Root>
          <Input.Wrapper className='pr-2'>
            <Input.Icon as={RiBankCardLine} />
            <Input.Input
              {...getCardNumberProps()}
              id='card-number'
              placeholder='0000 0000 0000 0000'
            />
            <img src={cardIcon} alt='' className='h-6 w-8 shrink-0' />
          </Input.Wrapper>
        </Input.Root>
      </div>
    </div>
  );
}
