import React from 'react';
import cart from '@/public/images/icons/cart.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Cart() {
  const [cartValue, setCartValue] = useState(5);

  return (
    <div>
      <Link className="no-underline flex" href="/cart">
        <Image src={cart} alt="cart" />
        <span className="text-[#00c189] font-bold h-12 flex items-end">
          {cartValue}
        </span>
      </Link>
    </div>
  );
}
