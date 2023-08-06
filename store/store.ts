import { configureStore } from '@reduxjs/toolkit';
import appSlice from '@store/Slices/appSlice';

//* Creating Store
const store = configureStore({
  reducer: {
    app: appSlice,
  },
});

//* Exporting Store types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
