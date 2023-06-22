'use client';

import '../../app/styles/CactusList.scss';
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

  return (
    <div className="list-position">
      {cactuses.map((cactus: Cactus) => (
        <CactusItem key={cactus.id} cactus={cactus} />
      ))}
    </div>
  );
}
