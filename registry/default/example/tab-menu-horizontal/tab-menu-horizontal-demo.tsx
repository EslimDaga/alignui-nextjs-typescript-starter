import { RiArrowRightSLine, RiLayoutGridLine } from '@remixicon/react';

import * as TabMenuHorizontal from '@/components/ui/tab-menu-horizontal';

export function TabMenuHorizontalDemo() {
  return (
    <TabMenuHorizontal.Root defaultValue='overview'>
      <TabMenuHorizontal.List>
        <TabMenuHorizontal.Trigger value='overview'>
          <TabMenuHorizontal.Icon as={RiLayoutGridLine} />
          Overview
          <TabMenuHorizontal.ArrowIcon as={RiArrowRightSLine} />
        </TabMenuHorizontal.Trigger>
        <TabMenuHorizontal.Trigger value='dashboard'>
          <TabMenuHorizontal.Icon as={RiLayoutGridLine} />
          Dashboard
          <TabMenuHorizontal.ArrowIcon as={RiArrowRightSLine} />
        </TabMenuHorizontal.Trigger>
        <TabMenuHorizontal.Trigger value='settings'>
          <TabMenuHorizontal.Icon as={RiLayoutGridLine} />
          Settings
          <TabMenuHorizontal.ArrowIcon as={RiArrowRightSLine} />
        </TabMenuHorizontal.Trigger>
      </TabMenuHorizontal.List>
    </TabMenuHorizontal.Root>
  );
}
