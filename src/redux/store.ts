import { configureStore } from '@reduxjs/toolkit';
import catalog from './reducer';

export const store = configureStore({
  reducer: {
    catalog,
  },
});

export type TRootState = ReturnType<typeof store.getState>;
