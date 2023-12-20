import type { FC, ReactNode } from 'react';
import Analytics from '@/components/analytics';
import Toaster from '@/components/toaster';
import '@/styles/globals.css';
import { createMetadata } from '@/lib/metadata';

export const metadata: Metadata = createMetadata({
  title: 'San Andreas Radio',
  description: 'All you had to do was follow the damn train, CJ.',
});

const Layout: FC<{
  children: ReactNode;
}> = ({ children }) => (
  <html lang="en">
    <body>
      {children}
      <Toaster />
      <Analytics />
    </body>
  </html>
);

export default Layout;
