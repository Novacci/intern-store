'use client';

import { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { TiTick } from 'react-icons/ti';
import Image from 'next/image';
import { HiOutlineTrash } from 'react-icons/hi';
import { formatCurrency } from '@/app/utilities/formatCurrency';
import { motion } from 'framer-motion';
import { AppDispatch } from '@/app/redux/store/store';
import { useDispatch } from 'react-redux';
import { hideCart } from '@/app/utilities/showHideCartSlice';
import { Cactus } from '@/components/CactusItems/CactusDetailPage';
import { ChangeEvent } from 'react';

export interface Product {
  removeCactus: (id: string) => void;
  cactusId: string;
  totalPrice: number;
  cactusesList: Cactus[];
  setCactusesList: Dispatch<SetStateAction<any[]>>;
  setTotalPrice: Dispatch<SetStateAction<number>>;
}

export default function CartModal(props: Product) {
  const {
    totalPrice,
    removeCactus,
    cactusesList,
    setCactusesList,
    setTotalPrice,
  } = props;
  const dispatch = useDispatch<AppDispatch>();
  const [discountCode, setDiscoutCode] = useState<string>('');
  const [isDiscounted, setIsDiscounted] = useState<boolean>(false);
  const [isNotDiscounted, setIsNotDiscounted] = useState<boolean>(false);
  const [discountAlreadyUsed, setIsDiscountAlreadyUsed] = useState(false);

  const decrementCartQuantityHandler = (id: string) => {
    setCactusesList((prev) => {
      return prev.map((cactus) => {
        if (cactus.cactusId === id) {
          return { ...cactus, quantity: cactus.quantity - 1 };
        } else return cactus;
      });
    });
  };

  const incrementCartQuantityHandler = (id: string) => {
    setCactusesList((prev) => {
      return prev.map((cactus) => {
        if (cactus.cactusId === id) {
          return { ...cactus, quantity: cactus.quantity + 1 };
        } else return cactus;
      });
    });
  };

  const discoutInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setDiscoutCode(event.target.value);
  };

  const discoutCodeValidator = () => {
    if (discountCode === 'RABAT25') {
      setTotalPrice(totalPrice * 0.75);
      setIsDiscounted(true);
      setIsNotDiscounted(false);
      setIsDiscountAlreadyUsed(true);
    } else {
      setIsNotDiscounted(true);
      setIsDiscounted(false);
    }
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
        {cactusesList.map((product: Cactus) => (
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
                    onClick={() => removeCactus(product.cactusId)}
                    className="text-xl cursor-pointer"
                  />
                </div>
                <div className="flex w-full items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        product.quantity === 1
                          ? removeCactus(product.cactusId)
                          : decrementCartQuantityHandler(product.cactusId)
                      }
                      className="bg-[#f3f4f3] text-base w-8 h-8 text-center cursor-pointer transition-[0.5s] duration-[ease] rounded-[50%] border-[none] hover:text-[white] hover:bg-[#00c189]"
                    >
                      -
                    </button>
                    <span className="font-bold">{product.quantity}</span>
                    <button
                      onClick={() =>
                        incrementCartQuantityHandler(product.cactusId)
                      }
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
      <div className="w-full py-3">
        <div className="relative h-10 w-full min-w-[200px]">
          <input
            onChange={discoutInputHandler}
            className="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            placeholder=" "
            disabled={discountAlreadyUsed}
          />
          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Discout Code
          </label>
        </div>
      </div>
      <div className="flex flex-col">
        <button
          onClick={discoutCodeValidator}
          className="middle none center rounded-lg bg-green-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-light="true"
          disabled={discountAlreadyUsed}
        >
          APPLY DISCOUT CODE
        </button>

        {isDiscounted && (
          <span className="text-green-500">Discount applied! 25% off.</span>
        )}
        {isNotDiscounted && (
          <span className="text-red-600">Invalid code. Try again.</span>
        )}
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
