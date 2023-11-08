'use client';

import { Dispatch, SetStateAction } from 'react';
import { useEffect } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { TiTick } from 'react-icons/ti';
import Image from 'next/image';
import { HiOutlineTrash } from 'react-icons/hi';
import { formatCurrency } from '@/app/utilities/formatCurrency';
import { motion } from 'framer-motion';
import { AppDispatch, useAppSelector } from '@/app/redux/store/store';
import { useDispatch, useSelector } from 'react-redux';
import {
  incrementCartQuantity,
  decrementCartQuantity,
} from '@/app/utilities/cartQuantitySlice';
import { hideCart } from '@/app/utilities/showHideCartSlice';
import { Cactus } from '@/components/CactusItems/CactusDetailPage';

export interface Product {
  removeCactus: () => void;
  // cactusId: string;
  totalPrice: number;
  cactusesList: Cactus[];
}

export default function CartModal(props: Product) {
  const { totalPrice, removeCactus, cactusesList } = props;
  const dispatch = useDispatch<AppDispatch>();

  const decrementCartQuantityHandler = (id: string) => {
    const chosenCactus = cactusesList.find(
      (item: Cactus) => item.cactusId === id
    );

    if (chosenCactus) {
      chosenCactus.quantity--;
      dispatch(decrementCartQuantity());
    }
  };

  const incrementCartQuantityHandler = () => {
    dispatch(incrementCartQuantity());
  };
  return (
    <motion.div
      initial={{ x: 100 }}
      whileInView={{ x: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      className="fixed z-10 w-[400px] h-full bg-[#ffffff] px-9 py-0 pt-9 right-0 top-0"
    >
      <div className="flex items-center justify-between font-bold">
        <span>Hi! This is your shopping cart</span>
        <RxCross2
          onClick={() => {
            dispatch(hideCart());
          }}
          className="cursor-pointer text-2xl"
        />
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[0.9rem] px-0 py-2">Your order ships free!</span>
        <TiTick className="text-[#00c189]" />
      </div>
      <div>
        <div className="h-2 max-w-[50vw] bg-[#00c189] rounded-full"></div>
      </div>
      <div>
        {cactusesList.map((product: any) => (
          <ul key={product.cactusId}>
            <li className="flex flex-row mt-4">
              <Image
                src={product.image}
                height={80}
                width={97}
                alt="Image of ordered Product"
                className="h-[120px] mr-2"
              />
              <div className="flex flex-col justify-between w-full">
                <div className="flex w-full justify-between">
                  <div className="flex flex-col">
                    <span className="font-bold">{product.title}</span>
                    {product.type && (
                      <span>
                        {product.type.charAt(0).toUpperCase() +
                          product.type.slice(1)}
                      </span>
                    )}
                  </div>
                  <HiOutlineTrash
                    onClick={removeCactus}
                    className="text-xl cursor-pointer"
                  />
                </div>
                <div className="flex w-full items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        decrementCartQuantityHandler(product.cactusId)
                      }
                      className="bg-[#f3f4f3] text-base w-8 h-8 text-center cursor-pointer transition-[0.5s] duration-[ease] rounded-[50%] border-[none] hover:text-[white] hover:bg-[#00c189]"
                    >
                      -
                    </button>
                    <span className="font-bold">
                      {product && product.quantity}
                    </span>
                    <button
                      onClick={incrementCartQuantityHandler}
                      className="bg-[#f3f4f3] text-base flex justify-center items-center w-8 h-8 cursor-pointer transition-[0.5s] duration-[ease] rounded-[50%] border-[none] hover:text-[white] hover:bg-[#00c189]"
                    >
                      +
                    </button>
                  </div>
                  {product.price && (
                    <div className="font-bold text-[#00c189]">
                      {formatCurrency(product.price)}
                    </div>
                  )}
                </div>
              </div>
            </li>
          </ul>
        ))}
      </div>
      <div className="flex">
        <span className="w-full text-sm pb-1 border-b-[#9e9e9e] border-b-[100%] border-b border-solid">
          The items in your shopping cart are not reserved!
        </span>
      </div>
      <div className="flex py-3 justify-between font-bold text-sm  border-b-[#9e9e9e] border-b-[100%] border-b border-solid">
        <span>
          Total
          <span className="font-bold text-[#7E8784]"> (including VAT)</span>
        </span>
        <span className="font-bold text-[#00c189]">
          {formatCurrency(totalPrice)}
        </span>
      </div>
      <div className="flex flex-col h-20">
        <button className="rounded-full bg-[#00c189] my-2 text-white py-2 px-6 hover:bg-opacity-70 transition-all duration-300">
          I'm ready to order
        </button>
        <button
          onClick={() => {
            dispatch(hideCart());
          }}
          className="rounded-full border-solid border-black mb-6 border py-2 px-6 hover:text-white hover:bg-black transition-all duration-300"
        >
          Continue shopping
        </button>
      </div>
    </motion.div>
  );
}
