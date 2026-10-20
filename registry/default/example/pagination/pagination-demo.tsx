import {
  RiArrowLeftDoubleLine,
  RiArrowLeftSLine,
  RiArrowRightDoubleLine,
  RiArrowRightSLine,
} from '@remixicon/react';

import * as Pagination from '@/components/ui/pagination';

export function PaginationDemo() {
  return (
    <Pagination.Root>
      <Pagination.NavButton>
        <Pagination.NavIcon as={RiArrowLeftDoubleLine} />
      </Pagination.NavButton>
      <Pagination.NavButton>
        <Pagination.NavIcon as={RiArrowLeftSLine} />
      </Pagination.NavButton>
      <Pagination.Item>1</Pagination.Item>
      <Pagination.Item>2</Pagination.Item>
      <Pagination.Item>3</Pagination.Item>
      <Pagination.Item current>4</Pagination.Item>
      <Pagination.Item>5</Pagination.Item>
      <Pagination.Item>...</Pagination.Item>
      <Pagination.Item>16</Pagination.Item>
      <Pagination.NavButton>
        <Pagination.NavIcon as={RiArrowRightDoubleLine} />
      </Pagination.NavButton>
      <Pagination.NavButton>
        <Pagination.NavIcon as={RiArrowRightSLine} />
      </Pagination.NavButton>
    </Pagination.Root>
  );
}
