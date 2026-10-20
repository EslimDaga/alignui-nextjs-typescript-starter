import * as Avatar from '@/components/ui/avatar';
import * as Tag from '@/components/ui/tag';

export function TagWithAvatar() {
  return (
    <div className='flex gap-6'>
      <Tag.Root>
        <Tag.Icon as={Avatar.Root}>
          <Avatar.Image src='/images/avatar/illustration/james.png' />
        </Tag.Icon>
        James Brown
      </Tag.Root>
    </div>
  );
}
