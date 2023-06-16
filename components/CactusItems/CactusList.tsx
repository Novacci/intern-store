import React from 'react';
import { StaticImageData } from 'next/image';
import BallCactus from '../../public/images/cactuses/Ball Cactus.png';
import FishHook from '../../public/images/cactuses/Fishhook Cactus.png';
import PricklyPearCactus from '../../public/images/cactuses/Prickly Pear Cactus.png';
import RedMexicanCactus from '../../public/images/cactuses/Red Mexican Cactus.png';
import SaguaroCactus from '../../public/images/cactuses/Saguaro Cactus.png';
import StarCactus from '../../public/images/cactuses/Star Cactus.png';
import CactusItem from './CactusItem';
import '../../app/styles/CactusList.scss';

export interface Cactus {
  id: number;
  title: string;
  image: StaticImageData;
  description: string;
  price: number;
}

const cactuses: Cactus[] = [
  {
    id: 0,
    title: 'Ball Cactus',
    image: BallCactus,
    description:
      'The Ball Cactus, with its charming spherical shape and unique texture, is a captivating succulent that brings a touch of natural artistry to any floral display. Its spiky green globes create a visually striking contrast, making it a stunning addition to both modern and rustic arrangements.',
    price: 34.99,
  },
  {
    id: 1,
    title: 'Fishhook Cactus',
    image: FishHook,
    description:
      'The Fishhook Cactus, with its intriguing curved spines and unique form, is a captivating succulent that adds a touch of desert allure to any floral collection. Its distinctive fishhook-like appearance, coupled with its compact size and vibrant green color, creates a visually striking focal point',
    price: 29.99,
  },
  {
    id: 2,
    title: 'Prickly Pear Cactus',
    image: PricklyPearCactus,
    description:
      'The Prickly Pear Cactus, with its distinctive paddle-shaped pads and vibrant blooms, is a captivating succulent that adds a touch of desert elegance to any floral display. Its fleshy green pads, adorned with clusters of sharp spines, create a visually striking contrast, making it a stunning centerpiece or accent plant.',
    price: 24.99,
  },
  {
    id: 3,
    title: 'Red Mexican Cactus',
    image: RedMexicanCactus,
    description:
      'The Red Mexican Cactus, with its striking red hues and fascinating texture, is a captivating succulent that adds a touch of exotic beauty to any floral display. Its vibrant crimson color, combined with its spiky and ribbed surface, creates a visually stunning focal point that demands attention and admiration.',
    price: 19.99,
  },
  {
    id: 4,
    title: 'Saguaro Cactus',
    image: SaguaroCactus,
    description:
      'The Saguaro Cactus, with its majestic stature and iconic silhouette, is a captivating succulent that embodies the spirit of the desert. Its towering arms and ribbed trunk create a visually striking presence that exudes a sense of grandeur and resilience. ',
    price: 13.99,
  },
  {
    id: 5,
    title: 'Star Cactus',
    image: StarCactus,
    description:
      'The Star Cactus, with its unique and mesmerizing appearance, is a captivating succulent that adds a touch of celestial beauty to any floral collection. Its star-shaped silhouette, adorned with spiky ridges and delicate white blooms,',
    price: 38.99,
  },
];

export default function CactusList() {
  return (
    <div className="list-position">
      {cactuses.map((cactus: Cactus) => (
        <CactusItem key={cactus.id} cactus={cactus} />
      ))}
    </div>
  );
}
