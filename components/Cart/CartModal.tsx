'use client';
import '@/app/styles/CartModal.scss';
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
    <div className="cart-modal">
      <div className="title-position">
        <span>Hi! This is your shopping cart</span>
        <RxCross2 />
      </div>
      <div className="order-price-info">
        <span>Your order ships free!</span>
        <TiTick />
      </div>
      <div className="green-line"></div>
      <div className="single-order">
        {productImage && (
          <Image
            src={productImage}
            height={120}
            width={97}
            alt="Image of ordered Product"
          />
        )}

        <div className="single-order-section">
          <div className="test1">
            <div className="test2">
              <span>Adansonii Aurea</span>
              <span> Cactus</span>
            </div>
            <HiOutlineTrash />
          </div>

          <div className="test1">
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
