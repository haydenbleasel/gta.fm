'use client';

import { Background } from '@/components/background';
import { Station } from '@/components/station';
import { Logo } from '@/lib/logo';
import { stations } from '@/lib/stations';
import Image from 'next/image';
import { useState } from 'react';
import type { CSSProperties, FC } from 'react';
import XLogo from './x.svg';

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

const Home: FC = () => {
  const [currentStation, setCurrentStation] = useState(stations.length);

  return (
    <>
      <div className="fixed top-0 left-0 z-0 h-screen w-screen bg-gray-900">
        <Background />
        {stations.map((station, index) => (
          <Station
            key={station.name}
            name={station.name}
            stream={station.stream}
            active={index === currentStation}
          />
        ))}
      </div>
      <div className="fixed z-10 flex h-screen w-screen items-center justify-center">
        <div className="relative flex h-[30vw] w-[30vw] items-center justify-center rounded-full">
          <div className="-translate-x-1/2 -translate-y-1/2 fixed top-1/2 left-1/2 z-10 h-[12vw] w-[12vw]">
            <Logo />
          </div>
          {stations.map(({ image, name }, index) => (
            <button
              key={name}
              className={`absolute flex h-[6vw] w-[6vw] items-center justify-center rounded-full bg-white/10 backdrop-blur-xs transition-opacity hover:bg-white/20 ${
                index === currentStation ? 'opacity-100' : 'opacity-30'
              }`}
              style={position[index]}
              onClick={() => setCurrentStation(index)}
              onKeyDown={() => setCurrentStation(index)}
              type="button"
              tabIndex={0}
            >
              <Image
                src={image}
                alt={name}
                width={128}
                height={128}
                className="h-[65%] w-[65%] brightness-0 invert"
              />
            </button>
          ))}
          <a
            href="https://x.com/haydenbleasel"
            className="-translate-x-1/2 absolute bottom-0 left-1/2 flex h-[6vw] w-[6vw] translate-y-1/2 items-center justify-center rounded-full bg-white/10 backdrop-blur-xs transition-opacity hover:bg-white/20 hover:opacity-100"
          >
            <Image
              src={XLogo}
              alt="Follow me on Twitter"
              width={32}
              height={32}
              className="brightness-0 invert"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
