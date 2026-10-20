import { RiEqualizer3Fill, RiMoonLine, RiSunLine } from '@remixicon/react';

import * as SegmentedControl from '@/components/ui/segmented-control';

export function SegmentedControlRounded() {
  return (
    <SegmentedControl.Root defaultValue='system'>
      <SegmentedControl.List
        className='w-fit gap-2 rounded-full'
        floatingBgClassName='rounded-full'
      >
        <SegmentedControl.Trigger value='light' className='aspect-square h-9'>
          <RiSunLine className='size-6' />
        </SegmentedControl.Trigger>
        <SegmentedControl.Trigger value='dark' className='aspect-square h-9'>
          <RiMoonLine className='size-6' />
        </SegmentedControl.Trigger>
        <SegmentedControl.Trigger value='system' className='aspect-square h-9'>
          <RiEqualizer3Fill className='size-6' />
        </SegmentedControl.Trigger>
      </SegmentedControl.List>
    </SegmentedControl.Root>
  );
}
