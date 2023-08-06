'use client';
import React from 'react';
import { getDoc, doc } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { db } from '../../app/firebase';
import { StaticImageData } from 'next/image';
import Image from 'next/image';
import '@/app/styles/CactusDetailPage.scss';
import LoadingIndicator from '../LoadingIndicator';
import { CiHeart } from 'react-icons/ci';
import { PiShoppingCartLight } from 'react-icons/pi';
import { TiTick } from 'react-icons/ti';
import width from '@/public/images/main-page-imgs/width.png';
import height from '@/public/images/main-page-imgs/height.png';
import cloud from '@/public/images/main-page-imgs/cloud.png';
import CartModal from '../Cart/CartModal';

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

enum DisplayChoices {
  Specifications,
  Care,
  Reviews,
}

export default function CactusDetailPage(props: CactusDetailPageParams) {
  const [cactus, setCactus] = useState<Cactus | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [cartItems, setCartItems] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showCartModal, setShowCartModal] = useState(true);
  const [displayChoice, setDisplayChoice] = useState(
    DisplayChoices.Specifications
  );

  const docRef = doc(db, 'cactuses', `${props.cactusId}`);

  useEffect(() => {
    const getCactus = async () => {
      try {
        const data = await getDoc(docRef);
        if (data.exists()) {
          const fetchedCactus = { ...(data.data() as Cactus) };
          setCactus(fetchedCactus);

          setTotalPrice(cartItems * fetchedCactus.price);
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

  useEffect(() => {
    if (cactus !== undefined) {
      setTotalPrice((cartItems * Math.floor(cactus.price * 100)) / 100);
    }
    if (cartItems < 1) {
      setCartItems(1);
    }
  }, [cartItems]);

  const decrementHandler = () => {
    setCartItems((prev) => prev - 1);
  };
  const incrementHandler = () => {
    setCartItems((prev) => prev + 1);
  };

  const showShoppingCartSumUp = () => {
    setShowCartModal(true);
  };

  return (
    <>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        cactus && (
          <div className="flex pt-6 font-sans">
            <Image width={380} height={380} src={cactus.image} alt="garden" />

            <div className="w-full pl-4">
              <div className="pb-1 border-b-[#9e9e9e] border-b-[100%] border-b border-solid">
                <span className="font-bold text-[1.75rem]">{cactus.title}</span>
              </div>
              <div className="pb-1 border-b-[#9e9e9e] border-b-[100%] border-b border-solid">
                <span className="block font-bold text-[0.8rem] pt-1">Size</span>
                <span className="bg-[#f3f4f3] w-10 h-10 flex justify-center items-center cursor-pointer mx-0 my-1 rounded-[50%]">
                  S
                </span>
              </div>
              <div className="flex justify-between mt-1">
                <span className="font-bold text-base">{cactus.title}</span>
                <span className="text-base text-[#00c189] font-semibold">
                  {cactus.price}
                </span>
              </div>
              <div className="mx-0 my-3">
                <span className="underline text-[0.7rem] cursor-pointer">
                  in nursery pot
                </span>
              </div>
              <div className="pb-1 border-b-[#9e9e9e] border-b-[100%] border-b border-solid">
                <div className="flex justify-between items-center w-2/5">
                  <button
                    onClick={decrementHandler}
                    className="bg-[#f3f4f3] text-base w-8 h-8 text-center cursor-pointer transition-[0.5s] duration-[ease] rounded-[50%] border-[none] hover:text-[white] hover:bg-[#00c189]"
                  >
                    -
                  </button>
                  <span className="text-[0.9rem] font-bold">{cartItems}</span>
                  <button
                    onClick={incrementHandler}
                    className="bg-[#f3f4f3] text-base flex justify-center items-center w-8 h-8 cursor-pointer transition-[0.5s] duration-[ease] rounded-[50%] border-[none] hover:text-[white] hover:bg-[#00c189]"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex justify-between font-bold px-0 py-2 border-b-[#9e9e9e] border-b-[100%] border-b border-solid">
                <span>Total:</span>
                <span>{totalPrice}</span>
              </div>
              <div className="flex justify-end items-center mx-0 my-2">
                <div className="text-2xl transition-[color] duration-[0.5s] ease-[ease] cursor-pointer mr-2 hover:text-[red]">
                  <CiHeart />
                </div>
                <button
                  onClick={showShoppingCartSumUp}
                  className="flex justify-center items-center bg-[#00c189] text-[white] cursor-pointer transition-[background-color] duration-[0.5s] ease-[ease] px-5 py-2 rounded-full border-[none] hover:bg-[rgba(0,0,0,0.8)]"
                >
                  <PiShoppingCartLight className="text-xl" />
                  <span className="ml-2">Add to cart</span>
                </button>
              </div>
              <div className="flex flex-col gap-[0.15rem]">
                <div className="flex items-center">
                  <TiTick className="text-[#00c189]" />
                  <span>
                    The most
                    <span className="font-bold"> exclusive houseplants</span>
                  </span>
                </div>
                <div className="flex items-center">
                  <TiTick className="text-[#00c189]" />
                  <span>
                    <span className="font-bold">250,000+ community </span>
                    followers
                  </span>
                </div>
                <div className="flex items-center">
                  <TiTick className="text-[#00c189]" />
                  <span>
                    Straight from
                    <span className="font-bold"> the nursery</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        )
      )}
      <div className="flex w-full mt-4">
        <div className="w-[43%]">
          <div className="font-bold pb-8 flex gap-10 h-[1.65rem] text-gray-400 border-b-[#9e9e9e] border-b border-solid">
            <button
              onClick={() => {
                setDisplayChoice(DisplayChoices.Specifications);
              }}
            >
              Specifications
            </button>
            <button
              onClick={() => {
                setDisplayChoice(DisplayChoices.Care);
              }}
            >
              Care
            </button>
            <button
              onClick={() => {
                setDisplayChoice(DisplayChoices.Reviews);
              }}
            >
              Reviews
            </button>
          </div>
          <div className="h-auto pt-4">
            {DisplayChoices.Specifications === displayChoice && (
              <div className="flex gap-10">
                <div>
                  <Image src={width} height={50} width={50} alt="diameter" />
                  <div className="flex flex-col items-center">
                    <span className="font-bold">Diameter</span>
                    <span>14cm</span>
                  </div>
                </div>
                <div>
                  <Image src={height} height={50} width={50} alt="height" />
                  <div className="flex flex-col items-center">
                    <span className="font-bold">Height</span>
                    <span>±18cm</span>
                  </div>
                </div>
                <div>
                  <Image src={cloud} height={50} width={50} alt="cloud" />
                  <div className="flex flex-col items-center">
                    <span className="font-bold">Loves</span>
                    <span>Partly shady</span>
                  </div>
                </div>
              </div>
            )}
            {DisplayChoices.Care === displayChoice && (
              <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </span>
            )}
            {DisplayChoices.Reviews === displayChoice && (
              <span>There are no reviews to display.</span>
            )}
          </div>
        </div>
        <div className="w-[57%] flex flex-col ml-4">
          <span className="font-bold pb-2 border-b-[#9e9e9e] border-b border-solid">
            About this plant
          </span>
          <span className="pt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ised in the 1960s with the release of Letraset sheets containing
            Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum.
          </span>
        </div>
      </div>
      {showCartModal && (
        <CartModal
          decrementHandler={decrementHandler}
          incrementHandler={incrementHandler}
          productImage={cactus?.image}
          cartItems={cartItems}
          totalPrice={totalPrice}
        />
      )}
    </>
  );
}
