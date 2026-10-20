import * as FancyButton from '@/components/ui/fancy-button';

export function FancyButtonAsChild() {
  return (
    <FancyButton.Root asChild>
      <a href='#'>Button</a>
    </FancyButton.Root>
  );
}
