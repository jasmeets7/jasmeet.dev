import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Navigation from '@portfolio/shared/navigation';
import NavigationProvider from '@portfolio/context/navigation';

const rany = localFont({
  src: './fonts/Rany.woff2',
  variable: '--font-rany',
  weight: '100 900',
});

const ranyMedium = localFont({
  src: './fonts/Rany-Medium.woff2',
  variable: '--font-rany-medium',
  weight: '100 900',
});

const ranyBold = localFont({
  src: './fonts/Rany-Bold.woff2',
  variable: '--font-rany-bold',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Jasmeet Singh, Full Stack Software Developer',
  description:
    'Jasmeet is a Product Full Stack Software Developer living in Ottawa, Ontario. He helps startups reimagine, design, develop and deploy products and brands.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${rany.variable} ${ranyMedium.variable} ${ranyBold.variable} flex justify-center px-4 md:px-8 lg:px-12`}
      >
        <NavigationProvider>
          <Navigation />
        </NavigationProvider>
        {children}
      </body>
    </html>
  );
}
