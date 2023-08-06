import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
  isMenuOpen: boolean;
};

const initialState: InitialState = {
  isMenuOpen: true,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export const { toggleMenu } = appSlice.actions;
export default appSlice.reducer;
