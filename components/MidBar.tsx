'use client';

import SelectCurrency from './SelectCurrency';
import Login from './Login';
import Cart from './Cart/Cart';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function MidBar() {
  return (
    <div className="flex justify-between px-5 py-2.5;">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          className="no-underline text-[black] text-[2rem] font-semibold;
  font-family: itc-avant-garde-gothic-pro, sans-serif;"
          href="/"
        >
          InternStore
        </Link>
      </motion.div>
      <div className="flex items-center gap-4;">
        <SelectCurrency />
        <Login />
        <Cart />
      </div>
    </div>
  );
}
