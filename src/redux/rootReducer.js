import { combineReducers } from "redux";
import userReducer from "./user/user.Reducer";


export default  combineReducers({
    user: userReducer
})
