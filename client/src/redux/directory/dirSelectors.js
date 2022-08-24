 import { createSelector } from "selector";

 const selectDir = state=> state.directory;


 const selectDirectory = createSelector(
    selectDir, dir => dir.directory
 )

 export default selectDirectory