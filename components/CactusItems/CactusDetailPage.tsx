'use client';
import React from 'react';
import '../../app/styles/CactusDetailPage.scss';
import { getDoc, doc } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { db } from '../../app/firebase';
import { StaticImageData } from 'next/image';
interface CactusDetailPageParams {
  cactusId: string;
}
export interface Cactus {
  cactusId: string;
  title: string;
  image: StaticImageData;
  description: string;
  price: number;
}
export default function CactusDetailPage(props: CactusDetailPageParams) {
  const [cactus, setCactus] = useState<Cactus | undefined>(undefined);
  const docRef = doc(db, 'cactuses', `${props.cactusId}`);

  useEffect(() => {
    const getCactus = async () => {
      const data = await getDoc(docRef);

      console.log(data);
      setCactus({ ...(data.data() as Cactus) });
    };
    getCactus();
  }, []);

  return (
    <div>
      <h1>siema</h1>
      <h1>{props.cactusId}</h1>
      <h1>{cactus && cactus.title}</h1>
    </div>
  );
}
