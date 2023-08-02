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
          <div className="main-section">
            <Image width={380} height={380} src={cactus.image} alt="garden" />

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
              <div className="title-border">
                <div className="order-features">
                  <button onClick={decrementHandler} className="remove-cactus">
                    -
                  </button>
                  <span className="cactus-state">{cartItems}</span>
                  <button onClick={incrementHandler} className="add-cactus">
                    +
                  </button>
                </div>
              </div>
              <div className="total-price-section">
                <span>Total:</span>
                <span>{totalPrice}</span>
              </div>
              <div className="cart-section">
                <div className="heart-icon">
                  <CiHeart />
                </div>
                <button onClick={showShoppingCartSumUp} className="button-card">
                  <PiShoppingCartLight />
                  <span>Add to cart</span>
                </button>
              </div>
              <div className="tick-section">
                <div>
                  <TiTick />
                  <span>
                    The most
                    <span className="bolded"> exclusive houseplants</span>
                  </span>
                </div>
                <div>
                  <TiTick />
                  <span>
                    <span className="bolded">250,000+ community </span>
                    followers
                  </span>
                </div>
                <div>
                  <TiTick />
                  <span>
                    Straight from <span className="bolded"> the nursery</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        )
      )}
      <div className="about-section">
        <div className="first-about-section">
          <div className="links-section">
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
          <div className="active-section">
            {DisplayChoices.Specifications === displayChoice && (
              <div className="spec-section">
                <div>
                  <Image src={width} height={50} width={50} alt="diameter" />
                  <div className="spec-descriptions">
                    <span className="bolded-text">Diameter</span>
                    <span>14cm</span>
                  </div>
                </div>
                <div>
                  <Image src={height} height={50} width={50} alt="height" />
                  <div className="spec-descriptions">
                    <span className="bolded-text">Height</span>
                    <span>±18cm</span>
                  </div>
                </div>
                <div>
                  <Image src={cloud} height={50} width={50} alt="cloud" />
                  <div className="spec-descriptions">
                    <span className="bolded-text">Loves</span>
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
        <div className="second-about-section">
          <span className="bolded">About this plant</span>
          <span className="text-style">
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
