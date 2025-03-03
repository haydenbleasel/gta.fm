'use client';

import dynamic from 'next/dynamic';
import toast from 'react-hot-toast';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

type StationProps = {
  name: string;
  stream: string;
  active: boolean;
};

export const Station = ({ name, stream, active }: StationProps) => (
  <ReactPlayer
    key={name}
    url={stream}
    muted={!active}
    loop
    playing
    controls={false}
    width="0"
    height="0"
    className="pointer-events-none select-none opacity-0"
    onError={() => toast.error('Error loading station')}
  />
);
