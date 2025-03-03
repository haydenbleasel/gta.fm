import type { StaticImageData } from 'next/image';
import BounceFM from './logos/bounce-fm.png';
import CSR from './logos/csr.png';
import KDst from './logos/k-dst.png';
import KRose from './logos/k-rose.svg';
import KJAHWest from './logos/kjah-west.png';
import MasterSounds from './logos/master-sounds.png';
import PlaybackFM from './logos/playback-fm.svg';
import RadioLS from './logos/radio-ls.png';
import RadioX from './logos/radio-x.png';
import SFUR from './logos/sfur.png';
import WCTR from './logos/wctr.png';

export const stations: {
  name: string;
  image: StaticImageData;
  stream: string;
  trackingId: string;
}[] = [
  {
    image: RadioLS,
    name: 'Radio LS',
    stream: 'https://www.youtube.com/watch?v=40FfiNThUOY',
    trackingId: 'FLLNVYQG',
  },
  {
    image: RadioX,
    name: 'Radio X',
    stream: 'https://www.youtube.com/watch?v=rqMLTCBSsco',
    trackingId: 'TEGOIR2C',
  },
  {
    image: CSR,
    name: 'SR 103:9',
    stream: 'https://www.youtube.com/watch?v=nPurvKR4jZg',
    trackingId: 'DG4FUNYF',
  },
  {
    image: KJAHWest,
    name: 'KJAH West',
    stream: 'https://www.youtube.com/watch?v=KQCFvgmOff8',
    trackingId: 'EQ4HOBD9',
  },
  {
    image: MasterSounds,
    name: 'Master Sound',
    stream: 'https://www.youtube.com/watch?v=AsXBhthDKbA',
    trackingId: 'KA4MP7HJ',
  },
  {
    image: WCTR,
    name: 'CTR',
    stream: 'https://www.youtube.com/watch?v=ZgeHsKbGJbU',
    trackingId: 'NMBUPDUU',
  },
  {
    image: PlaybackFM,
    name: 'Playback FM',
    stream: 'https://www.youtube.com/watch?v=UobmbMPNc6E',
    trackingId: 'HCIWCG0O',
  },
  {
    image: KRose,
    name: 'K Rose',
    stream: 'https://www.youtube.com/watch?v=MaP6nE7iPQg',
    trackingId: 'GLS3HLXK',
  },
  {
    image: KDst,
    name: 'K DST',
    stream: 'https://www.youtube.com/watch?v=GjUrSjjUbVk',
    trackingId: 'NEN225EL',
  },
  {
    image: BounceFM,
    name: 'Bounce FM',
    stream: 'https://www.youtube.com/watch?v=iUkf2vTXKJo',
    trackingId: 'C79SPRNA',
  },
  {
    image: SFUR,
    name: 'SFUR',
    stream: 'https://www.youtube.com/watch?v=9cA23sx-o9o',
    trackingId: 'MVNL3TLO',
  },
];
