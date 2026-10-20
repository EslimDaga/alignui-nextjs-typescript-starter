import * as LinkButton from '@/components/ui/link-button';

export function LinkButtonAsChild() {
  return (
    <LinkButton.Root asChild>
      <a href='#'>Link Button</a>
    </LinkButton.Root>
  );
}
