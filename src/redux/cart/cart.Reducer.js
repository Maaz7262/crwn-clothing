import actionTypes from "../actionTypes";
import {addItemToCart, removeItem, decreaseItem} from "./cart.utils";

const initialState = {
    hidden: true,
    addItem: []
}

const cartReducer = (state = initialState, action)=> {
    switch (action.type) {
        case actionTypes.CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case actionTypes.ADD_ITEM_TO_CART:
            return{
                ...state,
                addItem: addItemToCart(state.addItem, action.payload)
            }
        case actionTypes.REMOVE_ITEM:
            return {
                ...state,
                addItem: removeItem(state.addItem,action.payload)
            }
            case actionTypes.DECREASE_ITEM:
                return {
                    ...state,
                    addItem: decreaseItem(state.addItem, action.payload)
                }
    
        default:
            return state;
    }
}

export default cartReducer;