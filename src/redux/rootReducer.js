import { combineReducers } from "redux";
import userReducer from "./user/user.Reducer";
import cartReducer from "./cart/cart.Reducer";
import directoryReducer from "./directory/directoryReducer";
import shopReducer from "./shop/shopReducer";

//Persistor 
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage ,
    whitelist: ['cart']
 }

export const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
})



export default persistReducer(persistConfig,rootReducer);