'use client';

import * as React from 'react';

import * as DigitInput from '@/components/ui/digit-input';

export function DigitInputDisabled() {
  const [digitInputValue, setDigitInputValue] = React.useState('');

  return (
    <div className='w-full max-w-96'>
      <DigitInput.Root
        disabled
        numInputs={4}
        onChange={(value) => setDigitInputValue(value)}
        value={digitInputValue}
      />
    </div>
  );
}
