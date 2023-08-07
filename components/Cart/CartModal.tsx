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
  productPrice?: number;
}

export default function CartModal(props: Product) {
  const {
    productImage,
    cartItems,
    totalPrice,
    incrementHandler,
    decrementHandler,
    productPrice,
  } = props;

  return (
    <div className="fixed z-10 w-[400px] h-full bg-[#ffffff] px-9 py-0 pt-9 right-0 top-0">
      <div className="flex items-center justify-between font-bold">
        <span>Hi! This is your shopping cart</span>
        <RxCross2 className="cursor-pointer text-2xl" />
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[0.9rem] px-0 py-2">Your order ships free!</span>
        <TiTick className="text-[#00c189]" />
      </div>
      <div>
        <div className="h-2 max-w-[50vw] bg-[#00c189] rounded-full"></div>
      </div>
      <div className="flex flex-row mt-4">
        {productImage && (
          <Image
            src={productImage}
            height={80}
            width={97}
            alt="Image of ordered Product"
            className="h-[120px] mr-2"
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
            <div className="flex items-center gap-2">
              <button
                onClick={decrementHandler}
                className="bg-[#f3f4f3] text-base w-8 h-8 text-center cursor-pointer transition-[0.5s] duration-[ease] rounded-[50%] border-[none] hover:text-[white] hover:bg-[#00c189]"
              >
                -
              </button>
              <span className="font-bold">{cartItems}</span>
              <button
                onClick={incrementHandler}
                className="bg-[#f3f4f3] text-base flex justify-center items-center w-8 h-8 cursor-pointer transition-[0.5s] duration-[ease] rounded-[50%] border-[none] hover:text-[white] hover:bg-[#00c189]"
              >
                +
              </button>
            </div>
            {productPrice && (
              <div className="font-bold text-[#00c189]">{productPrice}</div>
            )}
          </div>
        </div>
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
        <span className="font-bold text-[#00c189]">{totalPrice}</span>
      </div>
      <div className="flex flex-col h-20">
        <button className="rounded-full bg-[#00c189] my-2 text-white py-2 px-6 hover:bg-opacity-70 transition-all duration-300">
          I'm ready to order
        </button>
        <button className="rounded-full border-solid border-black mb-6 border py-2 px-6 hover:text-white hover:bg-black transition-all duration-300">
          Continue shopping
        </button>
      </div>
    </div>
  );
}
