import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc} from "firebase/firestore";

const config = {
    apiKey: "AIzaSyA6G3Lc701w_406zU7jYLqp0T8zi3fq8hg",
    authDomain: "crwn-clothing-7f472.firebaseapp.com",
    projectId: "crwn-clothing-7f472",
    storageBucket: "crwn-clothing-7f472.appspot.com",
    messagingSenderId: "1025032227550",
    appId: "1:1025032227550:web:85a18c736c196e60ead04f",
    measurementId: "G-BJS8Q3LF69"
  };

  
  const app=initializeApp(config);
  export const db = getFirestore(app);
  export const auth = getAuth();
  const provider  = new GoogleAuthProvider();
  export const google = () => {signInWithPopup(auth,provider)};

  
  export const createUserProfileDocument = async (userAuth, AdditionalData)=>{
    if (!userAuth) return;
    const userRef = doc(db,`users/${userAuth.uid}`);
    const snapshot = await getDoc(userRef);

    if (!snapshot.exists()){
      const {displayName, email} = userAuth;
      const timestamp = new Date();
      try { 
        const docData = {
          timestamp,
          displayName,
          email,
          UserId: userAuth.uid,
          ...AdditionalData
        }
  
        await setDoc(userRef,docData)
      } catch (error) {
        console.log('Error in creating a user: '+ error.message);
      }
    } 
    return userRef;
    

  }

  


