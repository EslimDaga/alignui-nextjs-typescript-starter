'use client';

import * as React from 'react';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import { type ToggleGroupSingleProps } from '@radix-ui/react-toggle-group';

import { cn } from '@/utils/cn';

const SingleSelectRatingCells = React.forwardRef<
  React.ComponentRef<typeof ToggleGroupPrimitive.Root>,
  Omit<ToggleGroupSingleProps, 'type'> & {
    data: {
      value: string;
      label: React.ReactNode;
    }[];
  }
>(({ className, data, ...rest }, forwardedRef) => {
  return (
    <ToggleGroupPrimitive.Root
      ref={forwardedRef}
      type='single'
      className={cn('flex w-full -space-x-px', className)}
      {...rest}
    >
      {data.map((item, i) => (
        <ToggleGroupPrimitive.Item
          key={i}
          value={item.value}
          className={cn(
            'group grid h-9 w-full items-center justify-center text-label-sm text-text-sub-600 ring-1 ring-inset ring-stroke-soft-200',
            'transition duration-200 ease-out',
            'first:rounded-tl-xl last:rounded-tr-xl',
            // hover
            'hover:bg-bg-weak-50',
            // focus
            'focus:outline-none',
            'focus-visible:z-10 focus-visible:!border-transparent focus-visible:ring-1 focus-visible:ring-stroke-strong-950',
            // selected
            'data-[state=on]:bg-bg-weak-50 data-[state=on]:text-text-strong-950',
          )}
        >
          {item.label}
        </ToggleGroupPrimitive.Item>
      ))}
    </ToggleGroupPrimitive.Root>
  );
});
SingleSelectRatingCells.displayName = 'SingleSelectRatingCells';

const numberData = [
  {
    value: '1',
    label: 1,
  },
  {
    value: '2',
    label: 2,
  },
  {
    value: '3',
    label: 3,
  },
  {
    value: '4',
    label: 4,
  },
  {
    value: '5',
    label: 5,
  },
];

export function RatingBarDemo() {
  const [numberValue, setNumberValue] = React.useState('3');
  const [text, setText] = React.useState('');

  return (
    <div className='flex w-full max-w-80 flex-col items-center gap-6'>
      <div className='flex w-full flex-col -space-y-px'>
        <SingleSelectRatingCells
          data={numberData}
          value={numberValue}
          onValueChange={setNumberValue}
        />

        <textarea
          placeholder='Tell us why'
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={cn([
            // base
            'relative block h-24 w-full resize-none rounded-b-xl border border-stroke-soft-200 bg-bg-white-0 p-3 text-paragraph-sm text-text-strong-950',
            // placeholder
            'placeholder:text-text-soft-400',
            // focus
            'focus:outline-noneone',
          ])}
        />
      </div>
    </div>
  );
}
