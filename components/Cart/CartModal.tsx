'use client';
import '@/app/styles/CartModal.scss';
import React from 'react';
import { RxCross2 } from 'react-icons/rx';
import { TiTick } from 'react-icons/ti';

export default function CartModal() {
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
    </div>
  );
}
