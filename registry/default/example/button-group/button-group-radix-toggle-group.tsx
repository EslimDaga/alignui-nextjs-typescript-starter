'use client';

import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import {
  RiArrowDownSLine,
  RiBold,
  RiItalic,
  RiUnderline,
} from '@remixicon/react';

import * as ButtonGroup from '@/components/ui/button-group';

export function ButtonGroupSize() {
  return (
    <ButtonGroup.Root asChild>
      <ToggleGroupPrimitive.Root type='single'>
        <ButtonGroup.Item asChild>
          <ToggleGroupPrimitive.Item value='family'>
            Inter
            <ButtonGroup.Icon as={RiArrowDownSLine} />
          </ToggleGroupPrimitive.Item>
        </ButtonGroup.Item>

        <ButtonGroup.Item asChild>
          <ToggleGroupPrimitive.Item value='bold'>
            <ButtonGroup.Icon as={RiBold} />
          </ToggleGroupPrimitive.Item>
        </ButtonGroup.Item>

        <ButtonGroup.Item asChild>
          <ToggleGroupPrimitive.Item value='italic'>
            <ButtonGroup.Icon as={RiItalic} />
          </ToggleGroupPrimitive.Item>
        </ButtonGroup.Item>

        <ButtonGroup.Item asChild>
          <ToggleGroupPrimitive.Item value='underline'>
            <ButtonGroup.Icon as={RiUnderline} />
          </ToggleGroupPrimitive.Item>
        </ButtonGroup.Item>
      </ToggleGroupPrimitive.Root>
    </ButtonGroup.Root>
  );
}
