import {
  RiArrowRightSLine,
  RiContactsBookLine,
  RiShareForwardBoxLine,
  RiShareLine,
  RiUserLine,
} from '@remixicon/react';

import * as TabMenuVertical from '@/components/ui/tab-menu-vertical';

const items = [
  {
    label: 'Profile Settings',
    icon: RiUserLine,
  },
  {
    label: 'Contact Information',
    icon: RiContactsBookLine,
  },
  {
    label: 'Social Links',
    icon: RiShareLine,
  },
  {
    label: 'Export Data',
    icon: RiShareForwardBoxLine,
  },
];

export function TabMenuVerticalDemo() {
  return (
    <div className='w-full max-w-[258px]'>
      <TabMenuVertical.Root defaultValue='Profile Settings'>
        <TabMenuVertical.List>
          {items.map(({ label, icon: Icon }) => (
            <TabMenuVertical.Trigger key={label} value={label}>
              <TabMenuVertical.Icon as={Icon} />
              {label}
              <TabMenuVertical.ArrowIcon as={RiArrowRightSLine} />
            </TabMenuVertical.Trigger>
          ))}
        </TabMenuVertical.List>
      </TabMenuVertical.Root>
    </div>
  );
}
