'use client';

import { track } from '@vercel/analytics';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { type CSSProperties, Fragment, useState } from 'react';
import { toast } from 'sonner';
import { stations } from '@/lib/stations';
import { cn } from '@/lib/utils';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });
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

export const Stations = () => {
  const [currentStation, setCurrentStation] = useState(stations.length);

  const handleChangeStation = (index: number, name: string) => {
    setCurrentStation(index);
    track(name);
  };

  return stations.map(({ image, name, stream }, index) => (
    <Fragment key={name}>
      <button
        className="absolute flex h-[6vw] w-[6vw] cursor-pointer items-center justify-center rounded-full bg-white/10 backdrop-blur-xs transition-all hover:bg-white/20"
        onClick={() => handleChangeStation(index, name)}
        onKeyDown={() => handleChangeStation(index, name)}
        style={position[index]}
        tabIndex={0}
        type="button"
      >
        <Image
          alt={name}
          className={cn(
            'h-[65%] w-[65%] brightness-0 invert transition-all',
            currentStation === index ? 'opacity-100' : 'opacity-20'
          )}
          height={128}
          src={image}
          width={128}
        />
      </button>
      <ReactPlayer
        className="pointer-events-none select-none opacity-0"
        controls={false}
        height="0"
        loop
        muted={currentStation !== index}
        onError={(error) => {
          console.error(error);
          toast.error(`Error loading station ${name}`);
        }}
        playing
        src={stream}
        width="0"
      />
    </Fragment>
  ));
};
