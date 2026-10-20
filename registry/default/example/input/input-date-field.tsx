import { RiCalendarLine } from '@remixicon/react';
import {
  DateField,
  DateInput,
  DateSegment,
  Label as ReactAriaLabel,
} from 'react-aria-components';

import { inputVariants } from '@/components/ui/input';
import * as Label from '@/components/ui/label';

export function InputDateField() {
  const { root, wrapper, icon } = inputVariants();
  return (
    <div className='w-full max-w-[300px]'>
      <DateField className='flex flex-col gap-1'>
        <Label.Root asChild>
          <ReactAriaLabel>Date</ReactAriaLabel>
        </Label.Root>
        <div className={root()}>
          <div className={wrapper({ class: 'h-10' })}>
            <RiCalendarLine className={icon()} />
            <DateInput className='flex'>
              {(segment) => (
                <DateSegment
                  segment={segment}
                  className='flex items-center rounded p-0.5 text-paragraph-sm uppercase leading-none text-text-strong-950 caret-transparent outline-none focus:bg-bg-weak-50  focus:outline-none'
                />
              )}
            </DateInput>
          </div>
        </div>
      </DateField>
    </div>
  );
}
