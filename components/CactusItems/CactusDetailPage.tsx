'use client';
import React from 'react';
import '../../app/styles/CactusDetailPage.scss';
import { getDoc, doc } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { db } from '../../app/firebase';
import { StaticImageData } from 'next/image';
import Image from 'next/image';
import '@/app/styles/CactusDetailPage.scss';

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
    <>
      {cactus && (
        <div className="main-section">
          <Image width={380} height={480} src={cactus.image} alt="garden" />
          <div className="cactus-info">
            <div className="title-border">
              <span className="cactus-title">{cactus.title}</span>
            </div>
            <span className="size-style">Size</span>
            <span className="size-icon-style">S</span>
          </div>
        </div>
      )}
    </>
  );
}
