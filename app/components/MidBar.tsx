'use client';

import './../styles/MidBar.scss';
import SelectCurrency from './SelectCurrency';
import Login from './Login';
import Cart from './Cart';
import Link from 'next/link';

export default function MidBar() {
  return (
    <div className="flex-position">
      <Link className="link-style" href="/">
        InternStore
      </Link>
      <div className="child-position">
        <SelectCurrency />

        <Login />
        <Cart />
      </div>
    </div>
  );
}
