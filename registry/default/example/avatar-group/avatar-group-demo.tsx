import * as AvatarGroup from '@/components/ui/avatar-group';
import * as Avatar from '@/components/ui/avatar';

export function AvatarGroupDemo() {
  return (
    <AvatarGroup.Root>
      <Avatar.Root>
        <Avatar.Image src='/images/avatar/illustration/emma.png' />
      </Avatar.Root>
      <Avatar.Root>
        <Avatar.Image src='/images/avatar/illustration/james.png' />
      </Avatar.Root>
      <Avatar.Root>
        <Avatar.Image src='/images/avatar/illustration/sophia.png' />
      </Avatar.Root>
      <AvatarGroup.Overflow>+9</AvatarGroup.Overflow>
    </AvatarGroup.Root>
  );
}
