'use client';

import * as React from 'react';

import * as Datepicker from '@/components/ui/datepicker';

export function DatepickerDemo() {
  const [date, setDate] = React.useState<Date | undefined>(undefined);

  return (
    <Datepicker.Calendar mode='single' selected={date} onSelect={setDate} />
  );
}
