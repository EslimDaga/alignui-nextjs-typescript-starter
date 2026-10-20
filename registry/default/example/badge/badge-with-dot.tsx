import * as Badge from '@/components/ui/badge';

export function BadgeWithDot() {
  return (
    <div className='flex flex-col items-center gap-6'>
      <Badge.Root>
        <Badge.Dot />
        Badge
      </Badge.Root>

      <Badge.Root>
        Badge
        <Badge.Dot />
      </Badge.Root>
    </div>
  );
}
