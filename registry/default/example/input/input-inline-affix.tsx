import * as Input from '@/components/ui/input';

export function InputWithAffix() {
  return (
    <div className='flex w-full max-w-[300px] flex-col gap-6'>
      <Input.Root>
        <Input.Wrapper>
          <Input.InlineAffix>€</Input.InlineAffix>
          <Input.Input placeholder='0.00' />
        </Input.Wrapper>
      </Input.Root>
    </div>
  );
}
