import * as Avatar from '@/components/ui/avatar';

export function AvatarColor() {
  return (
    <div className='flex w-full max-w-96 flex-wrap justify-center gap-6'>
      <Avatar.Root>
        <Avatar.Image src='/images/avatar/memoji/james.png' />
      </Avatar.Root>

      <Avatar.Root color='yellow'>
        <Avatar.Image src='/images/avatar/memoji/emma.png' />
      </Avatar.Root>

      <Avatar.Root color='blue'>
        <Avatar.Image src='/images/avatar/memoji/arthur.png' />
      </Avatar.Root>

      <Avatar.Root color='sky'>
        <Avatar.Image src='/images/avatar/memoji/wei.png' />
      </Avatar.Root>

      <Avatar.Root color='purple'>
        <Avatar.Image src='/images/avatar/memoji/sophia.png' />
      </Avatar.Root>

      <Avatar.Root color='red'>
        <Avatar.Image src='/images/avatar/memoji/lena.png' />
      </Avatar.Root>
    </div>
  );
}
