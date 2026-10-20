import * as Avatar from '@/components/ui/avatar';

export function AvatarText() {
  return (
    <div className='flex gap-6'>
      <Avatar.Root>EW</Avatar.Root>
      <Avatar.Root color='yellow'>EW</Avatar.Root>
      <Avatar.Root color='purple'>EW</Avatar.Root>
    </div>
  );
}
