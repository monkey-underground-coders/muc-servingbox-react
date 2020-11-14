import { combineReducers } from "@reduxjs/toolkit";
import testReducer from "./test/slice";

export const rootLevelReducer = combineReducers({
  test: testReducer,
});
