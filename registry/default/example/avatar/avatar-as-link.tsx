import * as Avatar from '@/components/ui/avatar';

export function AvatarAsLink() {
  return (
    <Avatar.Root asChild>
      <a href='#'>
        <Avatar.Image src='/images/avatar/photo/arthur.jpg' />
      </a>
    </Avatar.Root>
  );
}
