import {
  RiBuilding2Line,
  RiEqualizerLine,
  RiGlobalLine,
  RiGroupLine,
  RiNotification2Line,
  RiShieldUserLine,
  RiUserSettingsLine,
} from '@remixicon/react';

import * as TabMenuHorizontal from '@/components/ui/tab-menu-horizontal';

const items = [
  {
    label: 'Profile',
    icon: RiUserSettingsLine,
  },
  {
    label: 'Company',
    icon: RiBuilding2Line,
  },
  {
    label: 'Notifications',
    icon: RiNotification2Line,
  },
  {
    label: 'Team',
    icon: RiGroupLine,
  },
  {
    label: 'Privacy & Security',
    icon: RiShieldUserLine,
  },
  {
    label: 'Integrations',
    icon: RiEqualizerLine,
  },
  {
    label: 'Localization',
    icon: RiGlobalLine,
  },
];

export function TabMenuHorizontalScroll() {
  return (
    <TabMenuHorizontal.Root defaultValue='Profile'>
      <TabMenuHorizontal.List>
        {items.map(({ label, icon: Icon }) => (
          <TabMenuHorizontal.Trigger key={label} value={label}>
            <TabMenuHorizontal.Icon as={Icon} />
            {label}
          </TabMenuHorizontal.Trigger>
        ))}
      </TabMenuHorizontal.List>
    </TabMenuHorizontal.Root>
  );
}
