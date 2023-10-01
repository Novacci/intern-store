import React from 'react';
import cart from '@/public/images/icons/cart.svg';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import CartModal from './CartModal';

export default function Cart() {
  const [cartValue, setCartValue] = useState(5);
  // const showCartModal = useSelector((state) => state.showOrHideCart.);

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
