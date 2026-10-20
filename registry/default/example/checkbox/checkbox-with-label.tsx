'use client';

import * as React from 'react';

import * as Checkbox from '@/components/ui/checkbox';
import * as Label from '@/components/ui/label';

export function CheckboxWithLabel() {
  const uniqueId = React.useId();

  return (
    <div className='flex flex-col gap-3'>
      <div className='flex items-center gap-2'>
        <Checkbox.Root id={`${uniqueId}-c1`} />
        <Label.Root className='text-paragraph-sm' htmlFor={`${uniqueId}-c1`}>
          SMS Verification
        </Label.Root>
      </div>
      <div className='flex items-center gap-2'>
        <Checkbox.Root id={`${uniqueId}-c2`} />
        <Label.Root className='text-paragraph-sm' htmlFor={`${uniqueId}-c2`}>
          Authenticator App
        </Label.Root>
      </div>
      <div className='flex items-center gap-2'>
        <Checkbox.Root id={`${uniqueId}-c3`} disabled />
        <Label.Root className='text-paragraph-sm' htmlFor={`${uniqueId}-c3`}>
          Disabled
        </Label.Root>
      </div>
      <div className='flex items-center gap-2'>
        <Checkbox.Root id={`${uniqueId}-c4`} disabled defaultChecked />
        <Label.Root className='text-paragraph-sm' htmlFor={`${uniqueId}-c4`}>
          Disabled but default checked
        </Label.Root>
      </div>
    </div>
  );
}
