import * as Checkbox from '@/components/ui/checkbox';

export function CheckboxDisabled() {
  return (
    <div className='flex gap-2'>
      <Checkbox.Root disabled />
      <Checkbox.Root disabled checked />
      <Checkbox.Root disabled checked='indeterminate' />
    </div>
  );
}
