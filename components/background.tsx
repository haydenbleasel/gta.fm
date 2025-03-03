'use client';

import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });
const random = Math.floor(Math.random() * 37466);

export const Background = () => (
  <ReactPlayer
    url={`https://www.youtube.com/watch?v=ZvPem5XYBrU?t=${random}`}
    muted
    loop
    playing
    controls={false}
    width="100%"
    height="100%"
    className="pointer-events-none absolute aspect-video w-screen select-none opacity-60"
  />
);
