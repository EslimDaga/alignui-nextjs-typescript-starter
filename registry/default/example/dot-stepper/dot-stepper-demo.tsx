'use client';

import * as React from 'react';

import * as DotStepper from '@/components/ui/dot-stepper';

export function DotStepperDemo() {
  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <DotStepper.Root>
      {Array.from({ length: 3 }, (_, i) => i).map((_, idx) => (
        <DotStepper.Item
          key={idx}
          aria-label={`Go to step ${idx}`}
          active={activeStep === idx}
          onClick={() => setActiveStep(idx)}
        />
      ))}
    </DotStepper.Root>
  );
}
