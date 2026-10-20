import { RiFileCopyLine, RiLinksLine } from '@remixicon/react';

import * as Input from '@/components/ui/input';
import * as Label from '@/components/ui/label';
import { cn } from '@/utils/cn';

export function InputWithButton() {
  return (
    <div className='w-full max-w-[300px]'>
      <div className='flex flex-col gap-1'>
        <Label.Root>Share Link</Label.Root>

        <Input.Root>
          <Input.Wrapper>
            <Input.Icon as={RiLinksLine} />
            <Input.Input placeholder='www.alignui.com' />
          </Input.Wrapper>
          <button
            type='button'
            className={cn(
              'inline-flex h-10 items-center justify-center gap-3 rounded-none bg-transparent px-3.5 text-label-sm text-text-sub-600 outline-none ring-1 ring-inset ring-transparent transition duration-200 ease-out',
              'hover:bg-bg-weak-50 hover:text-text-strong-950',
              'focus-visible:bg-bg-weak-50 focus-visible:text-text-strong-950 focus-visible:ring-transparent',
            )}
          >
            <RiFileCopyLine className='-mx-1 size-5 shrink-0' />
          </button>
        </Input.Root>
      </div>
    </div>
  );
}
