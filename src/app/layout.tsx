import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { Inter, Lexend } from 'next/font/google';

const fontBody = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

const fontHeadline = Lexend({
  subsets: ['latin'],
  variable: '--font-headline',
});


export const metadata: Metadata = {
  title: 'Plano FICA-15',
  description: 'A step-by-step guide to a calm bath for your dog.',
  manifest: '/manifest.json',
  icons: {
    apple: "https://i.imgur.com/WIskf54.png",
  },
};

export const viewport: Viewport = {
  themeColor: '#2A7FDF',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" href="https://i.imgur.com/WIskf54.png"></link>
      </head>
      <body className={cn(
        'min-h-screen bg-background font-body antialiased',
        fontBody.variable,
        fontHeadline.variable
        )}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
