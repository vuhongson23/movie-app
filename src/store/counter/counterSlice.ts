import { createSlice } from "@reduxjs/toolkit";

interface IInitState {
  count: number;
}

const initState: IInitState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initState,
  reducers: {
    increase: (state) => ({
      count: state.count + 1,
    }),
    decrease: (state) => ({
      count: state.count - 1,
    }),
    increaseByValue: (state, action) => ({
      count: state.count + action.payload,
    }),
  },
});

export const { increase, decrease, increaseByValue } = counterSlice.actions;
export default counterSlice.reducer;
