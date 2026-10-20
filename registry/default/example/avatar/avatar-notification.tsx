import * as Avatar from '@/components/ui/avatar';

export function AvatarNotification() {
  return (
    <div className='flex w-full max-w-96 flex-wrap items-center justify-center gap-6'>
      <Avatar.Root>
        <Avatar.Image src='/images/avatar/memoji/emma.png' />
        <Avatar.Indicator position='top'>
          <Avatar.Notification />
        </Avatar.Indicator>
      </Avatar.Root>

      <Avatar.Root size='72'>
        <Avatar.Image src='/images/avatar/memoji/emma.png' />
        <Avatar.Indicator position='top'>
          <Avatar.Notification />
        </Avatar.Indicator>
      </Avatar.Root>

      <Avatar.Root size='64'>
        <Avatar.Image src='/images/avatar/memoji/emma.png' />
        <Avatar.Indicator position='top'>
          <Avatar.Notification />
        </Avatar.Indicator>
      </Avatar.Root>

      <Avatar.Root size='56'>
        <Avatar.Image src='/images/avatar/memoji/emma.png' />
        <Avatar.Indicator position='top'>
          <Avatar.Notification />
        </Avatar.Indicator>
      </Avatar.Root>

      <Avatar.Root size='48'>
        <Avatar.Image src='/images/avatar/memoji/emma.png' />
        <Avatar.Indicator position='top'>
          <Avatar.Notification />
        </Avatar.Indicator>
      </Avatar.Root>

      <Avatar.Root size='40'>
        <Avatar.Image src='/images/avatar/memoji/emma.png' />
        <Avatar.Indicator position='top'>
          <Avatar.Notification />
        </Avatar.Indicator>
      </Avatar.Root>

      <Avatar.Root size='32'>
        <Avatar.Image src='/images/avatar/memoji/emma.png' />
        <Avatar.Indicator position='top'>
          <Avatar.Notification />
        </Avatar.Indicator>
      </Avatar.Root>

      <Avatar.Root size='24'>
        <Avatar.Image src='/images/avatar/memoji/emma.png' />
        <Avatar.Indicator position='top'>
          <Avatar.Notification />
        </Avatar.Indicator>
      </Avatar.Root>

      <Avatar.Root size='20'>
        <Avatar.Image src='/images/avatar/memoji/emma.png' />
        <Avatar.Indicator position='top'>
          <Avatar.Notification />
        </Avatar.Indicator>
      </Avatar.Root>
    </div>
  );
}
