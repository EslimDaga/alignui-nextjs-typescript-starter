import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import { ThemeProvider } from 'next-themes';

import './globals.css';

import { NotificationProvider } from '@/components/ui/notification-provider';
import { Toaster } from '@/components/ui/toast';
import { Provider as TooltipProvider } from '@/components/ui/tooltip';
import { Footer } from '@/components/site/footer';
import { Header } from '@/components/site/header';
import { cn } from '@/lib/cn';
import { SITE_URL } from '@/lib/site';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const geistMono = localFont({
  src: './fonts/GeistMono[wght].woff2',
  variable: '--font-geist-mono',
  weight: '100 900',
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'AlignUI MCP · Componentes oficiales de AlignUI para tu IA',
    template: '%s · AlignUI MCP',
  },
  description:
    'Los 54 componentes y 240 ejemplos oficiales de AlignUI como registry de shadcn y servidor MCP para Claude, Cursor y VS Code.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='es'
      suppressHydrationWarning
      className={cn(inter.variable, geistMono.variable, 'antialiased')}
    >
      <body className='bg-bg-white-0 text-text-strong-950'>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <div className='flex min-h-screen flex-col'>
              <Header />
              <main className='flex flex-1 flex-col'>{children}</main>
              <Footer />
            </div>
          </TooltipProvider>
        </ThemeProvider>
        <NotificationProvider />
        <Toaster />
      </body>
    </html>
  );
}
