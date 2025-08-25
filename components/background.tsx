'use client';

import dynamic from 'next/dynamic';

const VIDEO_DURATION = 37_466;
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

export const Background = () => {
  const random = Math.floor(Math.random() * VIDEO_DURATION);
  const src = 'https://www.youtube.com/watch?v=ZvPem5XYBrU';

  console.log(random);

  return (
    <ReactPlayer
      className="pointer-events-none fixed top-0 left-0 aspect-video min-h-screen w-screen select-none opacity-60"
      config={{
        youtube: {
          disablekb: 1,
          start: random,
        },
      }}
      controls={false}
      height="100%"
      loop
      muted
      playing
      src={src}
      width="100%"
    />
  );
};
