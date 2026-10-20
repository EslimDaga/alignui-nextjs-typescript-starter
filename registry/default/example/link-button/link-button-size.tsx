import * as LinkButton from '@/components/ui/link-button';

export function LinkButtonSize() {
  return (
    <div className='flex flex-col items-center gap-4'>
      <LinkButton.Root>Link Button</LinkButton.Root>

      <LinkButton.Root size='small'>Link Button</LinkButton.Root>
    </div>
  );
}
