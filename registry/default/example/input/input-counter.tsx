'use client';

import { RiAddLine, RiSubtractLine } from '@remixicon/react';
import {
  Button as ReactAriaButton,
  Group as ReactAriaGroup,
  Input as ReactAriaInput,
  Label as ReactAriaLabel,
  NumberField as ReactAriaNumberField,
} from 'react-aria-components';

import { compactButtonVariants } from '@/components/ui/compact-button';
import { inputVariants } from '@/components/ui/input';
import * as Label from '@/components/ui/label';

export function CounterInputDemo() {
  const { root: inputRoot, wrapper: inputWrapper, input } = inputVariants();
  const { root: compactButtonRoot, icon: compactButtonIcon } =
    compactButtonVariants({ variant: 'ghost' });

  return (
    <div className='w-full max-w-[300px]'>
      <ReactAriaNumberField
        defaultValue={16}
        minValue={0}
        className='flex flex-col gap-1'
      >
        <Label.Root asChild>
          <ReactAriaLabel>
            Counter Input
            <Label.Asterisk />
          </ReactAriaLabel>
        </Label.Root>

        <div className={inputRoot()}>
          <ReactAriaGroup className={inputWrapper()}>
            <ReactAriaButton slot='decrement' className={compactButtonRoot()}>
              <RiSubtractLine className={compactButtonIcon()} />
            </ReactAriaButton>
            <ReactAriaInput className={input({ class: 'text-center' })} />
            <ReactAriaButton slot='increment' className={compactButtonRoot()}>
              <RiAddLine className={compactButtonIcon()} />
            </ReactAriaButton>
          </ReactAriaGroup>
        </div>
      </ReactAriaNumberField>
    </div>
  );
}
