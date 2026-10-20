import { RiCloseLine, RiErrorWarningFill } from '@remixicon/react';

import * as Banner from '@/components/ui/banner';
import * as LinkButton from '@/components/ui/link-button';

export function BannerDemo() {
  return (
    <Banner.Root>
      <Banner.Content>
        <Banner.Icon as={RiErrorWarningFill} />
        <span className='text-label-sm'>Insert your alert title here!</span>
        <span>∙</span>
        <span className='text-paragraph-sm'>Insert your description here.</span>
        <LinkButton.Root variant='modifiable' size='medium' underline>
          Upgrade
        </LinkButton.Root>
      </Banner.Content>
      <Banner.CloseButton>
        <RiCloseLine className='size-5' />
      </Banner.CloseButton>
    </Banner.Root>
  );
}
