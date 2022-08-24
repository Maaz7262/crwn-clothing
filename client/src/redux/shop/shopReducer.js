import SHOP_DATA from "../../pages/shop.data"
import actiontypes from "./ActionTypes" 
const InitialState = {
    shopData: null,
    isLoading: false,
    message: undefined
}

const shopReducer = (state = InitialState, action) => {
    switch (action.type) {
        case actiontypes.UPDATE_SHOP_COLLECTION:
            return {
                ...state,
                shopData: action.payload
            } 
        case actiontypes.START_FETCING:
            return{
                ...state,
                isLoading: true
            } 
        case actiontypes.SUCCESS_UPDATE_COLLECTION:
            return{
                ...state,
                isLoading: false
            }
        case actiontypes.FETCHING_FAILURE:
            return{
                ...state,
                message: action.payload
            }
        default:
            return state
    }
}
export default shopReducer;