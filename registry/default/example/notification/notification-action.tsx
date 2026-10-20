'use client';

import * as Button from '@/components/ui/button';
import * as LinkButton from '@/components/ui/link-button';
import * as Notification from '@/components/ui/notification';
import { useNotification } from '@/hooks/use-notification';

export function NotificationWithAction() {
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
          action: (
            <Notification.Action altText='upgrade' asChild>
              <LinkButton.Root
                variant='modifiable'
                size='medium'
                underline
                onClick={() => {
                  alert('action click');
                }}
              >
                Upgrade
              </LinkButton.Root>
            </Notification.Action>
          ),
        })
      }
    >
      With onClick action
    </Button.Root>
  );
}
