import { RiArrowLeftSLine, RiArrowRightSLine } from '@remixicon/react';

import * as FancyButton from '@/components/ui/fancy-button';

export function FancyButtonSize() {
  return (
    <div className='flex flex-col items-center gap-4'>
      <FancyButton.Root size='medium'>
        <FancyButton.Icon as={RiArrowLeftSLine} />
        Button
        <FancyButton.Icon as={RiArrowRightSLine} />
      </FancyButton.Root>

      <FancyButton.Root size='small'>
        <FancyButton.Icon as={RiArrowLeftSLine} />
        Button
        <FancyButton.Icon as={RiArrowRightSLine} />
      </FancyButton.Root>

      <FancyButton.Root size='xsmall'>
        <FancyButton.Icon as={RiArrowLeftSLine} />
        Button
        <FancyButton.Icon as={RiArrowRightSLine} />
      </FancyButton.Root>
    </div>
  );
}
