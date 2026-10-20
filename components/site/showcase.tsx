'use client';

import * as React from 'react';
import {
  RiCheckboxCircleFill,
  RiLock2Line,
  RiMailLine,
  RiNotification3Line,
} from '@remixicon/react';

import * as Alert from '@/components/ui/alert';
import * as Avatar from '@/components/ui/avatar';
import * as AvatarGroup from '@/components/ui/avatar-group';
import * as Badge from '@/components/ui/badge';
import * as Button from '@/components/ui/button';
import * as Checkbox from '@/components/ui/checkbox';
import * as Divider from '@/components/ui/divider';
import * as Input from '@/components/ui/input';
import * as Kbd from '@/components/ui/kbd';
import * as Label from '@/components/ui/label';
import * as LinkButton from '@/components/ui/link-button';
import * as ProgressBar from '@/components/ui/progress-bar';
import * as StatusBadge from '@/components/ui/status-badge';
import * as Switch from '@/components/ui/switch';
import * as Tag from '@/components/ui/tag';
import { notification } from '@/hooks/use-notification';

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className='rounded-20 bg-bg-white-0 shadow-regular-xs ring-stroke-soft-200 flex flex-col gap-5 p-5 ring-1 ring-inset'>
      <p className='text-subheading-xs text-text-soft-400 uppercase'>{title}</p>
      {children}
    </div>
  );
}

export function Showcase() {
  const id = React.useId();
  const [installed, setInstalled] = React.useState([
    'button',
    'input',
    'modal',
    'select',
  ]);

  return (
    <div className='grid gap-4 lg:grid-cols-3'>
      <Card title='Formulario'>
        <div className='flex flex-col gap-1'>
          <Label.Root htmlFor={`${id}-email`}>
            Email <Label.Asterisk />
          </Label.Root>
          <Input.Root>
            <Input.Wrapper>
              <Input.Icon as={RiMailLine} />
              <Input.Input
                id={`${id}-email`}
                type='email'
                placeholder='tu@empresa.com'
              />
            </Input.Wrapper>
          </Input.Root>
        </div>
        <div className='flex flex-col gap-1'>
          <Label.Root htmlFor={`${id}-password`}>Contraseña</Label.Root>
          <Input.Root>
            <Input.Wrapper>
              <Input.Icon as={RiLock2Line} />
              <Input.Input
                id={`${id}-password`}
                type='password'
                placeholder='••••••••'
              />
            </Input.Wrapper>
          </Input.Root>
        </div>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <Checkbox.Root id={`${id}-remember`} defaultChecked />
            <Label.Root
              htmlFor={`${id}-remember`}
              className='text-paragraph-sm'
            >
              Recordarme
            </Label.Root>
          </div>
          <LinkButton.Root variant='gray' size='medium' underline>
            ¿La olvidaste?
          </LinkButton.Root>
        </div>
        <Button.Root className='w-full'>Iniciar sesión</Button.Root>
      </Card>

      <Card title='Proyecto'>
        <div className='flex items-center justify-between gap-3'>
          <div>
            <p className='text-label-md text-text-strong-950'>
              Rediseño del portal
            </p>
            <p className='text-paragraph-sm text-text-sub-600'>
              Equipo de producto
            </p>
          </div>
          <StatusBadge.Root status='completed' variant='light'>
            <StatusBadge.Icon as={RiCheckboxCircleFill} />
            Activo
          </StatusBadge.Root>
        </div>
        <AvatarGroup.Root size='32'>
          {['emma', 'james', 'sophia', 'wei'].map((name) => (
            <Avatar.Root key={name}>
              <Avatar.Image src={`/images/avatar/illustration/${name}.png`} />
            </Avatar.Root>
          ))}
          <AvatarGroup.Overflow>+6</AvatarGroup.Overflow>
        </AvatarGroup.Root>
        <div className='flex flex-col gap-2'>
          <div className='text-label-sm flex justify-between'>
            <span className='text-text-sub-600'>Progreso</span>
            <span className='text-text-strong-950'>72%</span>
          </div>
          <ProgressBar.Root value={72} />
        </div>
        <Divider.Root />
        <div className='flex flex-wrap gap-2'>
          <Badge.Root variant='light' color='blue'>
            Diseño
          </Badge.Root>
          <Badge.Root variant='light' color='purple'>
            Frontend
          </Badge.Root>
          <Badge.Root variant='light' color='orange'>
            Q4
          </Badge.Root>
        </div>
      </Card>

      <Card title='Tu IA instaló'>
        <Alert.Root variant='lighter' status='success' size='xsmall'>
          <Alert.Icon as={RiCheckboxCircleFill} />4 componentes de @alignui
          listos para usar.
        </Alert.Root>
        <div className='flex flex-wrap gap-2'>
          {installed.map((name) => (
            <Tag.Root key={name}>
              {name}
              <Tag.DismissButton
                onClick={() =>
                  setInstalled((current) => current.filter((n) => n !== name))
                }
              />
            </Tag.Root>
          ))}
        </div>
        <div className='flex items-center justify-between gap-3'>
          <Label.Root htmlFor={`${id}-notify`} className='text-paragraph-sm'>
            Avisarme de nuevos componentes
          </Label.Root>
          <Switch.Root id={`${id}-notify`} defaultChecked />
        </div>
        <div className='mt-auto flex items-center justify-between gap-3'>
          <span className='text-paragraph-sm text-text-sub-600 flex items-center gap-1.5'>
            Buscar <Kbd.Root>⌘K</Kbd.Root>
          </span>
          <Button.Root
            variant='neutral'
            mode='stroke'
            size='small'
            onClick={() =>
              notification({
                status: 'success',
                title: 'Componente agregado',
                description: 'npx shadcn@latest add @alignui/modal',
              })
            }
          >
            <Button.Icon as={RiNotification3Line} />
            Probar
          </Button.Root>
        </div>
      </Card>
    </div>
  );
}
