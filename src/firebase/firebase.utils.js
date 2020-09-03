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

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({pormpt: 'select_account'});
export const signInWithGoogle = () => {auth.signInWithPopup(provider)};

export default firebase;