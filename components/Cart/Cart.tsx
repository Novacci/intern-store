import React from 'react';
import cart from '@/public/images/icons/cart.svg';
import Image from 'next/image';

import { useState } from 'react';

export default function Cart() {
  // const showCart = use;
  const [cartValue, setCartValue] = useState(5);

  return (
    <div>
      <div className="no-underline flex items-center">
        <Image src={cart} alt="cart" />
        <span className="text-[#00c189] font-bold h-12 flex items-end">
          {cartValue}
        </span>
      </div>
    </div>
  );
}
