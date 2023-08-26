import { createSlice } from '@reduxjs/toolkit';
import { LIVECHAT_COUNT } from '@/utils/constants';

const initialState: { messages: any } = {
  messages: [],
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addMessage(state, action) {
      state.messages.splice(LIVECHAT_COUNT, 1);
      state.messages.unshift(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
