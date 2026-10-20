import * as Radio from '@/components/ui/radio';

export function RadioDisabled() {
  return (
    <Radio.Group defaultValue='r1' className='flex gap-2'>
      <Radio.Item value='r1' disabled />
      <Radio.Item value='r2' disabled />
    </Radio.Group>
  );
}
