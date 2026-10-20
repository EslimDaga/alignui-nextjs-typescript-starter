import * as Switch from '@/components/ui/switch';

export function SwitchDisabled() {
  return (
    <div className='flex flex-col items-center gap-6'>
      <Switch.Root disabled />
      <Switch.Root disabled checked />
    </div>
  );
}
