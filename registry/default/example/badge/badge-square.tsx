import * as Badge from '@/components/ui/badge';

export function BadgeSquare() {
  return (
    <div className='flex flex-col items-center gap-6'>
      <div className='flex items-center gap-6'>
        <Badge.Root square variant='filled' color='red'>
          2
        </Badge.Root>

        <Badge.Root square variant='light' color='pink'>
          5
        </Badge.Root>

        <Badge.Root square variant='lighter' color='green'>
          66
        </Badge.Root>

        <Badge.Root square variant='stroke' color='blue'>
          789
        </Badge.Root>
      </div>
      <div className='flex items-center gap-6'>
        <Badge.Root square size='medium' variant='filled' color='red'>
          2
        </Badge.Root>

        <Badge.Root square size='medium' variant='light' color='pink'>
          5
        </Badge.Root>

        <Badge.Root square size='medium' variant='lighter' color='green'>
          66
        </Badge.Root>

        <Badge.Root square size='medium' variant='stroke' color='blue'>
          789
        </Badge.Root>
      </div>
    </div>
  );
}
