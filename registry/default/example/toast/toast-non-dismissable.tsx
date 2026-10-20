'use client';

import * as Button from '@/components/ui/button';
import * as AlertToast from '@/components/ui/toast-alert';
import { toast } from '@/components/ui/toast';

export function ToastNonDismissable() {
  return (
    <Button.Root
      variant='neutral'
      mode='stroke'
      onClick={() => {
        toast.custom((t) => (
          <AlertToast.Root
            t={t}
            status='success'
            message='Success! your operation was completed successfully'
            dismissable={false}
          />
        ));
      }}
    >
      Render Toast
    </Button.Root>
  );
}
