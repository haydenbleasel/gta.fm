import Image from 'next/image';
import logo from './logo.svg';

export const Logo = () => (
  <Image
    alt="San Andreas Radio"
    className="h-full w-full"
    height={99}
    src={logo}
    width={150}
  />
);
