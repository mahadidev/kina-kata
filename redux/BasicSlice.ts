import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  navigationHeight: number;
}

const initialState: CounterState = {
  navigationHeight: 0,
};

export const BasicSlice = createSlice({
  name: "basic",
  initialState,
  reducers: {
    setNavigationHeight: (state, action) => {
      state.navigationHeight = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setNavigationHeight } = BasicSlice.actions;

export default BasicSlice.reducer;
