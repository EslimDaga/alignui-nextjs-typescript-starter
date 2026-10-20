import { RiInformationFill } from '@remixicon/react';

import * as Hint from '@/components/ui/hint';

export function HintDemo() {
  return (
    <Hint.Root>
      <Hint.Icon as={RiInformationFill} />
      This is a hint text to help user.
    </Hint.Root>
  );
}
