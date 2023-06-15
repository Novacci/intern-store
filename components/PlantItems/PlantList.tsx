'use client';

import React from 'react';
import PlantItem from './PlantItem';
import { useState } from 'react';
import AfricanViolet from '../../public/images/flowers/African Violet.png';
import Begonia from '../../public/images/flowers/Begonia.png';
import Daisy from '../../public/images/flowers/Gerbera Daisy.png';
import Lily from '../../public/images/flowers/Lily.png';
import Orchid from '../../public/images/flowers/Orchid.png';
import Rose from '../../public/images/flowers/Rose.png';
import Tulip from '../../public/images/flowers/Tulip.png';

export default function PlantList() {
  const [plants, setPlants] = useState<any>([
    {
      id: 0,
      title: 'Rose',
      image: Rose,
      description:
        'The enchanting rose, with its velvety petals and captivating fragrance, is the epitome of elegance and beauty. Adorned in shades of crimson, blush, and ivory, this timeless flower exudes romance and grace, making it a perfect choice for any occasion.',
      price: 34.99,
    },
    {
      id: 1,
      title: 'Begonia',
      image: Begonia,
      description:
        'The begonia, with its vibrant and eye-catching blooms, is a flower that commands attention and adds a splash of color to any floral display. From the rich hues of red and pink to the delicate shades of white and orange, begonias offer a diverse range of captivating colors.',
      price: 29.99,
    },
    {
      id: 2,
      title: 'Daisy',
      image: Daisy,
      description:
        'The daisy, with its cheerful simplicity and whimsical charm, is a flower that radiates pure joy and innocence. Its sunny yellow center is surrounded by delicate white petals, creating a timeless and endearing beauty. ',
      price: 24.99,
    },
    {
      id: 3,
      title: 'African Violet',
      image: AfricanViolet,
      description:
        'The African violet, with its delicate yet vibrant blooms, is a flower that exudes charm and beauty. Known for its velvety petals and captivating colors, including shades of purple, pink, and white, the African violet adds a touch of elegance to any floral arrangement.',
      price: 19.99,
    },
    {
      id: 4,
      title: 'Orchid',
      image: Orchid,
      description:
        'The orchid, with its delicate allure and captivating elegance, is a flower that embodies sophistication and grace. Known for its intricate blooms and intricate patterns, each orchid is a unique work of art that adds a touch of exotic beauty to any floral arrangement.',
      price: 39.99,
    },
    {
      id: 5,
      title: 'Tulip',
      image: Tulip,
      description:
        'The tulip, with its graceful silhouette and vibrant petals, is a flower that radiates elegance and cheerfulness. Available in an array of hues, from fiery reds to soft pinks and sunny yellows, these blossoms bring a burst of color and joy to any floral display in your flower shop.',
      price: 14.99,
    },
    {
      id: 6,
      title: 'Lily',
      image: Lily,
      description:
        'The lily, with its majestic presence and enchanting fragrance, is a flower that embodies purity and elegance. Its graceful petals unfurl like delicate works of art, showcasing a variety of colors, including pristine whites, soft pinks, and vibrant yellows.',
      price: 19.99,
    },
  ]);
  return (
    <div>
      <PlantItem />
    </div>
  );
}
