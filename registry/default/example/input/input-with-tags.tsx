'use client';

import * as React from 'react';

import * as Input from '@/components/ui/input';
import * as Label from '@/components/ui/label';
import * as Tag from '@/components/ui/tag';

export function InputWithTags() {
  const [tags, setTags] = React.useState(['Berlin', 'London', 'Paris']);
  const [inputValue, setInputValue] = React.useState('');

  const addTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      setTags([...tags, inputValue.trim()]);
      setInputValue('');
    }
  };

  const removeTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

  return (
    <div className='flex w-full max-w-[300px] flex-col gap-6'>
      <div className='flex flex-col gap-1'>
        <Label.Root htmlFor='tags'>Tag Input</Label.Root>

        <Input.Root>
          <Input.Wrapper>
            <Input.Input
              id='tags'
              placeholder='Add tags...'
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={addTag}
            />
          </Input.Wrapper>
        </Input.Root>

        <div className='mt-2 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <Tag.Root key={tag}>
              {tag}
              <Tag.DismissButton onClick={() => removeTag(tag)} />
            </Tag.Root>
          ))}
        </div>
      </div>
    </div>
  );
}
