import { RiSearchLine, RiUser6Line } from '@remixicon/react';

import * as Input from '@/components/ui/input';

export function InputWithIcon() {
  return (
    <div className='flex w-full max-w-[300px] flex-col gap-6'>
      <Input.Root>
        <Input.Wrapper>
          <Input.Icon as={RiUser6Line} />
          <Input.Input type='text' placeholder='Placeholder text...' />
        </Input.Wrapper>
      </Input.Root>

      <Input.Root>
        <Input.Wrapper>
          <Input.Input type='text' placeholder='Placeholder text...' />
          <Input.Icon as={RiSearchLine} />
        </Input.Wrapper>
      </Input.Root>
    </div>
  );
}
