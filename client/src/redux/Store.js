import {createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./rootReducer";
import thunk from 'redux-thunk'

//Persist
import { persistStore } from "redux-persist";
 const middleWare= [thunk];
if (process.env.NODE_ENV ==='development'){
    middleWare.push(logger)
}


export const store = createStore(rootReducer,applyMiddleware(...middleWare));

export const persistor = persistStore(store)