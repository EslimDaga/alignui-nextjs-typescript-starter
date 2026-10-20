import * as Button from '@/components/ui/button';
import * as Tooltip from '@/components/ui/tooltip';

export function TooltipPosition() {
  return (
    <div className='grid grid-cols-2 gap-6'>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <Button.Root variant='neutral' mode='stroke' size='xsmall'>
            Left
          </Button.Root>
        </Tooltip.Trigger>
        <Tooltip.Content side='left'>Tooltip content.</Tooltip.Content>
      </Tooltip.Root>

      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <Button.Root variant='neutral' mode='stroke' size='xsmall'>
            Top
          </Button.Root>
        </Tooltip.Trigger>
        <Tooltip.Content side='top'>Tooltip content.</Tooltip.Content>
      </Tooltip.Root>

      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <Button.Root variant='neutral' mode='stroke' size='xsmall'>
            Bottom
          </Button.Root>
        </Tooltip.Trigger>
        <Tooltip.Content side='bottom'>Tooltip content.</Tooltip.Content>
      </Tooltip.Root>

      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <Button.Root variant='neutral' mode='stroke' size='xsmall'>
            Right
          </Button.Root>
        </Tooltip.Trigger>
        <Tooltip.Content side='right'>Tooltip content.</Tooltip.Content>
      </Tooltip.Root>
    </div>
  );
}
