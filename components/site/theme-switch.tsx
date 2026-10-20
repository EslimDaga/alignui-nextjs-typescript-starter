'use client';

import * as React from 'react';
import { RiComputerLine, RiMoonLine, RiSunLine } from '@remixicon/react';
import { useTheme } from 'next-themes';

import * as SegmentedControl from '@/components/ui/segmented-control';

const subscribe = () => () => {};

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const mounted = React.useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

  if (!mounted) return <div className='h-9 w-[104px]' />;

  return (
    <SegmentedControl.Root value={theme} onValueChange={setTheme}>
      <SegmentedControl.List>
        <SegmentedControl.Trigger value='light' aria-label='Tema claro'>
          <RiSunLine className='size-4' />
        </SegmentedControl.Trigger>
        <SegmentedControl.Trigger value='dark' aria-label='Tema oscuro'>
          <RiMoonLine className='size-4' />
        </SegmentedControl.Trigger>
        <SegmentedControl.Trigger value='system' aria-label='Tema del sistema'>
          <RiComputerLine className='size-4' />
        </SegmentedControl.Trigger>
      </SegmentedControl.List>
    </SegmentedControl.Root>
  );
}
