import '../styles/globals.css';
import type { AppProps } from 'next/app';
import type { FC } from 'react';
import { Toaster } from 'react-hot-toast';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import useAnalytics from '../hooks/useAnalytics';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  useAnalytics();

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
      <NextSeo
        title="San Andreas Radio"
        description="All you had to do was follow the damn train, CJ."
        canonical="https://sanandreasradio.com"
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'https://sanandreasradio.com',
          title: 'San Andreas Radio',
          description: 'All you had to do was follow the damn train, CJ.',
          images: [
            {
              url: 'https://sanandreasradio.com/cover.png',
              width: 1200,
              height: 630,
              alt: 'San Andreas Radio',
            },
          ],
        }}
        twitter={{
          handle: '@haydenbleasel',
          site: '@haydenbleasel',
          cardType: 'summary_large_image',
        }}
      />
      <Component {...pageProps} />
      <Toaster position="bottom-right" />
    </>
  );
};

export default MyApp;
