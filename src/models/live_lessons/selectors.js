import { createSelector } from "reselect";

export const liveLessonsSelector = createSelector(
  (state) => state.liveLessons,
  (liveLessons) => liveLessons
);

export const liveLessonsEntitiesSelector = createSelector(
  liveLessonsSelector,
  ({ liveLessons }) => liveLessons
);
