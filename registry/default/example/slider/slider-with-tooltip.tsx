'use client';

import * as React from 'react';

import * as Slider from '@/components/ui/slider';
import * as Tooltip from '@/components/ui/tooltip';

export function SliderWithTooltip() {
  const [value, setValue] = React.useState<number[]>([300, 450]);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    setIsOpen(true);
  }, []);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div className='w-full max-w-xs'>
      <Slider.Root
        defaultValue={[300, 450]}
        min={0}
        max={600}
        step={1}
        onValueChange={(val) => {
          setValue(val);
        }}
      >
        <Tooltip.Root open={isOpen}>
          <Tooltip.Trigger asChild>
            <Slider.Thumb />
          </Tooltip.Trigger>
          <Tooltip.Content size='xsmall' side='top' forceMount>
            {formatCurrency(value[0] ?? 0)}
          </Tooltip.Content>
        </Tooltip.Root>
        <Tooltip.Root open={isOpen}>
          <Tooltip.Trigger asChild>
            <Slider.Thumb />
          </Tooltip.Trigger>
          <Tooltip.Content size='xsmall' side='top' forceMount>
            {formatCurrency(value[1] ?? 0)}
          </Tooltip.Content>
        </Tooltip.Root>
      </Slider.Root>
    </div>
  );
}
