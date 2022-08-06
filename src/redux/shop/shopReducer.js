import SHOP_DATA from "../../pages/shop.data"
import actiontypes from "./ActionTypes" 
const InitialState = {
    shopData: SHOP_DATA
}

const shopReducer = (state = InitialState, action) => {
    switch (actiontypes) {
        default:
            return state
    }
}
export default shopReducer;