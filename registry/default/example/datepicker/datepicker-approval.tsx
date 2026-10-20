'use client';

import * as React from 'react';
import { format } from 'date-fns';

import * as Button from '@/components/ui/button';
import * as DatepickerPrimivites from '@/components/ui/datepicker';
import * as Popover from '@/components/ui/popover';

type SingleDatepickerProps = {
  defaultValue?: Date;
  value?: Date;
  onChange?: (date: Date | undefined) => void;
};

function Datepicker({ value, defaultValue, onChange }: SingleDatepickerProps) {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(
    value ?? defaultValue ?? undefined,
  );

  React.useEffect(() => {
    setDate(value ?? defaultValue ?? undefined);
  }, [value, defaultValue]);

  const handleCancel = () => {
    setDate(value ?? defaultValue ?? undefined);
  };

  const handleApply = () => {
    onChange?.(date);
  };

  const handleOpenChange = (isOpen: boolean) => {
    if (!isOpen) {
      handleCancel();
    }
    setOpen(isOpen);
  };

  return (
    <Popover.Root open={open} onOpenChange={handleOpenChange}>
      <Popover.Trigger asChild>
        <Button.Root variant='neutral' mode='stroke'>
          {date ? format(date, 'LLL dd, y') : 'Select a date'}
        </Button.Root>
      </Popover.Trigger>
      <Popover.Content className='p-0' showArrow={false}>
        <DatepickerPrimivites.Calendar
          mode='single'
          selected={date}
          onSelect={setDate}
        />
        <div className='border-stroke-soft-200 flex items-center justify-between gap-4 border-t p-4 py-5'>
          <Popover.Close unstyled asChild>
            <Button.Root
              variant='neutral'
              mode='stroke'
              size='small'
              className='w-full'
              onClick={handleCancel}
            >
              Cancel
            </Button.Root>
          </Popover.Close>
          <Popover.Close unstyled asChild>
            <Button.Root
              variant='primary'
              mode='filled'
              size='small'
              className='w-full'
              onClick={handleApply}
            >
              Apply
            </Button.Root>
          </Popover.Close>
        </div>
      </Popover.Content>
    </Popover.Root>
  );
}

export function DatepickerApprovalDemo() {
  const [date, setDate] = React.useState<Date | undefined>(undefined);

  return <Datepicker value={date} onChange={setDate} />;
}
