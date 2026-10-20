'use client';

import * as React from 'react';
import * as TabsPrimitives from '@radix-ui/react-tabs';

import * as VerticalStepper from '@/components/ui/vertical-stepper';

export function VerticalStepperDemo() {
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
      <VerticalStepper.Root className='w-[232px] shrink-0' asChild>
        <TabsPrimitives.List>
          {steps.map((step) => (
            <React.Fragment key={step.indicator}>
              <VerticalStepper.Item state={getState(step.indicator)} asChild>
                <TabsPrimitives.Trigger value={step.indicator}>
                  <VerticalStepper.ItemIndicator>
                    {step.indicator}
                  </VerticalStepper.ItemIndicator>
                  {step.label}
                  {getState(step.indicator) === 'active' && (
                    <VerticalStepper.Arrow />
                  )}
                </TabsPrimitives.Trigger>
              </VerticalStepper.Item>
            </React.Fragment>
          ))}
        </TabsPrimitives.List>
      </VerticalStepper.Root>
    </TabsPrimitives.Root>
  );
}
