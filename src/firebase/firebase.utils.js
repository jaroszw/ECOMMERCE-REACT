import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAySRwl-RKReGJ2pCM4KHTCLgr1IvwCUz8",
    authDomain: "vc-db-957ad.firebaseapp.com",
    databaseURL: "https://vc-db-957ad.firebaseio.com",
    projectId: "vc-db-957ad",
    storageBucket: "vc-db-957ad.appspot.com",
    messagingSenderId: "105883833270",
    appId: "1:105883833270:web:d9995ef5ccca29b7722717"
};


export const createUserProfileDocument = async (userAuth, additionalData) => {
    
    if (!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
        
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
  
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData,
        });
      } catch (error) {
        console.log("error creating user", error.message);
      }
    }
  
    return userRef;
};  


firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => {auth.signInWithPopup(provider)};




export default firebase;