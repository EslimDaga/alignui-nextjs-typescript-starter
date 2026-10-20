'use client';

import * as React from 'react';

import * as DigitInput from '@/components/ui/digit-input';

export function DigitInputSquare() {
  const [digitInputValue, setDigitInputValue] = React.useState('');

  return (
    <div className='w-full max-w-96'>
      <DigitInput.Root
        numInputs={4}
        onChange={(value) => setDigitInputValue(value)}
        value={digitInputValue}
        className='justify-center [&>input]:aspect-square [&>input]:w-auto'
      />
    </div>
  );
}
