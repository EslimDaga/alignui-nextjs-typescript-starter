import * as React from 'react';

import * as AvatarPrimitives from '@/components/ui/avatar';

type AvatarProps = {
  src?: string;
} & React.ComponentPropsWithoutRef<typeof AvatarPrimitives.Root> &
  React.ComponentPropsWithoutRef<typeof AvatarPrimitives.Status>;

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ src, status, ...rest }, forwardedRef) => {
    return (
      <AvatarPrimitives.Root ref={forwardedRef} {...rest}>
        {src && <AvatarPrimitives.Image src={src} />}
        {status && (
          <AvatarPrimitives.Indicator position='bottom'>
            <AvatarPrimitives.Status status={status} />
          </AvatarPrimitives.Indicator>
        )}
      </AvatarPrimitives.Root>
    );
  },
);
Avatar.displayName = 'Avatar';

export function AvatarComposition() {
  return (
    <Avatar
      src='/images/avatar/illustration/wei.png'
      status='online'
      size='64'
      color='yellow'
    />
  );
}
