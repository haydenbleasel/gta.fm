import { Analytics } from '@vercel/analytics/react';
import '@/styles/globals.css';
import { createMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { FC, ReactNode } from 'react';
import { Toaster } from 'sonner';

export const metadata: Metadata = createMetadata({
  title: 'San Andreas Radio',
  description: 'All you had to do was follow the damn train, CJ.',
});

type LayoutProps = {
  readonly children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => (
  <html lang="en">
    <body>
      {children}
      <Toaster position="bottom-right" />
      <Analytics />
    </body>
  </html>
);

export default Layout;
