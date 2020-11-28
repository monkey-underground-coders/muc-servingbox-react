import { createSelector } from "reselect";

export const authSlector = createSelector(
  (state) => state.auth,
  (auth) => auth
);

export const refreshTokenSelector = createSelector(
  authSlector,
  ({ tokens }) => tokens
);
