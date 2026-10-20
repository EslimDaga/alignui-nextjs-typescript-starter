import * as Button from '@/components/ui/button';
import * as Tooltip from '@/components/ui/tooltip';

export function TooltipLight() {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <Button.Root variant='neutral' mode='stroke' size='xsmall'>
          Hover or focus
        </Button.Root>
      </Tooltip.Trigger>
      <Tooltip.Content variant='light'>Tooltip content.</Tooltip.Content>
    </Tooltip.Root>
  );
}
