import React from 'react';
import cart from '@/public/images/icons/cart.svg';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { showCart, hideCart } from '@/app/utilities/showHideCartSlice';
import { useState, useEffect } from 'react';
import CartModal from './CartModal';
import { AppDispatch } from '@/app/redux/store/store';
import { useAppSelector } from '@/app/redux/store/store';
// import { Product } from './CartModal';

export default function Cart() {
  const [cartValue, setCartValue] = useState(5);
  const showCartModal = useAppSelector(
    (state) => state.showHideCartSlice.showOrHideCart
  );
  const dispatch = useDispatch<AppDispatch>();

  const showCartToggle = () => {
    dispatch(showCart());
  };

  return (
    <div>
      <div className="no-underline flex items-center">
        <div onClick={showCartToggle}>
          <Image src={cart} alt="cart" />
        </div>
        <span className="text-[#00c189] font-bold h-12 flex items-end">
          {cartValue}
        </span>
        {/* {showCartModal && <CartModal />} */}
      </div>
    </div>
  );
}
