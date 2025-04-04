import { createSlice } from "@reduxjs/toolkit";

const initial_State = {
  formModalState: false,
  accountType: "",
  customerLogin: false,
  isNotificationOn: true,
  accountUserData: {},
  accountUserCookie: "",
  proprietors_running_Notes_Array: [],
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
      const userData = JSON.parse(localStorage.getItem("user_Data"));
      if (userData.data.ProprietorName) {
        state.accountUserData = { ...userData, accountType: "proprietor" };
        state.accountType = "proprietor";
      }
      if (userData.data.customerName) {
        state.accountUserData = { ...userData, accountType: "customer" };
        state.accountType = "customer";
      }
      state.accountUserCookie = userData.token;
    },
    userStorageInfo_Get_handler(state, action) {
      const userData = JSON.parse(localStorage.getItem("user_Data"));
      if (!userData) {
        state.accountType = "";
        return;
      }
      state.accountType = userData.data.ProprietorName
        ? "proprietor"
        : "customer";
      state.accountUserData = userData;
      state.accountUserCookie = userData.token;
    },
    saveAllRunningNotes(state, action) {
      const dataArray = action.payload;
      console.log(dataArray);
      state.proprietors_running_Notes_Array = dataArray.data;
    },
  },
});

export const sliceOneActions = sliceOne.actions;

export default sliceOne;
