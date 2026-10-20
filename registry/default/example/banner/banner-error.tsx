import { RiCloseLine, RiErrorWarningFill } from '@remixicon/react';

import * as Banner from '@/components/ui/banner';
import * as LinkButton from '@/components/ui/link-button';

export function BannerError() {
  return (
    <div className='space-y-6'>
      <Banner.Root variant='filled' status='error'>
        <Banner.Content>
          <Banner.Icon as={RiErrorWarningFill} />
          <span className='text-label-sm'>Insert your alert title here!</span>
          <span>∙</span>
          <span className='text-paragraph-sm'>
            Insert your description here.
          </span>
          <LinkButton.Root variant='modifiable' size='medium' underline>
            Upgrade
          </LinkButton.Root>
        </Banner.Content>
        <Banner.CloseButton>
          <RiCloseLine className='size-5' />
        </Banner.CloseButton>
      </Banner.Root>

      <Banner.Root variant='light' status='error'>
        <Banner.Content>
          <Banner.Icon as={RiErrorWarningFill} />
          <span className='text-label-sm'>Insert your alert title here!</span>
          <span>∙</span>
          <span className='text-paragraph-sm'>
            Insert your description here.
          </span>
          <LinkButton.Root variant='black' size='medium' underline>
            Upgrade
          </LinkButton.Root>
        </Banner.Content>
        <Banner.CloseButton>
          <RiCloseLine className='size-5' />
        </Banner.CloseButton>
      </Banner.Root>

      <Banner.Root variant='lighter' status='error'>
        <Banner.Content>
          <Banner.Icon as={RiErrorWarningFill} />
          <span className='text-label-sm'>Insert your alert title here!</span>
          <span>∙</span>
          <span className='text-paragraph-sm'>
            Insert your description here.
          </span>
          <LinkButton.Root variant='black' size='medium' underline>
            Upgrade
          </LinkButton.Root>
        </Banner.Content>
        <Banner.CloseButton>
          <RiCloseLine className='size-5' />
        </Banner.CloseButton>
      </Banner.Root>

      <Banner.Root variant='stroke' status='error'>
        <Banner.Content>
          <Banner.Icon as={RiErrorWarningFill} />
          <span className='text-label-sm'>Insert your alert title here!</span>
          <span>∙</span>
          <span className='text-paragraph-sm'>
            Insert your description here.
          </span>
          <LinkButton.Root variant='black' size='medium' underline>
            Upgrade
          </LinkButton.Root>
        </Banner.Content>
        <Banner.CloseButton>
          <RiCloseLine className='size-5' />
        </Banner.CloseButton>
      </Banner.Root>
    </div>
  );
}
