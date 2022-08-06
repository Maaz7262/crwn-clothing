import actionTypes from "../actionTypes";

export const cartAction = ()=> ({
    type: actionTypes.CART_HIDDEN
})

export const addItem = item => ({
    type: actionTypes.ADD_ITEM_TO_CART,
    payload:  item
})

export const removeItem = item => ({
    type: actionTypes.REMOVE_ITEM,
    payload: item
})

export const decQty = item => ({
    type : actionTypes.DECREASE_ITEM,
    payload: item
})
