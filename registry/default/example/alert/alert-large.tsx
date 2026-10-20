import {
  RiAlertFill,
  RiCheckboxCircleFill,
  RiErrorWarningFill,
  RiInformationFill,
} from '@remixicon/react';

import * as Alert from '@/components/ui/alert';
import * as LinkButton from '@/components/ui/link-button';

export function AlertLarge() {
  return (
    <div className='w-full max-w-96 space-y-6'>
      <Alert.Root variant='filled' status='error' size='large'>
        <Alert.Icon as={RiErrorWarningFill} />
        <div className='space-y-2.5'>
          <div className='space-y-1'>
            <div className='text-label-sm'>Insert your alert title here!</div>
            <div>
              Insert the alert description here. It would look better as two
              lines of text.
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <LinkButton.Root variant='modifiable' size='medium' underline>
              Upgrade
            </LinkButton.Root>
            <span>∙</span>
            <LinkButton.Root variant='modifiable' size='medium'>
              Learn More
            </LinkButton.Root>
          </div>
        </div>
      </Alert.Root>

      <Alert.Root variant='light' status='warning' size='large'>
        <Alert.Icon as={RiAlertFill} />
        <div className='space-y-2.5'>
          <div className='space-y-1'>
            <div className='text-label-sm'>Insert your alert title here!</div>
            <div>
              Insert the alert description here. It would look better as two
              lines of text.
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <LinkButton.Root variant='modifiable' size='medium' underline>
              Upgrade
            </LinkButton.Root>
            <span>∙</span>
            <LinkButton.Root variant='modifiable' size='medium'>
              Learn More
            </LinkButton.Root>
          </div>
        </div>
      </Alert.Root>

      <Alert.Root variant='lighter' status='success' size='large'>
        <Alert.Icon as={RiCheckboxCircleFill} />
        <div className='space-y-2.5'>
          <div className='space-y-1'>
            <div className='text-label-sm'>Insert your alert title here!</div>
            <div>
              Insert the alert description here. It would look better as two
              lines of text.
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <LinkButton.Root variant='modifiable' size='medium' underline>
              Upgrade
            </LinkButton.Root>
            <span>∙</span>
            <LinkButton.Root variant='modifiable' size='medium'>
              Learn More
            </LinkButton.Root>
          </div>
        </div>
      </Alert.Root>

      <Alert.Root variant='stroke' status='information' size='large'>
        <Alert.Icon as={RiInformationFill} />
        <div className='space-y-2.5'>
          <div className='space-y-1'>
            <div className='text-label-sm'>Insert your alert title here!</div>
            <div>
              Insert the alert description here. It would look better as two
              lines of text.
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <LinkButton.Root variant='modifiable' size='medium' underline>
              Upgrade
            </LinkButton.Root>
            <span>∙</span>
            <LinkButton.Root variant='modifiable' size='medium'>
              Learn More
            </LinkButton.Root>
          </div>
        </div>
      </Alert.Root>
    </div>
  );
}
