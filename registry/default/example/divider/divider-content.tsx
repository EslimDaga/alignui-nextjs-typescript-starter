import { RiAddLine } from '@remixicon/react';

import * as Button from '@/components/ui/button';
import * as Divider from '@/components/ui/divider';

export function DividerContent() {
  return (
    <div className='w-full max-w-96'>
      <Divider.Root variant='content'>
        <Button.Root variant='neutral' mode='stroke' size='xsmall'>
          <Button.Icon as={RiAddLine} />
        </Button.Root>
      </Divider.Root>
    </div>
  );
}
