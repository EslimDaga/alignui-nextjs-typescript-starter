import * as Button from '@/components/ui/button';
import { useNotification } from '@/hooks/use-notification';

export function NotificationVariants() {
  const { notification } = useNotification();

  return (
    <div className='flex flex-col gap-6'>
      <Button.Root
        variant='neutral'
        mode='stroke'
        onClick={() =>
          notification({
            title: 'Insert your alert title here!',
            description:
              'Insert the alert description here. It would look better as two lines of text.',
            variant: 'filled',
            status: 'error',
          })
        }
      >
        Filled & Error
      </Button.Root>

      <Button.Root
        variant='neutral'
        mode='stroke'
        onClick={() =>
          notification({
            title: 'Insert your alert title here!',
            description:
              'Insert the alert description here. It would look better as two lines of text.',
            variant: 'light',
            status: 'warning',
          })
        }
      >
        Light & Warning
      </Button.Root>

      <Button.Root
        variant='neutral'
        mode='stroke'
        onClick={() =>
          notification({
            title: 'Insert your alert title here!',
            description:
              'Insert the alert description here. It would look better as two lines of text.',
            variant: 'lighter',
            status: 'information',
          })
        }
      >
        Lighter & Information
      </Button.Root>

      <Button.Root
        variant='neutral'
        mode='stroke'
        onClick={() =>
          notification({
            title: 'Insert your alert title here!',
            description:
              'Insert the alert description here. It would look better as two lines of text.',
            variant: 'stroke',
            status: 'success',
          })
        }
      >
        Stroke & Success
      </Button.Root>
    </div>
  );
}
