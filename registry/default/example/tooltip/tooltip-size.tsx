import * as Button from '@/components/ui/button';
import * as Tooltip from '@/components/ui/tooltip';

export function TooltipSize() {
  return (
    <div className='flex flex-col items-center gap-6'>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <Button.Root variant='neutral' mode='stroke' size='xsmall'>
            Medium
          </Button.Root>
        </Tooltip.Trigger>
        <Tooltip.Content size='medium'>Tooltip content.</Tooltip.Content>
      </Tooltip.Root>

      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <Button.Root variant='neutral' mode='stroke' size='xsmall'>
            Small (default)
          </Button.Root>
        </Tooltip.Trigger>
        <Tooltip.Content size='small'>Tooltip content.</Tooltip.Content>
      </Tooltip.Root>

      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <Button.Root variant='neutral' mode='stroke' size='xsmall'>
            XSmall
          </Button.Root>
        </Tooltip.Trigger>
        <Tooltip.Content size='xsmall'>Tooltip content.</Tooltip.Content>
      </Tooltip.Root>
    </div>
  );
}
