import { createSlice } from "@reduxjs/toolkit";

const initial_State = {};

const sliceOne = createSlice({
  name: "sliceOne",
  initialState: initial_State,
  reducers: {},
});

export const sliceOneActions = sliceOne.actions;

export default sliceOne;
