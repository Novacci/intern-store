'use client';

import '../../app/styles/PlantList.scss';
import PlantItem from './PlantItem';
import { StaticImageData } from 'next/image';
import { useState, useEffect } from 'react';
import { db } from '../../app/firebase';
import { collection, getDocs } from 'firebase/firestore';

export interface Plant {
  id: string;
  title: string;
  image: StaticImageData;
  description: string;
  price: number;
}

export default function PlantList() {
  const [plants, setPlants] = useState<Plant[]>([]);
  const plantCollection = collection(db, 'plants');

  useEffect(() => {
    const getPlants = async () => {
      const data = await getDocs(plantCollection);

      setPlants(data.docs.map((doc: any) => ({ ...doc.data(), id: doc.id })));
    };
    getPlants();
  }, []);
  return (
    <div className="list-position">
      {plants.map((plant: Plant) => (
        <PlantItem key={plant.id} plant={plant} />
      ))}
    </div>
  );
}
