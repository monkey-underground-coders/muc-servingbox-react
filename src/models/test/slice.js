import { createSlice } from "@reduxjs/toolkit";

import actionTypes from "utils/actionTypes";

const testSlice = createSlice({
  name: "test",
  initialState: {
    collection: {},
    fetching: true,
    collectionFetched: false,
  },
  reducers: {},
});

export const actions = actionTypes(testSlice.actions);

export default testSlice.reducer;
