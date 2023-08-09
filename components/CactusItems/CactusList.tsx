'use client';

import { StaticImageData } from 'next/image';
import CactusItem from './CactusItem';
import { useState, useEffect } from 'react';
import { db } from '../../app/firebase';
import { collection, getDocs } from 'firebase/firestore';

export interface Cactus {
  id: string;
  title: string;
  image: StaticImageData;
  description: string;
  price: number;
}

export default function CactusList() {
  const [cactuses, setCactuses] = useState<Cactus[]>([]);
  const cactusCollection = collection(db, 'cactuses');

  useEffect(() => {
    const getCactus = async () => {
      const data = await getDocs(cactusCollection);

      setCactuses(data.docs.map((doc: any) => ({ ...doc.data(), id: doc.id })));
    };
    getCactus();
  }, []);
  console.log(cactuses);
  return (
    <div className="flex gap-12 flex-wrap relative justify-center top-12">
      {cactuses.map((cactus: Cactus) => (
        <CactusItem key={cactus.id} cactus={cactus} />
      ))}
    </div>
  );
}
