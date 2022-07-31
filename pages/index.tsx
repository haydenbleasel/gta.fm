import type { NextPage } from 'next';
import Image from 'next/future/image';
import Link from 'next/link';
import type { CSSProperties } from 'react';
import { useState } from 'react';
import ReactPlayer from 'react-player';
import toast from 'react-hot-toast';

const stations = [
  {
    image: '/radio-ls.png',
    name: 'Radio LS',
    stream: 'https://www.youtube.com/watch?v=40FfiNThUOY',
  },
  {
    image: '/radio-x.png',
    name: 'Radio X',
    stream: 'https://www.youtube.com/watch?v=rqMLTCBSsco',
  },
  {
    image: '/csr.png',
    name: 'SR 103:9',
    stream: 'https://www.youtube.com/watch?v=nPurvKR4jZg',
  },
  {
    image: '/kjah-west.png',
    name: 'KJAH West',
    stream: 'https://www.youtube.com/watch?v=KQCFvgmOff8',
  },
  {
    image: '/master-sounds.png',
    name: 'Master Sound',
    stream: 'https://www.youtube.com/watch?v=AsXBhthDKbA',
  },
  {
    image: '/wctr.png',
    name: 'CTR',
    stream: 'https://www.youtube.com/watch?v=ZgeHsKbGJbU',
  },
  {
    image: '/playback-fm.svg',
    name: 'Playback FM',
    stream: 'https://www.youtube.com/watch?v=UobmbMPNc6E',
  },
  {
    image: '/k-rose.svg',
    name: 'K Rose',
    stream: 'https://www.youtube.com/watch?v=MaP6nE7iPQg',
  },
  {
    image: '/k-dst.png',
    name: 'K DST',
    stream: 'https://www.youtube.com/watch?v=GjUrSjjUbVk',
  },
  {
    image: '/bounce-fm.png',
    name: 'Bounce FM',
    stream: 'https://www.youtube.com/watch?v=iUkf2vTXKJo',
  },
  {
    image: '/sfur.png',
    name: 'SFUR',
    stream: 'https://www.youtube.com/watch?v=9cA23sx-o9o',
  },
];

const random = Math.floor(Math.random() * 37466);

const position: Record<number, CSSProperties> = {
  0: {
    top: 0,
    transform: 'translateY(-50%)',
  },
  1: {
    top: '8%',
    right: '24%',
    transform: 'translateY(-50%) translateX(50%)',
  },
  2: {
    top: '25%',
    right: '7%',
    transform: 'translateY(-50%) translateX(50%)',
  },
  3: {
    top: '50%',
    right: '0',
    transform: 'translateY(-50%) translateX(50%)',
  },
  4: {
    top: '75%',
    right: '7%',
    transform: 'translateY(-50%) translateX(50%)',
  },
  5: {
    top: '92%',
    right: '24%',
    transform: 'translateY(-50%) translateX(50%)',
  },
  6: {
    top: '92%',
    left: '24%',
    transform: 'translateY(-50%) translateX(-50%)',
  },
  7: {
    top: '75%',
    left: '7%',
    transform: 'translateY(-50%) translateX(-50%)',
  },
  8: {
    top: '50%',
    left: '0',
    transform: 'translateY(-50%) translateX(-50%)',
  },
  9: {
    top: '25%',
    left: '7%',
    transform: 'translateY(-50%) translateX(-50%)',
  },
  10: {
    top: '8%',
    left: '24%',
    transform: 'translateY(-50%) translateX(-50%)',
  },
};

const Home: NextPage = () => {
  const [currentStation, setCurrentStation] = useState(stations.length);

  const handleError = (error: unknown) => {
    const message =
      error instanceof Error ? error.message : `${error as string}`;

    toast.error(message, { duration: Infinity });
  };

  return (
    <>
      <div className="fixed left-0 top-0 z-0 h-screen w-screen bg-gray-900">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=ZvPem5XYBrU?t=${random}`}
          muted
          loop
          playing
          controls={false}
          width="100%"
          height="100%"
          className="pointer-events-none absolute aspect-video w-screen select-none opacity-60"
          onError={handleError}
        />
        {stations.map((station, index) => (
          <ReactPlayer
            key={station.name}
            url={station.stream}
            muted={index !== currentStation}
            loop
            playing
            controls={false}
            width="0"
            height="0"
            className="pointer-events-none select-none opacity-0"
            onError={handleError}
          />
        ))}
      </div>
      <div className="fixed z-10 flex h-screen w-screen items-center justify-center">
        <div className="relative flex h-[30vw] w-[30vw] items-center justify-center rounded-full">
          <div className="fixed top-1/2 left-1/2 z-10 h-[12vw] w-[12vw] -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/logo.svg"
              alt="San Andreas Radio"
              width={150}
              height={99}
              className="h-full w-full"
            />
          </div>
          {stations.map(({ image, name }, index) => (
            <div
              key={name}
              className={`contrast-2 absolute flex h-[6vw] w-[6vw] items-center justify-center rounded-full bg-gray-900/20 backdrop-blur-sm transition-opacity hover:opacity-100 ${
                index === currentStation ? 'opacity-100' : 'opacity-30'
              }`}
              style={position[index]}
              onClick={() => setCurrentStation(index)}
              onKeyDown={() => setCurrentStation(index)}
              role="button"
              tabIndex={0}
            >
              <Image
                src={image}
                alt={name}
                width={128}
                height={128}
                className={`
                  h-[65%] w-[65%]
                  ${image.endsWith('.svg') ? '' : 'brightness-0 invert'}
                `}
              />
            </div>
          ))}
          <Link
            href="https://twitter.com/haydenbleasel"
            className="absolute bottom-0 left-1/2 flex h-[6vw] w-[6vw] translate-y-1/2 -translate-x-1/2 items-center justify-center rounded-full bg-gray-900/20 opacity-30 backdrop-blur-sm transition-opacity hover:opacity-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/twitter.svg"
              alt="Follow me on Twitter"
              width={32}
              height={32}
              className="contrast-2 brightness-0 invert"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
