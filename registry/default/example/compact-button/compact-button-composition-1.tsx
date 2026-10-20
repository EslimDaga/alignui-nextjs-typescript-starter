import * as React from 'react';
import { RiAddLine, type RemixiconComponentType } from '@remixicon/react';

import * as CompactButtonPrimitives from '@/components/ui/compact-button';

const CompactButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof CompactButtonPrimitives.Root> & {
    icon: RemixiconComponentType;
  }
>(({ children, icon: Icon, ...rest }, forwardedRef) => {
  return (
    <CompactButtonPrimitives.Root ref={forwardedRef} {...rest}>
      <CompactButtonPrimitives.Icon as={Icon} />
    </CompactButtonPrimitives.Root>
  );
});
CompactButton.displayName = 'CompactButton';

export function CompactButtonComposition() {
  return <CompactButton icon={RiAddLine} variant='stroke' />;
}
