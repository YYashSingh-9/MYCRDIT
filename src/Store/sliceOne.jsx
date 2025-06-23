import { createSlice } from "@reduxjs/toolkit";

const initial_State = {
  formModalState: false,
  accountType: "",
  customerLogin: false,
  isNotificationOn: true,
  accountUserData: {},
  accountUserCookie: "",
  proprietors_running_Notes_Array: [],
  dummy_Proprietor_Notes_Array: [],
  filterNotificationState: false,
  customerNote_requests: [],
  recentLoginState: false,
  shopDetailsUpdateState: false,
  reviewPopupState: false,
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
      state.dummy_Proprietor_Notes_Array = dataArray.data;
    },
    updateUserStoredInfo_handler(state, action) {
      let objectToUpdate, user_info_Object;
      const userData_ = JSON.parse(localStorage.getItem("user_Data"));
      user_info_Object = action.payload;

      objectToUpdate = {
        data: user_info_Object.data,
        token: userData_.token,
        status: userData_.status,
      };

      localStorage.clear();
      localStorage.setItem("user_Data", JSON.stringify(objectToUpdate));
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
    localStorageClear_Handler(state, action) {
      localStorage.clear();
      state.accountType = "";
      state.accountUserCookie = "";
      state.accountUserData = "";
    },
    notesArray_change(state, action) {
      const filteredArray = action.payload;
      state.filterNotificationState = true;
      state.dummy_Proprietor_Notes_Array = filteredArray;
    },
    reload_all_notes_toArray(state, action) {
      state.dummy_Proprietor_Notes_Array =
        state.proprietors_running_Notes_Array;
      state.filterNotificationState = false;
    },
    note_requests_insert_handler(state, action) {
      const request_array = action.payload;
      state.customerNote_requests = request_array;
      console.log(request_array);
    },
    loginState_reset(state, action) {
      state.recentLoginState = false;
    },
    loginState_setter(state, action) {
      state.recentLoginState = true;
    },
    shopDetailsEditStateSetter(state, action) {
      state.shopDetailsUpdateState = true;
    },
    shopDetailsEditStateReSetter(state, action) {
      state.shopDetailsUpdateState = false;
    },
    reviewStateSetter(state, action) {
      state.reviewPopupState = true;
      console.log("WORKING!!!!!!!");
    },
    reviewStateReSetter(state, action) {
      state.reviewPopupState = false;
    },
  },
});

export const sliceOneActions = sliceOne.actions;

export default sliceOne;
