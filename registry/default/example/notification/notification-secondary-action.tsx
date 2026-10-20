'use client';

import * as Button from '@/components/ui/button';
import * as LinkButton from '@/components/ui/link-button';
import * as Notification from '@/components/ui/notification';
import { useNotification } from '@/hooks/use-notification';

export function NotificationWithSecondaryAction() {
  const { notification } = useNotification();

  return (
    <Button.Root
      variant='neutral'
      mode='stroke'
      onClick={() =>
        notification({
          status: 'warning',
          title: 'Insert your alert title here!',
          description:
            'Insert the alert description here. It would look better as two lines of text.',
          action: (
            <>
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
              ∙
              <Notification.Action
                altText='Learn More'
                onClick={() => {
                  alert('action click');
                }}
                type='button'
                asChild
              >
                <LinkButton.Root variant='modifiable' size='medium'>
                  Learn More
                </LinkButton.Root>
              </Notification.Action>
            </>
          ),
        })
      }
    >
      With Secondary Action
    </Button.Root>
  );
}
