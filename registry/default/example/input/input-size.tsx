import { RiUser6Line } from '@remixicon/react';

import * as Input from '@/components/ui/input';

export function InputSize() {
  return (
    <div className='flex w-full max-w-[300px] flex-col gap-6'>
      <Input.Root size='medium'>
        <Input.Wrapper>
          <Input.Icon as={RiUser6Line} />
          <Input.Input type='text' placeholder='Placeholder text...' />
        </Input.Wrapper>
      </Input.Root>

      <Input.Root size='small'>
        <Input.Wrapper>
          <Input.Icon as={RiUser6Line} />
          <Input.Input type='text' placeholder='Placeholder text...' />
        </Input.Wrapper>
      </Input.Root>

      <Input.Root size='xsmall'>
        <Input.Wrapper>
          <Input.Icon as={RiUser6Line} />
          <Input.Input type='text' placeholder='Placeholder text...' />
        </Input.Wrapper>
      </Input.Root>
    </div>
  );
}
