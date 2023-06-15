import React from 'react';
import '../../app/styles/PlantItem.scss';
import Image from 'next/image';
import Rose from '../../public/images/flowers/Rose.png';
import { PlantType } from './PlantList';

export default function PlantItem({
  id,
  title,
  image,
  description,
  price,
}: PlantType) {
  return (
    <div className="item-container">
      <Image src={image} width={180} height={160} alt="plant pic" />
      <h2>{title}</h2>
      <span>{description}</span>
      <span className="price-style">{price}</span>
    </div>
  );
}
