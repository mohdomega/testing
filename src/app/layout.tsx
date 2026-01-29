import type { Metadata } from 'next';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { generalSans } from '@/styles/fonts';

import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'IDRMS',
  description: 'Transform your business with Salesforce',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${generalSans.variable} font-sans antialiased min-h-screen flex flex-col bg-white overflow-x-hidden`}
      >
        <div className="flex-1">
          <Header className="fixed top-0 left-0 z-[999] w-full mt-6" />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
