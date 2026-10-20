import { RiUser6Line } from '@remixicon/react';

import * as Input from '@/components/ui/input';

export function InputWithIcon() {
  return (
    <div className='flex w-full max-w-[300px]'>
      <Input.Root hasError>
        <Input.Wrapper>
          <Input.Icon as={RiUser6Line} />
          <Input.Input type='text' placeholder='Placeholder text...' />
        </Input.Wrapper>
      </Input.Root>
    </div>
  );
}
