'use client';

import * as React from 'react';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import { type ToggleGroupSingleProps } from '@radix-ui/react-toggle-group';

import {
  SVGStarFill,
  SVGStarLine,
} from '@/components/ui/svg-rating-icons';
import { cn } from '@/utils/cn';

const StarRatingCells = React.forwardRef<
  React.ComponentRef<typeof ToggleGroupPrimitive.Root>,
  Omit<ToggleGroupSingleProps, 'type'>
>(({ className, ...rest }, forwardedRef) => {
  return (
    <ToggleGroupPrimitive.Root
      ref={forwardedRef}
      type='single'
      className={cn('flex w-full -space-x-px', className)}
      {...rest}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <ToggleGroupPrimitive.Item
          key={i}
          value={`${i + 1}`}
          className={cn(
            'group grid h-9 w-full items-center justify-center ring-1 ring-inset ring-stroke-soft-200',
            'transition duration-200 ease-out',
            // hover
            'hover:bg-bg-weak-50',
            // focus
            'focus:outline-none',
            'focus-visible:z-10 focus-visible:!border-transparent focus-visible:ring-1 focus-visible:ring-stroke-strong-950',
          )}
        >
          <SVGStarFill
            className={cn(
              'relative z-10 size-5 text-yellow-500 opacity-0 transition duration-200 ease-out [grid-area:1/1]',
              // checked
              'group-has-[~[data-state=on]]:opacity-100 group-data-[state=on]:opacity-100',
            )}
          />
          <SVGStarLine className='size-5 text-stroke-sub-300 [grid-area:1/1]' />
        </ToggleGroupPrimitive.Item>
      ))}
    </ToggleGroupPrimitive.Root>
  );
});
StarRatingCells.displayName = 'StarRatingCells';

export function RatingBarDemo() {
  const [starValue, setStarValue] = React.useState('3');

  return (
    <div className='flex w-full max-w-80 flex-col items-center gap-6'>
      <StarRatingCells value={starValue} onValueChange={setStarValue} />
    </div>
  );
}
