import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {},
  reducers: {
    cacheResults: (state, action) => ({ ...state, ...action.payload }), // ? Merging both the objects
  },
});

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;

//* We are placing all our results in object why? why not array??
// Because object has better time complexity compared to array!
// To find elements in array it takes O(n) time complexity bcoz of linear search
// And object takes O(1) time complexity bcoz of hash table
// So, this is the reason why we are storing our results in object

/*
  initialState or searchCache data will be in this format ==>
  {
    ip: ["iphone", "iphone useless"],
    iphone: ["iphone 14", "iphone 11", "iphone 17"],
  }
  */
