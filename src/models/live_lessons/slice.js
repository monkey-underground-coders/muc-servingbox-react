import { createSlice } from "@reduxjs/toolkit";

import actionTypes from "utils/actionTypes";

const liveLessonsSlice = createSlice({
  name: "live_lessons",
  initialState: {
    liveLessons: {},
    fetching: false,
  },
  reducers: {
    liveLessonsPageRequest(state) {
      state.fetching = true;
    },
    liveLessonsPageSuccess(state, { payload }) {
      state.liveLessons = payload.content;
      state.fetching = false;
    },
    liveLessonsPageFailure(state) {
      state.fetching = false;
    },
  },
});

export const actions = actionTypes(liveLessonsSlice.actions);

export default liveLessonsSlice.reducer;
