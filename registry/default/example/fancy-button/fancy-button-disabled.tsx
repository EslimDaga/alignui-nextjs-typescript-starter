import { RiArrowLeftSLine, RiArrowRightSLine } from '@remixicon/react';

import * as FancyButton from '@/components/ui/fancy-button';

export function FancyButtonDisabled() {
  return (
    <div className='flex flex-col items-center gap-4'>
      <FancyButton.Root disabled variant='neutral'>
        <FancyButton.Icon as={RiArrowLeftSLine} />
        Button
        <FancyButton.Icon as={RiArrowRightSLine} />
      </FancyButton.Root>
      <FancyButton.Root disabled variant='destructive'>
        <FancyButton.Icon as={RiArrowLeftSLine} />
        Button
        <FancyButton.Icon as={RiArrowRightSLine} />
      </FancyButton.Root>
      <FancyButton.Root disabled variant='primary'>
        <FancyButton.Icon as={RiArrowLeftSLine} />
        Button
        <FancyButton.Icon as={RiArrowRightSLine} />
      </FancyButton.Root>
      <FancyButton.Root disabled variant='basic'>
        <FancyButton.Icon as={RiArrowLeftSLine} />
        Button
        <FancyButton.Icon as={RiArrowRightSLine} />
      </FancyButton.Root>
    </div>
  );
}
