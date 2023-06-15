import React from 'react';
import '../../app/styles/PlantItem.scss';
import Image from 'next/image';
import Rose from '../../public/images/flowers/Rose.png';

export default function PlantItem(props: any) {
  return (
    <div className="item-container">
      <Image src={Rose} width={180} height={160} alt="plant pic" />
      <h2>Rose</h2>
      <span>
        The enchanting rose, with its velvety petals and captivating fragrance,
        is the epitome of elegance and beauty. Adorned in shades of crimson,
        blush, and ivory, this timeless flower exudes romance and grace, making
        it a perfect choice for any occasion.',
      </span>
      <span className="price-style">$49.99</span>
    </div>
  );
}
