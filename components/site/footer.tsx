import { ALIGNUI_DOCS_URL, GITHUB_URL } from '@/lib/site';

export function Footer() {
  return (
    <footer className='border-stroke-soft-200 border-t'>
      <div className='text-paragraph-sm text-text-sub-600 mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 sm:flex-row sm:items-center sm:justify-between'>
        <p>
          Componentes de{' '}
          <a
            href={ALIGNUI_DOCS_URL}
            target='_blank'
            rel='noreferrer'
            className='text-text-strong-950 underline-offset-4 hover:underline'
          >
            AlignUI
          </a>{' '}
          (licencia MIT), servidos como registry de shadcn y MCP.
        </p>
        <a
          href={GITHUB_URL}
          target='_blank'
          rel='noreferrer'
          className='text-text-strong-950 underline-offset-4 hover:underline'
        >
          Código fuente en GitHub
        </a>
      </div>
    </footer>
  );
}
