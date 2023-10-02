import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 1,
};

const quantitySlice = createSlice({
  name: 'quantity',
  initialState,
  reducers: {
    incrementQuantity: (state) => {
      state.value += 1;
    },
    decrementQuantity: (state) => {
      state.value -= 1;
    },
  },
});

export const { incrementQuantity, decrementQuantity } = quantitySlice.actions;
export default quantitySlice.reducer;
