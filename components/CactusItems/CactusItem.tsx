import React from 'react';
import Image from 'next/image';
import { Cactus } from './CactusList';
import { useRouter } from 'next/navigation';
import { formatCurrency } from '@/app/utilities/formatCurrency';

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
    <button
      onClick={navigateToDetailPage}
      className="flex flex-col items-center gap-[0.6rem] text-center w-[260px] h-[440px] shadow-[0px_0px_24px_-11px_rgba(0,0,2,1)] cursor-pointer font-bold transition-transform duration-[0.3s] border-[none] hover:scale-110"
    >
      <Image
        src={image}
        width={180}
        height={160}
        alt="cactus pic"
        className="mt-2 rounded-2xl"
      />
      <h2 className="uppercase m-0">{title}</h2>
      <span className="text-[rgba(7,7,7,0.4)] font-bold text-[0.9rem]">
        {description}
      </span>
      <span className="text-[rgb(216,13,13)] font-bold text-[2rem]">
        {formatCurrency(price)}
      </span>
    </button>
  );
}
