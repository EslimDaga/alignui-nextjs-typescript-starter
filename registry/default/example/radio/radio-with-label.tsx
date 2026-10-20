import * as Label from '@/components/ui/label';
import * as Radio from '@/components/ui/radio';

export function RadioWithLabel() {
  return (
    <Radio.Group defaultValue='disabled-checked' className='space-y-5'>
      <div className='group/radio flex items-start gap-2'>
        <Radio.Item value='spam' id='l1' />
        <Label.Root
          htmlFor='l1'
          className='text-text-sub-600 group-has-[[data-state=checked]]/radio:text-text-strong-950 flex-col gap-1'
        >
          Spam
        </Label.Root>
      </div>

      <div className='group/radio flex items-start gap-2'>
        <Radio.Item value='harrassment' id='l2' />
        <Label.Root
          htmlFor='l2'
          className='text-text-sub-600 group-has-[[data-state=checked]]/radio:text-text-strong-950 flex-col gap-1'
        >
          Harrassment
        </Label.Root>
      </div>

      <div className='group/radio flex items-start gap-2'>
        <Radio.Item value='violation' id='l3' />
        <Label.Root
          htmlFor='l3'
          className='text-text-sub-600 group-has-[[data-state=checked]]/radio:text-text-strong-950 flex-col gap-1'
        >
          Violation of Rules
        </Label.Root>
      </div>
    </Radio.Group>
  );
}
