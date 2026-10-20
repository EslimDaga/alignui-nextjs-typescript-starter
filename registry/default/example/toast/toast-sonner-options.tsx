'use client';

import * as Button from '@/components/ui/button';
import * as AlertToast from '@/components/ui/toast-alert';
import { toast } from '@/components/ui/toast';

export function ToastSonnerOptions() {
  return (
    <div className='flex flex-col items-center gap-6'>
      <Button.Root
        variant='neutral'
        mode='stroke'
        onClick={() => {
          toast.custom(
            (t) => (
              <AlertToast.Root
                t={t}
                status='information'
                message='A recent update is now available. Review the new information to stay up-to-date.'
              />
            ),
            {
              position: 'top-center',
            },
          );
        }}
      >
        top-center
      </Button.Root>

      <Button.Root
        variant='neutral'
        mode='stroke'
        onClick={() => {
          toast.custom(
            (t) => (
              <AlertToast.Root
                t={t}
                status='information'
                message='A recent update is now available. Review the new information to stay up-to-date.'
              />
            ),
            {
              position: 'bottom-right',
            },
          );
        }}
      >
        bottom-right
      </Button.Root>
    </div>
  );
}
