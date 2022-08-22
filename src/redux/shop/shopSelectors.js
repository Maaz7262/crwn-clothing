 import { createSelector } from "selector";

 const selectshop = state=> state.shop;


export const selectshopData = createSelector(
    selectshop, shop => shop.shopData
 )
export const selectObjShop = createSelector(
    selectshopData, shop =>
        shop ? (Object.keys(shop).map(key => shop[key] ) ): []
        )
export const isFetching = createSelector(
    selectshop,
    shop => !!shop.shopData
)

 
