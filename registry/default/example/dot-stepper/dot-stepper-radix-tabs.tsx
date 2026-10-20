'use client';

import * as React from 'react';
import * as TabsPrimitives from '@radix-ui/react-tabs';

import * as DotStepper from '@/components/ui/dot-stepper';

const STEPS = [
  { id: '0', label: 'Step 1', content: 'content 1' },
  { id: '1', label: 'Step 2', content: 'content 2' },
  { id: '2', label: 'Step 3', content: 'content 3' },
  { id: '3', label: 'Step 4', content: 'content 4' },
];

export function DotStepperWithRadixTabs() {
  const [activeStep, setActiveStep] = React.useState(STEPS[0].id);

  return (
    <TabsPrimitives.Root value={activeStep} onValueChange={setActiveStep}>
      <DotStepper.Root asChild>
        <TabsPrimitives.List>
          {STEPS.map((step) => (
            <DotStepper.Item
              key={step.id}
              aria-label={`Go to ${step.label}`}
              active={activeStep === step.id}
              asChild
            >
              <TabsPrimitives.Trigger value={step.id} />
            </DotStepper.Item>
          ))}
        </TabsPrimitives.List>
      </DotStepper.Root>

      <div className='mt-4'>
        {STEPS.map((step) => (
          <TabsPrimitives.Content
            key={step.id}
            value={step.id}
            className='text-paragraph-sm text-text-sub-600'
          >
            {step.content}
          </TabsPrimitives.Content>
        ))}
      </div>
    </TabsPrimitives.Root>
  );
}
