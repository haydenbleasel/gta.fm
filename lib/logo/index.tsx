import Image from 'next/image';
import logo from './logo.svg';

export const Logo = () => (
  <Image
    src={logo}
    alt="San Andreas Radio"
    width={150}
    height={99}
    className="h-full w-full"
  />
);
