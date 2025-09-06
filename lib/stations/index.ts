import type { StaticImageData } from "next/image";
import BounceFM from "./logos/bounce-fm.png";
import CSR from "./logos/csr.png";
import KDst from "./logos/k-dst.png";
import KRose from "./logos/k-rose.svg";
import KJAHWest from "./logos/kjah-west.png";
import MasterSounds from "./logos/master-sounds.png";
import PlaybackFM from "./logos/playback-fm.svg";
import RadioLS from "./logos/radio-ls.png";
import RadioX from "./logos/radio-x.png";
import SFUR from "./logos/sfur.png";
import WCTR from "./logos/wctr.png";

export const stations: {
  name: string;
  image: StaticImageData;
  url: string;
}[] = [
  {
    image: RadioLS,
    name: "Radio Los Santos",
    url: "https://fa9yqyicinhsog9q.public.blob.vercel-storage.com/Radio%20Los%20Santos.flac",
  },
  {
    image: RadioX,
    name: "Radio X",
    url: "https://fa9yqyicinhsog9q.public.blob.vercel-storage.com/Radio%20X.flac",
  },
  {
    image: CSR,
    name: "CSR 103:9",
    url: "https://fa9yqyicinhsog9q.public.blob.vercel-storage.com/CSR%20103.9.flac",
  },
  {
    image: KJAHWest,
    name: "K-JAH West",
    url: "https://fa9yqyicinhsog9q.public.blob.vercel-storage.com/K-JAH%20West.flac",
  },
  {
    image: MasterSounds,
    name: "Master Sounds 98.3",
    url: "https://fa9yqyicinhsog9q.public.blob.vercel-storage.com/Master%20Sounds%2098.3.flac",
  },
  {
    image: WCTR,
    name: "WCTR",
    url: "https://fa9yqyicinhsog9q.public.blob.vercel-storage.com/West%20Coast%20Talk%20Radio.flac",
  },
  {
    image: PlaybackFM,
    name: "Playback FM",
    url: "https://fa9yqyicinhsog9q.public.blob.vercel-storage.com/Playback%20FM.flac",
  },
  {
    image: KRose,
    name: "K-Rose",
    url: "https://fa9yqyicinhsog9q.public.blob.vercel-storage.com/K-Rose.flac",
  },
  {
    image: KDst,
    name: "K-DST",
    url: "https://fa9yqyicinhsog9q.public.blob.vercel-storage.com/K-DST.flac",
  },
  {
    image: BounceFM,
    name: "Bounce FM",
    url: "https://fa9yqyicinhsog9q.public.blob.vercel-storage.com/Bounce%20FM.flac",
  },
  {
    image: SFUR,
    name: "SF-UR",
    url: "https://fa9yqyicinhsog9q.public.blob.vercel-storage.com/SF-UR.flac",
  },
];
