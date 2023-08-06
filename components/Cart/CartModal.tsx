'use client';

import React from 'react';
import { RxCross2 } from 'react-icons/rx';
import { TiTick } from 'react-icons/ti';
import { StaticImageData } from 'next/image';
import Image from 'next/image';
import { HiOutlineTrash } from 'react-icons/hi';

interface Product {
  productImage?: StaticImageData;
  incrementHandler: () => void;
  decrementHandler: () => void;
  cartItems: number;
  totalPrice: number;
}

export default function CartModal(props: Product) {
  const {
    productImage,
    cartItems,
    totalPrice,
    incrementHandler,
    decrementHandler,
  } = props;

  return (
    <div className="fixed w-[340px] h-full bg-[antiquewhite] p-12 right-0 top-0">
      <div className="flex items-center justify-between font-bold">
        <span>Hi! This is your shopping cart</span>
        <RxCross2 className="cursor-pointer text-2xl" />
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[0.9rem] px-0 py-2">Your order ships free!</span>
        <TiTick className="text-[#00c189]  " />
      </div>
      <div className="max-w-[50vw] relative pb-2 after:content-[''] after:absolute after:h-2.5 after:rounded-[10px_10px_10px_10px] after:bottom-0 after:inset-x-0"></div>
      <div className="flex flex-row">
        {productImage && (
          <Image
            src={productImage}
            height={120}
            width={97}
            alt="Image of ordered Product"
          />
        )}

        <div className="flex flex-col justify-between w-full">
          <div className="flex w-full justify-between">
            <div className="flex flex-col">
              <span className="font-bold">Adansonii Aurea</span>
              <span> Cactus</span>
            </div>
            <HiOutlineTrash className="text-xl cursor-pointer" />
          </div>

          <div className="flex w-full justify-between">
            <div>
              <button onClick={decrementHandler}>-</button>
              <span>{cartItems}</span>
              <button onClick={incrementHandler}>+</button>
            </div>
            {totalPrice}
          </div>
        </div>
      </div>
    </div>
  );
}
