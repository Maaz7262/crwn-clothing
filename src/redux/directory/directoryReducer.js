import Dir_data from "../../components/directory/dir-data"
import actiontypes from "./ActionTypes" 
const InitialState = {
    directory: Dir_data
}

const directoryReducer = (state = InitialState, action) => {
    switch (actiontypes.GET_DIRECTORY) {
        default:
            return state
    }
}
export default directoryReducer;