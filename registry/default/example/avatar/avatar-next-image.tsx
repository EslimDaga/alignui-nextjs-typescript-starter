import Image from 'next/image';

import * as Avatar from '@/components/ui/avatar';

export function AvatarNextImage() {
  return (
    <Avatar.Root>
      <Avatar.Image asChild>
        <Image
          src='/images/avatar/photo/arthur.jpg'
          alt=''
          width={80}
          height={80}
        />
      </Avatar.Image>
    </Avatar.Root>
  );
}
