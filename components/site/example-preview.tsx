'use client';

import * as React from 'react';
import { RiCodeSSlashLine, RiEyeLine } from '@remixicon/react';

import * as SegmentedControl from '@/components/ui/segmented-control';

import { CodeHtml } from './code-html';
import { CopyButton } from './copy-button';
import { examples } from './examples.generated';

class PreviewBoundary extends React.Component<
  { children: React.ReactNode },
  { failed: boolean }
> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    if (this.state.failed) {
      return (
        <p className='text-paragraph-sm text-text-soft-400'>
          Este ejemplo no se pudo renderizar aquí. Revisa el código.
        </p>
      );
    }
    return this.props.children;
  }
}

export function ExamplePreview({
  name,
  code,
  codeHtml,
}: {
  name: string;
  code: string;
  codeHtml: string;
}) {
  const Example = examples[name];

  return (
    <SegmentedControl.Root
      defaultValue='preview'
      className='flex flex-col gap-3'
    >
      <div className='flex items-center justify-between gap-3'>
        <code className='text-label-sm text-text-strong-950 truncate font-mono'>
          {name}
        </code>
        <SegmentedControl.List className='w-auto shrink-0'>
          <SegmentedControl.Trigger value='preview' className='gap-1.5 px-3'>
            <RiEyeLine className='size-4' /> Vista
          </SegmentedControl.Trigger>
          <SegmentedControl.Trigger value='code' className='gap-1.5 px-3'>
            <RiCodeSSlashLine className='size-4' /> Código
          </SegmentedControl.Trigger>
        </SegmentedControl.List>
      </div>

      <SegmentedControl.Content value='preview'>
        <div className='bg-bg-white-0 ring-stroke-soft-200 flex min-h-72 items-center justify-center overflow-x-auto rounded-2xl p-6 ring-1 ring-inset sm:p-10'>
          <PreviewBoundary>{Example ? <Example /> : null}</PreviewBoundary>
        </div>
      </SegmentedControl.Content>

      <SegmentedControl.Content value='code'>
        <div className='bg-bg-weak-50 ring-stroke-soft-200 relative rounded-2xl ring-1 ring-inset'>
          <CopyButton value={code} className='absolute top-2 right-2' />
          <CodeHtml html={codeHtml} />
        </div>
      </SegmentedControl.Content>
    </SegmentedControl.Root>
  );
}
