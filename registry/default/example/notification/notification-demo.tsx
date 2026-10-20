import * as Button from '@/components/ui/button';
import { useNotification } from '@/hooks/use-notification';

export function NotificationDemo() {
  const { notification } = useNotification();

  return (
    <Button.Root
      variant='neutral'
      mode='stroke'
      onClick={() =>
        notification({
          title: 'Insert your alert title here!',
          description:
            'Insert the alert description here. It would look better as two lines of text.',
        })
      }
    >
      Notification
    </Button.Root>
  );
}
