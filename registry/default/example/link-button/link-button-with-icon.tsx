import { RiArrowLeftSLine, RiArrowRightSLine } from '@remixicon/react';

import * as LinkButton from '@/components/ui/link-button';

export function LinkButtonWithIcon() {
  return (
    <LinkButton.Root>
      <LinkButton.Icon as={RiArrowLeftSLine} />
      Link Button
      <LinkButton.Icon as={RiArrowRightSLine} />
    </LinkButton.Root>
  );
}
