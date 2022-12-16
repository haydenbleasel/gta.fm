import type { FC, ReactNode } from 'react';
import Analytics from '@/components/analytics';
import Toaster from '@/components/toaster';
import '@/styles/globals.css';

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
