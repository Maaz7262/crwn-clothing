import {firebase} from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const  config = {
    apiKey: "AIzaSyA6G3Lc701w_406zU7jYLqp0T8zi3fq8hg",
    authDomain: "crwn-clothing-7f472.firebaseapp.com",
    projectId: "crwn-clothing-7f472",
    storageBucket: "crwn-clothing-7f472.appspot.com",
    messagingSenderId: "1025032227550",
    appId: "1:1025032227550:web:85a18c736c196e60ead04f",
    measurementId: "G-BJS8Q3LF69"
  };

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoolge = ()=> auth.signInWithPopUp(provider);

export default firebase;

const userProfile = async (auth, data)=> {
  if (!auth) return;
  
  console.log(firebase.doc("carts/df25s5d4f5d4"))
}

export {userProfile};