import React from 'react';
import cart from '../public/images/icons/cart.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import '../app/styles/Cart.scss';

export default function Cart() {
  const [cartValue, setCartValue] = useState(0);

  return (
    <div className="cart-style">
      <Link href="/cart">
        <Image src={cart} alt="cart" />
        <span>{cartValue}</span>
      </Link>
    </div>
  );
}
