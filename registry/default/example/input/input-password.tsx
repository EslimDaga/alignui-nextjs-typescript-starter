'use client';

import * as React from 'react';
import {
  RiEyeLine,
  RiEyeOffLine,
  RiInformationFill,
  RiLock2Line,
} from '@remixicon/react';

import * as Hint from '@/components/ui/hint';
import * as Input from '@/components/ui/input';
import * as Label from '@/components/ui/label';

export function InputPassword() {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className='flex w-full max-w-[300px] flex-col gap-6'>
      <div className='flex flex-col gap-1'>
        <Label.Root htmlFor='password1'>Password</Label.Root>

        <Input.Root>
          <Input.Wrapper>
            <Input.Icon as={RiLock2Line} />
            <Input.Input
              id='password1'
              type={showPassword ? 'text' : 'password'}
              placeholder='••••••••••'
            />
            <button type='button' onClick={() => setShowPassword((s) => !s)}>
              {showPassword ? (
                <RiEyeOffLine className='size-5 text-text-soft-400 group-has-[disabled]:text-text-disabled-300' />
              ) : (
                <RiEyeLine className='size-5 text-text-soft-400 group-has-[disabled]:text-text-disabled-300' />
              )}
            </button>
          </Input.Wrapper>
        </Input.Root>

        <Hint.Root>
          <Hint.Icon as={RiInformationFill} />
          This is a hint text to help user.
        </Hint.Root>
      </div>
    </div>
  );
}
