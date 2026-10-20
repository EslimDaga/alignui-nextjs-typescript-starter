'use client';

import * as React from 'react';
import {
  RiCheckboxCircleFill,
  RiCloseCircleFill,
  RiEyeLine,
  RiEyeOffLine,
  RiLock2Line,
} from '@remixicon/react';

import * as Input from '@/components/ui/input';
import * as Label from '@/components/ui/label';
import { cn } from '@/utils/cn';

const defaultLevelColors = {
  1: 'text-error-base',
  2: 'text-warning-base',
  3: 'text-success-base',
};

function LevelBar({
  levels = 3,
  level = 1,
  levelColors = defaultLevelColors,
  className,
  ...rest
}: {
  level: number;
  levels?: number;
  levelColors?: { [key: number]: string };
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'relative flex gap-2 overflow-hidden rounded-full',
        levelColors[1],
        className,
        levelColors[level],
      )}
      {...rest}
    >
      {Array.from({ length: levels }, (_, i) => i).map((currentLevel) => (
        <LevelBarItem
          key={currentLevel}
          level={level}
          levels={levels}
          active={currentLevel < level}
        />
      ))}
    </div>
  );
}

function LevelBarItem({
  active,
  levels,
  level,
  ...rest
}: {
  active?: boolean;
  level: number;
  levels: number;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className='h-1 w-full rounded-full bg-bg-soft-200'
      style={{
        clipPath: 'inset(0 round 99px)',
      }}
      {...rest}
    >
      <div
        className='absolute left-0 top-0 h-full w-0 rounded-full bg-current duration-500 ease-out'
        style={{
          transitionProperty: 'width',
          width: `calc((100% / ${levels}) * ${level})`,
        }}
      />
    </div>
  );
}

export function InputPassword() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [newPassword, setNewPassword] = React.useState('');

  const [criteria, setCriteria] = React.useState({
    length: false,
    uppercase: false,
    number: false,
  });

  const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNewPassword(value);
    setCriteria({
      length: value.length >= 8,
      uppercase: /[A-Z]/.test(value),
      number: /[0-9]/.test(value),
    });
  };

  const countTrueCriteria = (criteria: { [key: string]: boolean }): number => {
    return Object.values(criteria).filter((value) => value).length;
  };

  const trueCriteriaCount = countTrueCriteria(criteria);

  return (
    <div className='flex w-full max-w-[300px] flex-col gap-6'>
      <div className='flex flex-col gap-1'>
        <Label.Root htmlFor='password-with-level'>New Password</Label.Root>

        <Input.Root>
          <Input.Wrapper>
            <Input.Icon as={RiLock2Line} />
            <Input.Input
              id='password-with-level'
              type={showPassword ? 'text' : 'password'}
              placeholder='••••••••••'
              value={newPassword}
              onChange={handleNewPasswordChange}
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

        <div className='flex flex-col gap-2 pt-1.5'>
          <LevelBar levels={3} level={trueCriteriaCount} />
          <div className='text-paragraph-xs text-text-sub-600'>
            Must contain at least;
          </div>
          <div className='flex items-center gap-1.5 text-paragraph-xs text-text-sub-600'>
            {criteria.uppercase ? (
              <RiCheckboxCircleFill className='size-4 shrink-0 text-success-base' />
            ) : (
              <RiCloseCircleFill className='size-4 shrink-0 text-text-soft-400' />
            )}
            At least 1 uppercase
          </div>
          <div className='flex items-center gap-1.5 text-paragraph-xs text-text-sub-600'>
            {criteria.number ? (
              <RiCheckboxCircleFill className='size-4 shrink-0 text-success-base' />
            ) : (
              <RiCloseCircleFill className='size-4 shrink-0 text-text-soft-400' />
            )}
            At least 1 number
          </div>
          <div className='flex items-center gap-1.5 text-paragraph-xs text-text-sub-600'>
            {criteria.length ? (
              <RiCheckboxCircleFill className='size-4 shrink-0 text-success-base' />
            ) : (
              <RiCloseCircleFill className='size-4 shrink-0 text-text-soft-400' />
            )}
            At least 8 characters
          </div>
        </div>
      </div>
    </div>
  );
}
