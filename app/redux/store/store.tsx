import { configureStore } from '@reduxjs/toolkit';
import showHideCartSlice from '../../utilities/showHideCartSlice';

const store = configureStore({
  reducer: {
    showOrHideCart: showHideCartSlice,
  },
});

export default store;
