'use client';

import * as React from 'react';

import * as Avatar from '@/components/ui/avatar';
import * as Select from '@/components/ui/select';

type Users = {
  image: string;
  color: React.ComponentPropsWithoutRef<typeof Avatar.Root>['color'];
  value: string;
  label: React.ReactNode;
}[];

const users: Users = [
  {
    image: '/images/avatar/photo/sophia.png',
    color: 'yellow',
    value: 'sophia-williams',
    label: (
      <div className='flex items-center gap-1'>
        Sophia Williams
        <span className='text-paragraph-xs text-text-soft-400 group-has-[&]/trigger:hidden'>
          @sophia
        </span>
      </div>
    ),
  },
  {
    image: '/images/avatar/photo/arthur.png',
    color: 'blue',
    value: 'arthur-taylor',
    label: (
      <div className='flex items-center gap-1'>
        Arthur Taylor
        <span className='text-paragraph-xs text-text-soft-400 group-has-[&]/trigger:hidden'>
          @arthur
        </span>
      </div>
    ),
  },
  {
    image: '/images/avatar/photo/james.png',
    color: 'gray',
    value: 'james-brown',
    label: (
      <div className='flex items-center gap-1'>
        James Brown
        <span className='text-paragraph-xs text-text-soft-400 group-has-[&]/trigger:hidden'>
          @james
        </span>
      </div>
    ),
  },
  {
    image: '/images/avatar/photo/emma.png',
    color: 'sky',
    value: 'emma-wright',
    label: (
      <div className='flex items-center gap-1'>
        Emma Wright
        <span className='text-paragraph-xs text-text-soft-400 group-has-[&]/trigger:hidden'>
          @emma
        </span>
      </div>
    ),
  },
  {
    image: '/images/avatar/photo/matthew.png',
    color: 'purple',
    value: 'matthew-johnson',
    label: (
      <div className='flex items-center gap-1'>
        Matthew Johnson
        <span className='text-paragraph-xs text-text-soft-400 group-has-[&]/trigger:hidden'>
          @matthew
        </span>
      </div>
    ),
  },
  {
    image: '/images/avatar/photo/laura.png',
    color: 'red',
    value: 'laura-perez',
    label: (
      <div className='flex items-center gap-1'>
        Laura Perez
        <span className='text-paragraph-xs text-text-soft-400 group-has-[&]/trigger:hidden'>
          @laura
        </span>
      </div>
    ),
  },
];

export function SelectUser() {
  return (
    <div className='w-full max-w-[300px]'>
      <Select.Root>
        <Select.Trigger>
          <Select.Value placeholder='Select a user...' />
        </Select.Trigger>
        <Select.Content>
          {users.map((item) => (
            <Select.Item key={item.value} value={item.value}>
              <Select.ItemIcon as={Avatar.Root} size='20' color={item.color}>
                <Avatar.Image src={item.image} />
              </Select.ItemIcon>
              {item.label}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
    </div>
  );
}
