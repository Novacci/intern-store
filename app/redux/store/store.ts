import { configureStore } from '@reduxjs/toolkit';
import showHideCartSlice from '../../utilities/showHideCartSlice';
import quantitySlice from '../../utilities/quantitySlice';
import cartQuantitySlice from '@/app/utilities/cartQuantitySlice';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const store = configureStore({
  devTools: true,
  reducer: {
    showHideCartSlice,
    quantitySlice,
    cartQuantitySlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
