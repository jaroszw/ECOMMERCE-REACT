import { createSelector } from "reselect";

<<<<<<< HEAD
const directorySelector = (state) => state.directory;

export const selectDirectorySelections = createSelector(
  [directorySelector],
  (directory) => directory.sections
);
=======
const selectDirectory = (state) => state.directory;

export const selectDirectorySections = createSelector(
    [selectDirectory],
    directory => directory.sections
)

>>>>>>> testing
