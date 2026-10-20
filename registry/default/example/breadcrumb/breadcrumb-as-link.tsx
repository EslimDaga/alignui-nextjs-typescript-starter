import {
  RiArrowRightSLine,
  RiHomeSmile2Line,
  RiNotification3Line,
  RiSettings2Line,
} from '@remixicon/react';
import Link from 'next/link';

import * as Breadcrumb from '@/components/ui/breadcrumb';

export function BreadcrumbAsLink() {
  return (
    <Breadcrumb.Root>
      <Breadcrumb.Item asChild>
        <Link href='#'>
          <Breadcrumb.Icon as={RiSettings2Line} />
          Settings
        </Link>
      </Breadcrumb.Item>

      <Breadcrumb.ArrowIcon as={RiArrowRightSLine} />

      <Breadcrumb.Item asChild>
        <Link href='#'>
          <Breadcrumb.Icon as={RiNotification3Line} />
          Notifications
        </Link>
      </Breadcrumb.Item>

      <Breadcrumb.ArrowIcon as={RiArrowRightSLine} />

      <Breadcrumb.Item active>
        <Breadcrumb.Icon as={RiHomeSmile2Line} />
        Email Notifications
      </Breadcrumb.Item>
    </Breadcrumb.Root>
  );
}
