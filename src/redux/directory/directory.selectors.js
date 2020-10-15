import { createSelector } from "reselect";

const directorySelector = (state) => state.directory;

export const selectDirectorySelections = createSelector(
  [directorySelector],
  (directory) => directory.sections
);
