'use client';

import * as React from 'react';

import * as VerticalStepper from '@/components/ui/vertical-stepper';

export function VerticalStepperDemo() {
  const [activeStep, setActiveStep] = React.useState(0);

  const steps = [
    { label: 'Personal', indicator: '1' },
    { label: 'Role', indicator: '2' },
    { label: 'Position', indicator: '3' },
  ];

  const getState = (idx: number) => {
    if (activeStep > idx) return 'completed';
    if (activeStep === idx) return 'active';
    return 'default';
  };

  return (
    <VerticalStepper.Root className='w-[232px] shrink-0'>
      {steps.map((step, idx) => (
        <React.Fragment key={idx}>
          <VerticalStepper.Item
            state={getState(idx)}
            onClick={() => setActiveStep(idx)}
          >
            <VerticalStepper.ItemIndicator>
              {step.indicator}
            </VerticalStepper.ItemIndicator>
            {step.label}
            {getState(idx) === 'active' && <VerticalStepper.Arrow />}
          </VerticalStepper.Item>
        </React.Fragment>
      ))}
    </VerticalStepper.Root>
  );
}
