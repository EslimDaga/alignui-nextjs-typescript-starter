import { RiLayout2Line, RiLayoutGridLine, RiListCheck } from '@remixicon/react';

import * as ButtonGroup from '@/components/ui/button-group';

export function ButtonGroupDemo() {
  return (
    <ButtonGroup.Root>
      <ButtonGroup.Item>
        <ButtonGroup.Icon as={RiLayoutGridLine} />
        Grid view
      </ButtonGroup.Item>
      <ButtonGroup.Item>
        <ButtonGroup.Icon as={RiListCheck} />
        List view
      </ButtonGroup.Item>
      <ButtonGroup.Item>
        <ButtonGroup.Icon as={RiLayout2Line} />
        Gallery view
      </ButtonGroup.Item>
    </ButtonGroup.Root>
  );
}
