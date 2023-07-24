import React from 'react';
import Image from 'next/image';
import { Cactus } from './CactusList';
import '../../app/styles/CactusItem.scss';
import { useRouter } from 'next/navigation';

type CactusItemProps = {
  cactus: Cactus;
};

export default function CactusItem({ cactus }: CactusItemProps) {
  const router = useRouter();
  const { image, title, description, price, id } = cactus;

  const navigateToDetailPage = () => {
    router.push(`/cactuses/${id}`);
  };

  return (
    <button onClick={navigateToDetailPage} className="item-container">
      <Image src={image} width={180} height={160} alt="cactus pic" />
      <h2>{title}</h2>
      <span>{description}</span>
      <span className="price-style">{price}</span>
    </button>
  );
}
