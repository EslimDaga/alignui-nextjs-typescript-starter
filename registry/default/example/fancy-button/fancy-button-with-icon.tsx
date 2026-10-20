import { RiArrowLeftSLine, RiArrowRightSLine } from '@remixicon/react';

import * as FancyButton from '@/components/ui/fancy-button';

export function FancyButtonWithIcon() {
  return (
    <div className='flex flex-col items-center gap-4'>
      <FancyButton.Root>
        <FancyButton.Icon as={RiArrowLeftSLine} />
        Button
        <FancyButton.Icon as={RiArrowRightSLine} />
      </FancyButton.Root>
    </div>
  );
}
