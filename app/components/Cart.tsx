import React from 'react';
import cart from '../assets/cart.svg';
import Image from 'next/image';

export default function Cart() {
  return (
    <div>
      <Image src={cart} alt="cart" />
    </div>
  );
}
