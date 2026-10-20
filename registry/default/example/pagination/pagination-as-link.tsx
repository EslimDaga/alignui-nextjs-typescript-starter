import {
  RiArrowLeftDoubleLine,
  RiArrowLeftSLine,
  RiArrowRightDoubleLine,
  RiArrowRightSLine,
} from '@remixicon/react';
import Link from 'next/link';

import * as Pagination from '@/components/ui/pagination';

export function PaginationAsLink() {
  return (
    <Pagination.Root>
      <Pagination.NavButton asChild>
        <Link href='#'>
          <Pagination.NavIcon as={RiArrowLeftDoubleLine} />
        </Link>
      </Pagination.NavButton>
      <Pagination.NavButton asChild>
        <Link href='#'>
          <Pagination.NavIcon as={RiArrowLeftSLine} />
        </Link>
      </Pagination.NavButton>
      <Pagination.Item asChild>
        <Link href='#'>1</Link>
      </Pagination.Item>
      <Pagination.Item asChild>
        <Link href='#'>2</Link>
      </Pagination.Item>
      <Pagination.Item asChild>
        <Link href='#'>3</Link>
      </Pagination.Item>
      <Pagination.Item current asChild>
        <Link href='#'>4</Link>
      </Pagination.Item>
      <Pagination.Item asChild>
        <Link href='#'>5</Link>
      </Pagination.Item>
      <Pagination.Item>...</Pagination.Item>
      <Pagination.Item asChild>
        <Link href='#'>16</Link>
      </Pagination.Item>
      <Pagination.NavButton asChild>
        <Link href='#'>
          <Pagination.NavIcon as={RiArrowRightDoubleLine} />
        </Link>
      </Pagination.NavButton>
      <Pagination.NavButton asChild>
        <Link href='#'>
          <Pagination.NavIcon as={RiArrowRightSLine} />
        </Link>
      </Pagination.NavButton>
    </Pagination.Root>
  );
}
