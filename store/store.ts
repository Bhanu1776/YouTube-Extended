import { configureStore } from '@reduxjs/toolkit';
import appSlice from '@store/Slices/appSlice';
import searchSlice from '@store/Slices/searchSlice';
import filterAppSlice from '@store/Slices/filterAppSlice';
import chatSlice from './Slices/chatSlice';

//* Creating Store
const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    filterApp: filterAppSlice,
    chat: chatSlice,
  },
});

//* Exporting Store types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
