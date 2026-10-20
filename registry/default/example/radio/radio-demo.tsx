import * as Radio from '@/components/ui/radio';

export function RadioDemo() {
  return (
    <Radio.Group defaultValue='r1' className='flex gap-2'>
      <Radio.Item value='r1' />
      <Radio.Item value='r2' />
    </Radio.Group>
  );
}
