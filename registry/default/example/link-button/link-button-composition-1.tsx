import * as React from 'react';
import { Slottable } from '@radix-ui/react-slot';
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  type RemixiconComponentType,
} from '@remixicon/react';

import * as LinkButtonPrimitives from '@/components/ui/link-button';

const LinkButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof LinkButtonPrimitives.Root> & {
    leadingIcon?: RemixiconComponentType;
    trailingIcon?: RemixiconComponentType;
  }
>(
  (
    { children, leadingIcon: LeadingIcon, trailingIcon: TrailingIcon, ...rest },
    forwardedRef,
  ) => {
    return (
      <LinkButtonPrimitives.Root ref={forwardedRef} {...rest}>
        {LeadingIcon && <LinkButtonPrimitives.Icon as={LeadingIcon} />}
        <Slottable>{children}</Slottable>
        {TrailingIcon && <LinkButtonPrimitives.Icon as={TrailingIcon} />}
      </LinkButtonPrimitives.Root>
    );
  },
);
LinkButton.displayName = 'LinkButton';

export function LinkButtonComposition() {
  return (
    <LinkButton
      leadingIcon={RiArrowLeftSLine}
      trailingIcon={RiArrowRightSLine}
      variant='black'
    >
      Link Button
    </LinkButton>
  );
}
