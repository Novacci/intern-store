'use client';
import React from 'react';
import '../../app/styles/CactusDetailPage.scss';
import { getDoc, doc } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { db } from '../../app/firebase';
import { StaticImageData } from 'next/image';
import Image from 'next/image';
import '@/app/styles/CactusDetailPage.scss';
import LoadingIndicator from '../LoadingIndicator';

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
  const [isLoading, setIsLoading] = useState(true);
  const [cardItems, setCardItems] = useState(0);

  const docRef = doc(db, 'cactuses', `${props.cactusId}`);

  useEffect(() => {
    const getCactus = async () => {
      try {
        const data = await getDoc(docRef);
        if (data.exists()) {
          setCactus({ ...(data.data() as Cactus) });
        } else {
          console.error('Cactus not found.');
        }
      } catch (error) {
        console.error('Error fetching cactus:', error);
      } finally {
        setIsLoading(false);
      }
    };
    getCactus();
  }, [props.cactusId]);

  const decrementHandler = () => {
    setCardItems((prev) => prev - 1);
  };
  const incrementHandler = () => {
    setCardItems((prev) => prev + 1);
  };

  return (
    <>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        cactus && (
          <div className="main-section">
            <Image width={380} height={480} src={cactus.image} alt="garden" />
            <div className="cactus-info">
              <div className="title-border">
                <span className="cactus-title">{cactus.title}</span>
              </div>
              <div className="title-border">
                <span className="size-style">Size</span>
                <span className="size-icon-style">S</span>
              </div>
              <div className="order-space">
                <span className="order-title-cactus">{cactus.title}</span>
                <span className="order-price-cactus">{cactus.price}</span>
              </div>
              <div className=" pot-style-whitespace">
                <span className="pot-style">in nursery pot</span>
              </div>
              <div className="order-features">
                <button onClick={decrementHandler} className="remove-cactus">
                  -
                </button>
                <span className="cactus-state">{cardItems}</span>
                <button onClick={incrementHandler} className="add-cactus">
                  +
                </button>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
}
