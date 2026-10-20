'use client';

import * as React from 'react';

import * as HorizontalStepper from '@/components/ui/horizontal-stepper';

export function HorizontalStepperDemo() {
  const [activeStep, setActiveStep] = React.useState(0);

  const steps = [
    { label: 'Personal', indicator: '1' },
    { label: 'Role', indicator: '2' },
    { label: 'Position', indicator: '3' },
  ];

  const getState = (index: number) => {
    if (activeStep > index) return 'completed';
    if (activeStep === index) return 'active';
    return 'default';
  };

  return (
    <HorizontalStepper.Root>
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <HorizontalStepper.Item
            state={getState(index)}
            onClick={() => setActiveStep(index)}
          >
            <HorizontalStepper.ItemIndicator>
              {step.indicator}
            </HorizontalStepper.ItemIndicator>
            {step.label}
          </HorizontalStepper.Item>
          {index < steps.length - 1 && <HorizontalStepper.SeparatorIcon />}
        </React.Fragment>
      ))}
    </HorizontalStepper.Root>
  );
}
