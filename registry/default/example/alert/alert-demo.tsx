import { RiErrorWarningFill } from '@remixicon/react';

import * as Alert from '@/components/ui/alert';
import * as LinkButton from '@/components/ui/link-button';

export function AlertDemo() {
  return (
    <Alert.Root className='max-w-96'>
      <Alert.Icon as={RiErrorWarningFill} />
      Insert your alert title here!
      <LinkButton.Root variant='modifiable' size='medium' underline>
        Upgrade
      </LinkButton.Root>
      <button type='button'>
        <Alert.CloseIcon />
      </button>
    </Alert.Root>
  );
}
