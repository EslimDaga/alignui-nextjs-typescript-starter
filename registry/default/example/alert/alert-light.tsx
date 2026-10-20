import {
  RiAlertFill,
  RiCheckboxCircleFill,
  RiErrorWarningFill,
  RiInformationFill,
  RiMagicFill,
} from '@remixicon/react';

import * as Alert from '@/components/ui/alert';
import * as LinkButton from '@/components/ui/link-button';

export function AlertLight() {
  return (
    <div className='w-full max-w-96 space-y-6'>
      <Alert.Root variant='light' status='error'>
        <Alert.Icon as={RiErrorWarningFill} />
        Insert your alert title here!
        <LinkButton.Root variant='modifiable' size='medium' underline>
          Upgrade
        </LinkButton.Root>
        <button type='button'>
          <Alert.CloseIcon />
        </button>
      </Alert.Root>

      <Alert.Root variant='light' status='warning'>
        <Alert.Icon as={RiAlertFill} />
        Insert your alert title here!
        <LinkButton.Root variant='modifiable' size='medium' underline>
          Upgrade
        </LinkButton.Root>
        <button type='button'>
          <Alert.CloseIcon />
        </button>
      </Alert.Root>

      <Alert.Root variant='light' status='success'>
        <Alert.Icon as={RiCheckboxCircleFill} />
        Insert your alert title here!
        <LinkButton.Root variant='modifiable' size='medium' underline>
          Upgrade
        </LinkButton.Root>
        <button type='button'>
          <Alert.CloseIcon />
        </button>
      </Alert.Root>

      <Alert.Root variant='light' status='information'>
        <Alert.Icon as={RiInformationFill} />
        Insert your alert title here!
        <LinkButton.Root variant='modifiable' size='medium' underline>
          Upgrade
        </LinkButton.Root>
        <button type='button'>
          <Alert.CloseIcon />
        </button>
      </Alert.Root>

      <Alert.Root variant='light' status='feature'>
        <Alert.Icon as={RiMagicFill} />
        Insert your alert title here!
        <LinkButton.Root variant='modifiable' size='medium' underline>
          Upgrade
        </LinkButton.Root>
        <button type='button'>
          <Alert.CloseIcon />
        </button>
      </Alert.Root>
    </div>
  );
}
