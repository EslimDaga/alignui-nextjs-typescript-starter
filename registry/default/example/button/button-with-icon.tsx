import { RiArrowRightSLine, RiFileCopyLine } from '@remixicon/react';

import * as Button from '@/components/ui/button';

export function ButtonWithIcon() {
  return (
    <div className='flex flex-col items-center gap-4'>
      <Button.Root>
        Button
        <Button.Icon as={RiArrowRightSLine} />
      </Button.Root>

      <Button.Root>
        <Button.Icon as={RiFileCopyLine} />
      </Button.Root>
    </div>
  );
}
