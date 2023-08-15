import { createSlice } from '@reduxjs/toolkit';

const initialState: { data: string } = {
  data: '',
};

const filterAppSlice = createSlice({
  name: 'filterApp',
  initialState,
  reducers: {
    filterVideos: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { filterVideos } = filterAppSlice.actions;
export default filterAppSlice.reducer;
