import { createSlice } from '@reduxjs/toolkit';

const initialState = false;

const showHideCartSlice = createSlice({
  name: 'showOrHideCart',
  initialState,
  reducers: {
    showCart: (state) => true,
    hideCart: (state) => false,
  },
});

export const { showCart, hideCart } = showHideCartSlice.actions;
export default showHideCartSlice.reducer;
