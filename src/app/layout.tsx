import './globals.css';

import { Geist, Geist_Mono } from 'next/font/google';

import type { Metadata } from 'next';
import { ThemeProvider } from '@/providers/theme-provider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Baraka Mulumia',
  description:
    'Building innovative digital solutions with modern technologies - a Full Stack Developer passionate about crafting modern, high-performance web applications, scalable backend APIs, and intuitive mobile applications ',
  openGraph: {
    images: [
      {
        url: '/images/baraka-mulumia.png',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider defaultTheme='dark'>{children}</ThemeProvider>
      </body>
    </html>
  );
}
