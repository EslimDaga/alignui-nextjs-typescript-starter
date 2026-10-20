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

export function TabMenuVerticalWithHeading() {
  return (
    <div className='w-full max-w-[258px]'>
      <TabMenuVertical.Root defaultValue='Profile Settings'>
        <h4 className='text-subheading-xs text-text-soft-400 mb-2 px-2 py-1 uppercase'>
          Settings
        </h4>
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
