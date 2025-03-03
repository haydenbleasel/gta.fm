import { Analytics } from '@vercel/analytics/react';
import '@/styles/globals.css';
import type { FC, ReactNode } from 'react';
import { Toaster } from 'sonner';

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
