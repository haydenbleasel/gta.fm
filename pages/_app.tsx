import '../styles/globals.css';
import type { AppProps } from 'next/app';
import type { FC } from 'react';
import { Toaster } from 'react-hot-toast';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />
    <Toaster position="bottom-right" />
  </>
);

export default MyApp;
