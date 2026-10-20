'use client';

import * as Button from '@/components/ui/button';
import * as LinkButton from '@/components/ui/link-button';
import { useNotification } from '@/hooks/use-notification';

export function NotificationWithLink() {
  const { notification } = useNotification();

  return (
    <Button.Root
      variant='neutral'
      mode='stroke'
      onClick={() =>
        notification({
          status: 'error',
          title: 'Database Connection Failure',
          description:
            "We're encountering issues with connecting to our system's database at the moment.",
          action: (
            <LinkButton.Root
              variant='modifiable'
              size='medium'
              underline
              asChild
            >
              <a href='#link-click'>Upgrade</a>
            </LinkButton.Root>
          ),
        })
      }
    >
      With Link
    </Button.Root>
  );
}
