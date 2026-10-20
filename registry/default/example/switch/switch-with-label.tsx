'use client';

import * as React from 'react';

import * as Label from '@/components/ui/label';
import * as Switch from '@/components/ui/switch';

export function SwitchxWithLabel() {
  const uniqueId = React.useId();

  return (
    <div className='flex flex-col gap-3'>
      <div className='flex items-center gap-2'>
        <Switch.Root id={`${uniqueId}-s1`} />
        <Label.Root className='text-paragraph-sm' htmlFor={`${uniqueId}-s1`}>
          SMS Verification
        </Label.Root>
      </div>
      <div className='flex items-center gap-2'>
        <Switch.Root id={`${uniqueId}-s2`} />
        <Label.Root className='text-paragraph-sm' htmlFor={`${uniqueId}-s2`}>
          Authenticator App
        </Label.Root>
      </div>
      <div className='flex items-center gap-2'>
        <Switch.Root id={`${uniqueId}-s3`} disabled />
        <Label.Root className='text-paragraph-sm' htmlFor={`${uniqueId}-s3`}>
          Disabled
        </Label.Root>
      </div>
      <div className='flex items-center gap-2'>
        <Switch.Root id={`${uniqueId}-s4`} disabled defaultChecked />
        <Label.Root className='text-paragraph-sm' htmlFor={`${uniqueId}-s4`}>
          Disabled but default checked
        </Label.Root>
      </div>
    </div>
  );
}
