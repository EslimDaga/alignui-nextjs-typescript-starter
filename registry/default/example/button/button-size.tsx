import * as Button from '@/components/ui/button';

export function ButtonSize() {
  return (
    <div className='flex flex-col items-center gap-8'>
      {/* prettier-ignore */}
      <div className='flex flex-col items-center gap-4'>
        <div className='flex items-center gap-4'>
          <Button.Root size='medium'>Medium</Button.Root>
          <Button.Root size='small'>Small</Button.Root>
          <Button.Root size='xsmall'>Xsmall</Button.Root>
          <Button.Root size='xxsmall'>Xxsmall</Button.Root>
        </div>
        <div className='flex items-center gap-4'>
          <Button.Root size='medium' mode='stroke'>Medium</Button.Root>
          <Button.Root size='small' mode='stroke'>Small</Button.Root>
          <Button.Root size='xsmall' mode='stroke'>Xsmall</Button.Root>
          <Button.Root size='xxsmall' mode='stroke'>Xxsmall</Button.Root>
        </div>
        <div className='flex items-center gap-4'>
          <Button.Root size='medium' mode='lighter'>Medium</Button.Root>
          <Button.Root size='small' mode='lighter'>Small</Button.Root>
          <Button.Root size='xsmall' mode='lighter'>Xsmall</Button.Root>
          <Button.Root size='xxsmall' mode='lighter'>Xxsmall</Button.Root>
        </div>
        <div className='flex items-center gap-4'>
          <Button.Root size='medium' mode='ghost'>Medium</Button.Root>
          <Button.Root size='small' mode='ghost'>Small</Button.Root>
          <Button.Root size='xsmall' mode='ghost'>Xsmall</Button.Root>
          <Button.Root size='xxsmall' mode='ghost'>Xxsmall</Button.Root>
        </div>
      </div>
    </div>
  );
}
