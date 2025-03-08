import { createSlice } from "@reduxjs/toolkit";

const initial_State = {
  formModalState: false,
  accountType: "proprietor",
  customerLogin: false,
  isNotificationOn: true,
  accountUserData: {},
};

const sliceOne = createSlice({
  name: "sliceOne",
  initialState: initial_State,
  reducers: {
    modalToggler(state, action) {
      state.formModalState = !state.formModalState;
    },
    accountTypeToggler(state, action) {
      const accType = action.payload;
      if (accType === "proprietor") {
        state.accountType = "proprietor";
      } else if (accType === "customer") {
        state.accountType = "customer";
      }
    },
    authentication_Info_Storage_handler(state, action) {
      const loginData = action.payload;
      localStorage.clear();
      localStorage.setItem("user_Data", JSON.stringify(loginData));
    },
  },
});

export const sliceOneActions = sliceOne.actions;

export default sliceOne;
