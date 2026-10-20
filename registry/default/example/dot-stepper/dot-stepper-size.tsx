'use client';

import * as React from 'react';

import * as DotStepper from '@/components/ui/dot-stepper';

export function DotStepperDemo() {
  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <div className='flex flex-col items-center gap-6'>
      <DotStepper.Root size='small'>
        {Array.from({ length: 4 }, (_, i) => i).map((_, idx) => (
          <DotStepper.Item
            key={idx}
            aria-label={`Go to step ${idx}`}
            active={activeStep === idx}
            onClick={() => setActiveStep(idx)}
          />
        ))}
      </DotStepper.Root>

      <DotStepper.Root size='xsmall'>
        {Array.from({ length: 4 }, (_, i) => i).map((_, idx) => (
          <DotStepper.Item
            key={idx}
            aria-label={`Go to step ${idx}`}
            active={activeStep === idx}
            onClick={() => setActiveStep(idx)}
          />
        ))}
      </DotStepper.Root>
    </div>
  );
}
