'use client';

import * as React from 'react';
import {
  RiEyeLine,
  RiEyeOffLine,
  RiLock2Line,
  type RemixiconComponentType,
} from '@remixicon/react';

import * as InputPrimitives from '@/components/ui/input';
import * as Label from '@/components/ui/label';

type InputProps = React.ComponentPropsWithoutRef<typeof InputPrimitives.Input> &
  Pick<
    React.ComponentPropsWithoutRef<typeof InputPrimitives.Root>,
    'hasError' | 'size'
  > & {
    leadingIcon?: RemixiconComponentType;
    trailingIcon?: RemixiconComponentType;
    leadingNode?: React.ReactNode;
    trailingNode?: React.ReactNode;
    inlineLeadingNode?: React.ReactNode;
    inlineTrailingNode?: React.ReactNode;
  };

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size,
      hasError,
      leadingIcon: LeadingIcon,
      trailingIcon: TrailingIcon,
      leadingNode,
      trailingNode,
      inlineLeadingNode,
      inlineTrailingNode,
      ...rest
    },
    forwardedRef,
  ) => {
    return (
      <InputPrimitives.Root size={size} hasError={hasError}>
        {leadingNode}
        <InputPrimitives.Wrapper>
          {inlineLeadingNode}
          {LeadingIcon && <InputPrimitives.Icon as={LeadingIcon} />}
          <InputPrimitives.Input ref={forwardedRef} type='text' {...rest} />
          {TrailingIcon && <InputPrimitives.Icon as={TrailingIcon} />}
          {inlineTrailingNode}
        </InputPrimitives.Wrapper>
        {trailingNode}
      </InputPrimitives.Root>
    );
  },
);
Input.displayName = 'Input';

export function InputCompositionDemo() {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className='flex w-full max-w-[300px] flex-col gap-6'>
      <div className='flex flex-col gap-1'>
        <Label.Root htmlFor='password2'>Password</Label.Root>

        <Input
          leadingIcon={RiLock2Line}
          id='password2'
          type={showPassword ? 'text' : 'password'}
          placeholder='••••••••••'
          inlineTrailingNode={
            <button type='button' onClick={() => setShowPassword((s) => !s)}>
              {showPassword ? (
                <RiEyeOffLine className='size-5 text-text-soft-400 group-has-[disabled]:text-text-disabled-300' />
              ) : (
                <RiEyeLine className='size-5 text-text-soft-400 group-has-[disabled]:text-text-disabled-300' />
              )}
            </button>
          }
        />
      </div>
    </div>
  );
}
