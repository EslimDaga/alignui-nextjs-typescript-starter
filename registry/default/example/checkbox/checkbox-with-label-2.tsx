'use client';

import * as React from 'react';
import * as LabelPrimivites from '@radix-ui/react-label';

import * as Badge from '@/components/ui/badge';
import * as Checkbox from '@/components/ui/checkbox';
import * as Label from '@/components/ui/label';
import * as LinkButton from '@/components/ui/link-button';

export function CheckboxWithLabel() {
  const uniqueId = React.useId();

  return (
    <div className='flex flex-col gap-12 md:flex-row'>
      <div className='flex flex-col gap-12'>
        <div className='flex items-center gap-2'>
          <Checkbox.Root id={`${uniqueId}-c1`} />
          <Label.Root
            className='flex-1 gap-1 text-paragraph-sm'
            htmlFor={`${uniqueId}-c1`}
          >
            Label
            <Label.Sub>(Sublabel)</Label.Sub>
            <Badge.Root variant='light' color='blue' size='small'>
              NEW
            </Badge.Root>
          </Label.Root>
        </div>

        <div className='flex items-center gap-2'>
          <Checkbox.Root id={`${uniqueId}-c2`} defaultChecked />
          <Label.Root
            className='flex-1 gap-1 text-paragraph-sm'
            htmlFor={`${uniqueId}-c2`}
          >
            Label
            <Label.Sub>(Sublabel)</Label.Sub>
            <Badge.Root variant='light' color='blue' size='small'>
              NEW
            </Badge.Root>
          </Label.Root>
        </div>

        <div className='flex items-start gap-2'>
          <Checkbox.Root id={`${uniqueId}-c3`} />
          <div className='flex flex-1 flex-col items-start'>
            <LabelPrimivites.Root
              className='cursor-pointer'
              htmlFor={`${uniqueId}-c3`}
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

        <div className='flex items-start gap-2'>
          <Checkbox.Root id={`${uniqueId}-c4`} defaultChecked />
          <div className='flex flex-1 flex-col items-start'>
            <LabelPrimivites.Root
              className='cursor-pointer'
              htmlFor={`${uniqueId}-c4`}
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
            htmlFor={`${uniqueId}-c5`}
          >
            Label
            <Label.Sub>(Sublabel)</Label.Sub>
            <Badge.Root variant='light' color='blue' size='small'>
              NEW
            </Badge.Root>
          </Label.Root>
          <Checkbox.Root id={`${uniqueId}-c5`} />
        </div>

        <div className='flex items-center gap-2'>
          <Label.Root
            className='flex-1 gap-1 text-paragraph-sm'
            htmlFor={`${uniqueId}-c6`}
          >
            Label
            <Label.Sub>(Sublabel)</Label.Sub>
            <Badge.Root variant='light' color='blue' size='small'>
              NEW
            </Badge.Root>
          </Label.Root>
          <Checkbox.Root id={`${uniqueId}-c6`} defaultChecked />
        </div>

        <div className='flex items-start gap-2'>
          <div className='flex flex-1 flex-col items-start'>
            <LabelPrimivites.Root
              className='cursor-pointer'
              htmlFor={`${uniqueId}-c7`}
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
          <Checkbox.Root id={`${uniqueId}-c7`} />
        </div>

        <div className='flex items-start gap-2'>
          <div className='flex flex-1 flex-col items-start'>
            <LabelPrimivites.Root
              className='cursor-pointer'
              htmlFor={`${uniqueId}-c8`}
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
          <Checkbox.Root id={`${uniqueId}-c8`} defaultChecked />
        </div>
      </div>
    </div>
  );
}
