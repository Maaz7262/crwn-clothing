import {createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./rootReducer";

//Persist
import { persistStore } from "redux-persist";
let middleWare;
if (process.env.NODE_ENV ==='development'){
    middleWare = [logger]
}

export const store = createStore(rootReducer,applyMiddleware(...middleWare));

export const persistor = persistStore(store)