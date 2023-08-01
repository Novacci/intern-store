'use client';

import '../app/styles/MidBar.scss';
import SelectCurrency from './SelectCurrency';
import Login from './Login';
import Cart from './Cart/Cart';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function MidBar() {
  return (
    <div className="flex-position">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Link className="link-style" href="/">
          InternStore
        </Link>
      </motion.div>
      <div className="child-position">
        <SelectCurrency />

        <Login />
        <Cart />
      </div>
    </div>
  );
}
