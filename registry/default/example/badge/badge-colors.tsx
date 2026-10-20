import * as Badge from '@/components/ui/badge';

export function BadgeColors() {
  return (
    <div className='flex w-full max-w-96 flex-wrap items-center justify-center gap-6'>
      <Badge.Root>Badge</Badge.Root>
      <Badge.Root color='blue'>Badge</Badge.Root>
      <Badge.Root color='orange'>Badge</Badge.Root>
      <Badge.Root color='red'>Badge</Badge.Root>
      <Badge.Root color='green'>Badge</Badge.Root>
      <Badge.Root color='yellow'>Badge</Badge.Root>
      <Badge.Root color='purple'>Badge</Badge.Root>
      <Badge.Root color='sky'>Badge</Badge.Root>
      <Badge.Root color='pink'>Badge</Badge.Root>
      <Badge.Root color='teal'>Badge</Badge.Root>
    </div>
  );
}
