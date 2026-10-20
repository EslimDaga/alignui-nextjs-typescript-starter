import * as Badge from '@/components/ui/badge';

export function BadgeAsChild() {
  return (
    <Badge.Root asChild>
      <button type='button'>Badge</button>
    </Badge.Root>
  );
}
