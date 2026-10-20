import * as AvatarGroupCompact from '@/components/ui/avatar-group-compact';
import * as Avatar from '@/components/ui/avatar';

export function AvatarGroupDemo() {
  return (
    <AvatarGroupCompact.Root>
      <AvatarGroupCompact.Stack>
        <Avatar.Root>
          <Avatar.Image src='/images/avatar/illustration/emma.png' />
        </Avatar.Root>
        <Avatar.Root>
          <Avatar.Image src='/images/avatar/illustration/james.png' />
        </Avatar.Root>
        <Avatar.Root>
          <Avatar.Image src='/images/avatar/illustration/sophia.png' />
        </Avatar.Root>
      </AvatarGroupCompact.Stack>
      <AvatarGroupCompact.Overflow>+9</AvatarGroupCompact.Overflow>
    </AvatarGroupCompact.Root>
  );
}
