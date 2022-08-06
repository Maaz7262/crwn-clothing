import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const cartHidden = createSelector(
    selectCart, cart => cart.hidden
)


export const selectAddItem = createSelector(
    [selectCart], (cart)=> cart.addItem
)

export const selectItemsCount = createSelector(
    [selectAddItem],  addItem => addItem.reduce((accCount,addItem)=> accCount + addItem.quantity,0)
    
)


export const selectCartTotal = createSelector(
    [selectAddItem], item => item.reduce((accTotal, item)=> accTotal+(item.quantity * item.price),0)
)