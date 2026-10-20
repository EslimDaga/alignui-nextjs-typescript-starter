'use client';

import * as React from 'react';
import { RiCheckLine, RiFileCopyLine } from '@remixicon/react';

import * as CompactButton from '@/components/ui/compact-button';
import * as Tooltip from '@/components/ui/tooltip';

export function CopyButton({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const [copied, setCopied] = React.useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <CompactButton.Root
          variant='ghost'
          size='large'
          onClick={copy}
          className={className}
          aria-label='Copiar'
        >
          <CompactButton.Icon as={copied ? RiCheckLine : RiFileCopyLine} />
        </CompactButton.Root>
      </Tooltip.Trigger>
      <Tooltip.Content size='small'>
        {copied ? '¡Copiado!' : 'Copiar'}
      </Tooltip.Content>
    </Tooltip.Root>
  );
}
