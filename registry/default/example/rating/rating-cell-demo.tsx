'use client';

import * as React from 'react';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import { type ToggleGroupSingleProps } from '@radix-ui/react-toggle-group';

import {
  SVGHeartFill,
  SVGStarFill,
} from '@/components/ui/svg-rating-icons';
import { cn } from '@/utils/cn';

const StarRatingCells = React.forwardRef<
  React.ComponentRef<typeof ToggleGroupPrimitive.Root>,
  Omit<ToggleGroupSingleProps, 'type'>
>(({ className, ...rest }, forwardedRef) => {
  return (
    <ToggleGroupPrimitive.Root
      type='single'
      ref={forwardedRef}
      className={cn('flex w-full max-w-[360px] gap-2', className)}
      {...rest}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <ToggleGroupPrimitive.Item
          key={i}
          value={`${i + 1}`}
          className={cn(
            'group flex h-14 w-full items-center justify-center rounded-10 ring-1 ring-inset ring-stroke-soft-200',
            'transition duration-200 ease-out',
            // hover
            'hover:bg-bg-weak-50 hover:ring-transparent',
          )}
        >
          <SVGStarFill
            className={cn(
              'size-8 text-stroke-sub-300 transition duration-200 ease-out',
              // checked
              'group-has-[~[data-state=on]]:text-yellow-500 group-data-[state=on]:text-yellow-500',
            )}
          />
        </ToggleGroupPrimitive.Item>
      ))}
    </ToggleGroupPrimitive.Root>
  );
});
StarRatingCells.displayName = 'StarRatingCells';

const HeartRatingCells = React.forwardRef<
  React.ComponentRef<typeof ToggleGroupPrimitive.Root>,
  Omit<ToggleGroupSingleProps, 'type'>
>(({ className, ...rest }, forwardedRef) => {
  return (
    <ToggleGroupPrimitive.Root
      type='single'
      ref={forwardedRef}
      className={cn('flex w-full max-w-[360px] gap-2', className)}
      {...rest}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <ToggleGroupPrimitive.Item
          key={i}
          value={`${i + 1}`}
          className={cn(
            'group flex h-14 w-full items-center justify-center rounded-10 ring-1 ring-inset ring-stroke-soft-200',
            'transition duration-200 ease-out',
            // hover
            'hover:bg-bg-weak-50 hover:ring-transparent',
          )}
        >
          <SVGHeartFill
            className={cn(
              'size-8 text-stroke-sub-300 transition duration-200 ease-out',
              // checked
              'group-has-[~[data-state=on]]:text-red-500 group-data-[state=on]:text-red-500',
            )}
          />
        </ToggleGroupPrimitive.Item>
      ))}
    </ToggleGroupPrimitive.Root>
  );
});
HeartRatingCells.displayName = 'HeartRatingCells';

export function RatingCellDemo() {
  const [starValue, setStarValue] = React.useState('3');
  const [heartValue, setHeartValue] = React.useState('2');

  return (
    <div className='flex w-full max-w-[360px] flex-col items-center gap-6'>
      <StarRatingCells value={starValue} onValueChange={setStarValue} />
      <HeartRatingCells value={heartValue} onValueChange={setHeartValue} />
    </div>
  );
}
