import React from 'react';
import cart from '../assets/icons/cart.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function Cart() {
  return (
    <div>
      <Link href="/cart">
        <Image src={cart} alt="cart" />
      </Link>
    </div>
  );
}
