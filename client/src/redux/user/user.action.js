import actionTypes from "../actionTypes";

const  setCurrentUser = user =>( {
    type: actionTypes.SET_CURRENT_USER,
    payload: user
})
export default setCurrentUser;