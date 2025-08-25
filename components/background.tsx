'use client';

import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });
const random = Math.floor(Math.random() * 37_466);

export const Background = () => (
  <ReactPlayer
    className="pointer-events-none fixed top-0 left-0 aspect-video min-h-screen w-screen select-none opacity-60"
    controls={false}
    height="100%"
    loop
    muted
    playing
    url={`https://www.youtube.com/watch?v=ZvPem5XYBrU?t=${random}`}
    width="100%"
  />
);
