import { NextSeo } from 'next-seo';
import type { FC } from 'react';

const Head: FC = () => (
  <>
    <NextSeo
      useAppDir
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
    <link rel="icon" href="/favicon.png" type="image/png" />
  </>
);

export default Head;
