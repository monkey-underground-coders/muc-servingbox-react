import { rootLevelReducer } from "models";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: rootLevelReducer,
  middleware: [],
});

export default store;
