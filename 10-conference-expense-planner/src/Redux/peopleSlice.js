import { createSlice } from "@reduxjs/toolkit";

export const peopleSlice = createSlice({
  name: "people",
  // Define the initial state
  initialState: {
    count: 1,
  },

  // Define the reducers
  reducers: {
    setPeopleCount: (state, action) => {
      if (isNaN(action.payload) || action.payload < 1) {
        return;
      }
      state.count = action.payload;
    },
  },
});

export const { setPeopleCount } = peopleSlice.actions;
export default peopleSlice.reducer;
