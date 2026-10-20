'use client';

import * as TabMenuHorizontal from '@/components/ui/tab-menu-horizontal';

export function Tabs({
  items,
}: {
  items: { value: string; label: string; content: React.ReactNode }[];
}) {
  return (
    <TabMenuHorizontal.Root defaultValue={items[0]?.value}>
      <TabMenuHorizontal.List className='overflow-x-auto'>
        {items.map((item) => (
          <TabMenuHorizontal.Trigger key={item.value} value={item.value}>
            {item.label}
          </TabMenuHorizontal.Trigger>
        ))}
      </TabMenuHorizontal.List>
      {items.map((item) => (
        <TabMenuHorizontal.Content
          key={item.value}
          value={item.value}
          className='pt-5'
        >
          {item.content}
        </TabMenuHorizontal.Content>
      ))}
    </TabMenuHorizontal.Root>
  );
}
