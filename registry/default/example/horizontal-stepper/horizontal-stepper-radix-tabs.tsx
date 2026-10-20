'use client';

import * as React from 'react';
import * as TabsPrimitives from '@radix-ui/react-tabs';

import * as HorizontalStepper from '@/components/ui/horizontal-stepper';

export function HorizontalStepperDemo() {
  const [activeStep, setActiveStep] = React.useState('1');

  const steps = [
    { label: 'Personal', indicator: '1' },
    { label: 'Role', indicator: '2' },
    { label: 'Position', indicator: '3' },
    { label: 'Password', indicator: '4' },
    { label: 'Summary', indicator: '5' },
  ];

  const getState = (indicator: string) => {
    const activeIndex = steps.findIndex(
      (step) => step.indicator === activeStep,
    );
    const currentIndex = steps.findIndex(
      (step) => step.indicator === indicator,
    );

    if (currentIndex < activeIndex) return 'completed';
    if (currentIndex === activeIndex) return 'active';
    return 'default';
  };

  return (
    <TabsPrimitives.Root value={activeStep} onValueChange={setActiveStep}>
      <HorizontalStepper.Root asChild>
        <TabsPrimitives.List>
          {steps.map((step, idx) => (
            <React.Fragment key={step.indicator}>
              <HorizontalStepper.Item state={getState(step.indicator)} asChild>
                <TabsPrimitives.Trigger value={step.indicator}>
                  <HorizontalStepper.ItemIndicator>
                    {step.indicator}
                  </HorizontalStepper.ItemIndicator>
                  {step.label}
                </TabsPrimitives.Trigger>
              </HorizontalStepper.Item>
              {idx < steps.length - 1 && <HorizontalStepper.SeparatorIcon />}
            </React.Fragment>
          ))}
        </TabsPrimitives.List>
      </HorizontalStepper.Root>
    </TabsPrimitives.Root>
  );
}
