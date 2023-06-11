'use client';

import './../styles/MidBar.scss';
import SelectCurrency from './SelectCurrency';

export default function MidBar() {
  return (
    <div>
      <h1>InternStore</h1>
      <SelectCurrency />
    </div>
  );
}
