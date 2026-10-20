import * as Avatar from '@/components/ui/avatar';

export function AvatarStatus() {
  return (
    <div className='flex w-full max-w-96 flex-wrap justify-center gap-6'>
      <Avatar.Root>
        <Avatar.Image src='/images/avatar/memoji/emma.png' />
        <Avatar.Indicator>
          <Avatar.Status status='online' />
        </Avatar.Indicator>
      </Avatar.Root>

      <Avatar.Root>
        <Avatar.Image src='/images/avatar/memoji/emma.png' />
        <Avatar.Indicator>
          <Avatar.Status status='offline' />
        </Avatar.Indicator>
      </Avatar.Root>

      <Avatar.Root>
        <Avatar.Image src='/images/avatar/memoji/emma.png' />
        <Avatar.Indicator>
          <Avatar.Status status='busy' />
        </Avatar.Indicator>
      </Avatar.Root>

      <Avatar.Root>
        <Avatar.Image src='/images/avatar/memoji/emma.png' />
        <Avatar.Indicator>
          <Avatar.Status status='away' />
        </Avatar.Indicator>
      </Avatar.Root>

      <Avatar.Root>
        <Avatar.Image src='/images/avatar/memoji/emma.png' />
        <Avatar.Indicator>
          <Avatar.Status className='bg-blue-400' />
        </Avatar.Indicator>
      </Avatar.Root>
    </div>
  );
}
