import { createSlice } from '@reduxjs/toolkit';

export type InitialStateType = {
  showOrHideCart: boolean;
};

const initialState: InitialStateType = {
  showOrHideCart: false,
};

const showHideCartSlice = createSlice({
  name: 'showOrHideCart',
  initialState,
  reducers: {
    showCart: (state) => {
      state.showOrHideCart = true;
    },
    hideCart: (state) => {
      state.showOrHideCart = false;
    },
  },
});

export const { showCart, hideCart } = showHideCartSlice.actions;
export default showHideCartSlice.reducer;
