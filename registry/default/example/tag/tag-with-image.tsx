import * as Tag from '@/components/ui/tag';

export function TagWithImage() {
  return (
    <div className='flex gap-6'>
      <Tag.Root>
        <Tag.Icon as='img' src='/images/logo/apex.svg' />
        Apex
      </Tag.Root>

      <Tag.Root>
        <Tag.Icon as='img' src='/images/major-brands/figma.svg' />
        Figma
      </Tag.Root>
    </div>
  );
}
