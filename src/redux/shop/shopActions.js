 import actiontypes from "./ActionTypes"
 import { collection, getDocs} from "firebase/firestore";
 import {db, convertObjectsToMap } from "../../firebase/firebase";

 export const updateCollection = collectionMap =>({
   type: actiontypes.UPDATE_SHOP_COLLECTION,
   payload: collectionMap
 })
 export const startFetching = () => ({
    type: actiontypes.START_FETCING
 })
 export const endFetching =()=> ({
   type : actiontypes.SUCCESS_UPDATE_COLLECTION
 })
 export const fetchingFailure = (message) =>({
   type: actiontypes.FETCHING_FAILURE,
   payload: message
 })

 export const getFirebaseDataAsync = ()=> {
   return dispatch =>{
      dispatch(startFetching())
      getDocs(collection(db, "Collections")).then( obj => {
        const converted = convertObjectsToMap(obj);
        dispatch(updateCollection(converted));
        dispatch(endFetching())
        }).catch(error=>{
         dispatch(fetchingFailure(error))
        })
   }
 }