import {
  RiHomeSmile2Line,
  RiNotification3Line,
  RiSettings2Line,
} from '@remixicon/react';

import * as Breadcrumb from '@/components/ui/breadcrumb';

export function BreadcrumbSeparator() {
  return (
    <Breadcrumb.Root>
      <Breadcrumb.Item>
        <Breadcrumb.Icon as={RiSettings2Line} />
        Settings
      </Breadcrumb.Item>

      <Breadcrumb.ArrowIcon>/</Breadcrumb.ArrowIcon>

      <Breadcrumb.Item>
        <Breadcrumb.Icon as={RiNotification3Line} />
        Notifications
      </Breadcrumb.Item>

      <Breadcrumb.ArrowIcon>/</Breadcrumb.ArrowIcon>

      <Breadcrumb.Item active>
        <Breadcrumb.Icon as={RiHomeSmile2Line} />
        Email Notifications
      </Breadcrumb.Item>
    </Breadcrumb.Root>
  );
}
