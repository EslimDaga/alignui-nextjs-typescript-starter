'use client';

import * as React from 'react';
import * as LabelPrimivites from '@radix-ui/react-label';

import * as Badge from '@/components/ui/badge';
import * as Label from '@/components/ui/label';
import * as LinkButton from '@/components/ui/link-button';
import * as Radio from '@/components/ui/radio';

export function RadioWithLabel() {
  const uniqueId = React.useId();

  return (
    <Radio.Group
      defaultValue={`${uniqueId}-r3`}
      className='flex flex-col gap-12 md:flex-row'
    >
      <div className='flex flex-col gap-12'>
        <div className='flex items-center gap-2'>
          <Radio.Item value={`${uniqueId}-r1`} id={`${uniqueId}-r1`} />
          <Label.Root
            className='flex-1 gap-1 text-paragraph-sm'
            htmlFor={`${uniqueId}-r1`}
          >
            Label
            <Label.Sub>(Sublabel)</Label.Sub>
            <Badge.Root variant='light' color='blue' size='small'>
              NEW
            </Badge.Root>
          </Label.Root>
        </div>

        <div className='flex items-start gap-2'>
          <Radio.Item value={`${uniqueId}-r2`} id={`${uniqueId}-r2`} />
          <div className='flex flex-1 flex-col items-start'>
            <LabelPrimivites.Root
              className='cursor-pointer'
              htmlFor={`${uniqueId}-r2`}
            >
              <div className='flex items-center gap-1'>
                <span className='text-paragraph-sm text-text-strong-950'>
                  Label
                </span>
                <Label.Sub>(Sublabel)</Label.Sub>
                <Badge.Root variant='light' color='blue' size='small'>
                  NEW
                </Badge.Root>
              </div>
              <div className='mt-1 text-paragraph-xs text-text-sub-600'>
                Insert the checkbox description here.
              </div>
            </LabelPrimivites.Root>
            <LinkButton.Root variant='primary' size='small' className='mt-2.5'>
              Link Button
            </LinkButton.Root>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-12'>
        <div className='flex items-center gap-2'>
          <Label.Root
            className='flex-1 gap-1 text-paragraph-sm'
            htmlFor={`${uniqueId}-r3`}
          >
            Label
            <Label.Sub>(Sublabel)</Label.Sub>
            <Badge.Root variant='light' color='blue' size='small'>
              NEW
            </Badge.Root>
          </Label.Root>
          <Radio.Item value={`${uniqueId}-r3`} id={`${uniqueId}-r3`} />
        </div>

        <div className='flex items-start gap-2'>
          <div className='flex flex-1 flex-col items-start'>
            <LabelPrimivites.Root
              className='cursor-pointer'
              htmlFor={`${uniqueId}-r4`}
            >
              <div className='flex items-center gap-1'>
                <span className='text-paragraph-sm text-text-strong-950'>
                  Label
                </span>
                <Label.Sub>(Sublabel)</Label.Sub>
                <Badge.Root variant='light' color='blue' size='small'>
                  NEW
                </Badge.Root>
              </div>
              <div className='mt-1 text-paragraph-xs text-text-sub-600'>
                Insert the checkbox description here.
              </div>
            </LabelPrimivites.Root>
            <LinkButton.Root variant='primary' size='small' className='mt-2.5'>
              Link Button
            </LinkButton.Root>
          </div>
          <Radio.Item value={`${uniqueId}-r4`} id={`${uniqueId}-r4`} />
        </div>
      </div>
    </Radio.Group>
  );
}
