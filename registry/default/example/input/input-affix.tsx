import * as Input from '@/components/ui/input';

export function InputWithAffix() {
  return (
    <div className='flex w-full max-w-[300px] flex-col gap-6'>
      <Input.Root>
        <Input.Affix>https://</Input.Affix>
        <Input.Wrapper>
          <Input.Input placeholder='www.example.com' />
        </Input.Wrapper>
      </Input.Root>

      <Input.Root>
        <Input.Wrapper>
          <Input.Input type='email' placeholder='example' />
        </Input.Wrapper>
        <Input.Affix>@gmail.com</Input.Affix>
      </Input.Root>
    </div>
  );
}
