import { RiArrowRightSLine, RiHomeSmile2Line } from '@remixicon/react';

import * as Breadcrumb from '@/components/ui/breadcrumb';

export function BreadcrumbDemo() {
  return (
    <Breadcrumb.Root>
      <Breadcrumb.Item>
        <Breadcrumb.Icon as={RiHomeSmile2Line} />
      </Breadcrumb.Item>

      <Breadcrumb.ArrowIcon as={RiArrowRightSLine} />

      <Breadcrumb.Item>Blogs</Breadcrumb.Item>

      <Breadcrumb.ArrowIcon as={RiArrowRightSLine} />

      <Breadcrumb.Item active>
        The Power of Minimalism in Design
      </Breadcrumb.Item>
    </Breadcrumb.Root>
  );
}
