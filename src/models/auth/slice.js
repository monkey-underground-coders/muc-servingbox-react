import { createSlice } from "@reduxjs/toolkit";

import actionTypes from "utils/actionTypes";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    tokens: {},
    fetching: false,
    errorMessage: null,
  },
  reducers: {
    getTokens(state) {
      state.fetching = true;
    },
    getTokensSuccess(state, { payload }) {
      state.fetching = true;
      state.tokens = payload.tokens;
    },
    getTokensFailed(state, { payload }) {
      state.fetching = true;
      state.errorMessage = payload.err;
    },
  },
});

export const actions = actionTypes(authSlice.actions);

export default authSlice.reducer;
