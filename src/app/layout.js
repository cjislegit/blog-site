import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/header';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Footer from '@/components/footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Next Blog',
  description: 'A simple blog built with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='h-full antialiased'>
      <body className={`${geistSans.variable} ${geistMono.variable} h-full`}>
        <div className='min-h-dvh bg-zinc-200 text-zinc-950'>
          <div className='mx-auto flex min-h-dvh w-full max-w-[1100px] flex-col border-x border-zinc-300 bg-white'>
            <Header />
            <main className='flex-1 px-4 py-8 sm:px-6 sm:py-10'>
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
