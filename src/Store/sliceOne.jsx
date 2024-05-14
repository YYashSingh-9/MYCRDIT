import { createSlice } from "@reduxjs/toolkit";

const initial_State = {
  formModalState: false,
};

const sliceOne = createSlice({
  name: "sliceOne",
  initialState: initial_State,
  reducers: {
    modalToggler(state, action) {
      state.formModalState = !state.formModalState;
    },
  },
});

export const sliceOneActions = sliceOne.actions;

export default sliceOne;
