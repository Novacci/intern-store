import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 1,
};

const cartQuantitySlice = createSlice({
  name: 'cartQuantity',
  initialState,
  reducers: {
    incrementCartQuantity: (state) => {
      state.value += 1;
    },
    decrementCartQuantity: (state) => {
      state.value -= 1;
    },
  },
});

export const { incrementCartQuantity, decrementCartQuantity } =
  cartQuantitySlice.actions;
export default cartQuantitySlice.reducer;
