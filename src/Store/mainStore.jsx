import { configureStore } from "@reduxjs/toolkit";
import sliceOne from "./sliceOne";

const mainStore = configureStore({
  reducer: { sliceOne: sliceOne.reducer },
});

export default mainStore;
