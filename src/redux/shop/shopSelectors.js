 import { createSelector } from "selector";

 const selectshop = state=> state.shop;


export const selectshopData = createSelector(
    selectshop, shop => shop.shopData
 )
export const selectObjShop = createSelector(
    selectshopData, shop => Object.keys(shop).map(key => shop[key])
)
 
