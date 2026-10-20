import * as Avatar from '@/components/ui/avatar';

export function AvatarPlaceholder() {
  return (
    <div className='flex gap-6'>
      <Avatar.Root />
      <Avatar.Root color='yellow' placeholderType='company' />
      <Avatar.Root color='purple' />
    </div>
  );
}
