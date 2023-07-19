import React from 'react';
import '../../app/styles/PlantItem.scss';
import Image from 'next/image';
import { Plant } from './PlantList';

type PlantItemProps = {
  plant: Plant;
};
export default function PlantItem({ plant }: PlantItemProps) {
  const { image, title, description, price } = plant;
  return (
    <button className="item-container">
      <Image src={image} width={180} height={160} alt="plant pic" />
      <h2>{title}</h2>
      <span>{description}</span>
      <span className="price-style">{price}</span>
    </button>
  );
}
