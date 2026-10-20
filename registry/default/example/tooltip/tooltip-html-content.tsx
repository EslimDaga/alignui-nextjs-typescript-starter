import { RiGlobalLine } from '@remixicon/react';

import * as Button from '@/components/ui/button';
import * as Tooltip from '@/components/ui/tooltip';

export function TooltipHTMLContent() {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <Button.Root variant='neutral' mode='stroke' size='xsmall'>
          Hover or focus
        </Button.Root>
      </Tooltip.Trigger>
      <Tooltip.Content size='medium' variant='light' className='max-w-[272px]'>
        <div className='flex gap-3'>
          <RiGlobalLine className='text-text-sub-600 size-5 shrink-0' />
          <div>
            <div className='text-text-strong-950'>Content Title</div>
            <div className='text-paragraph-xs text-text-sub-600 mt-1'>
              Insert tooltip description here. It would look much better as
              three lines of text.
            </div>
          </div>
        </div>
      </Tooltip.Content>
    </Tooltip.Root>
  );
}
