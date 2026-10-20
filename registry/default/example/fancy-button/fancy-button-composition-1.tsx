import * as React from 'react';
import { Slottable } from '@radix-ui/react-slot';
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  type RemixiconComponentType,
} from '@remixicon/react';

import * as FancyButtonPrimitives from '@/components/ui/fancy-button';

const FancyButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof FancyButtonPrimitives.Root> & {
    leadingIcon?: RemixiconComponentType;
    trailingIcon?: RemixiconComponentType;
  }
>(
  (
    { children, leadingIcon: LeadingIcon, trailingIcon: TrailingIcon, ...rest },
    forwardedRef,
  ) => {
    return (
      <FancyButtonPrimitives.Root ref={forwardedRef} {...rest}>
        {LeadingIcon && <FancyButtonPrimitives.Icon as={LeadingIcon} />}
        <Slottable>{children}</Slottable>
        {TrailingIcon && <FancyButtonPrimitives.Icon as={TrailingIcon} />}
      </FancyButtonPrimitives.Root>
    );
  },
);
FancyButton.displayName = 'FancyButton';

export function FancyButtonComposition() {
  return (
    <FancyButton
      leadingIcon={RiArrowLeftSLine}
      trailingIcon={RiArrowRightSLine}
      variant='primary'
    >
      Button
    </FancyButton>
  );
}
