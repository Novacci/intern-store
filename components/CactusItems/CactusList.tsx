'use client';

import { StaticImageData } from 'next/image';
import CactusItem from './CactusItem';
import { useState, useEffect, ChangeEvent } from 'react';
import { db } from '../../app/firebase';
import { collection, getDocs } from 'firebase/firestore';

export interface Cactus {
  id: string;
  title: string;
  image?: StaticImageData;
  description: string;
  price: number;
}

export default function CactusList() {
  const [cactuses, setCactuses] = useState<Cactus[]>([]);
  const [query, setQuery] = useState<string>('');
  const [sortOrder, setSortOrder] = useState('asc');

  const cactusCollection = collection(db, 'cactuses');

  useEffect(() => {
    const getCactus = async () => {
      const data = await getDocs(cactusCollection);

      setCactuses(data.docs.map((doc: any) => ({ ...doc.data(), id: doc.id })));
    };
    getCactus();
  }, []);

  const queryInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSortClick = () => {
    const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newSortOrder);
  };

  const sortingCactuses = (cactusA: Cactus, cactusB: Cactus) => {
    return sortOrder === 'asc'
      ? cactusA.price - cactusB.price
      : cactusB.price - cactusA.price;
  };

  const filteringCactuses = (cactus: Cactus) => {
    return cactus.title.toLowerCase().includes(query);
  };

  return (
    <>
      <div className="text-lg relative flex justify-between top-6 bg-transparent text-gray-800">
        <button
          className="middle none center rounded-lg bg-green-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          onClick={handleSortClick}
        >
          Sort By Price
        </button>
        <div className="flex max-w-[10rem] items-center border-b  border-teal-500 py-2">
          <input
            className="bg-transparent border-none mr-3 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search"
            onChange={queryInputHandler}
          />
          <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
            <svg
              className="h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              id="Capa_1"
              viewBox="0 0 56.966 56.966"
            >
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex gap-12 flex-wrap relative justify-center top-12">
        {cactuses
          .filter(filteringCactuses)
          .sort(sortingCactuses)
          .map((cactus: Cactus) => (
            <CactusItem key={cactus.id} cactus={cactus} />
          ))}
      </div>
    </>
  );
}
