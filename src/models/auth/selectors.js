import { createSelector } from "reselect";

export const authSelector = createSelector(
  (state) => state.auth,
  (auth) => auth
);

export const refreshTokenSelector = createSelector(
  authSelector,
  ({ tokens }) => tokens
);
