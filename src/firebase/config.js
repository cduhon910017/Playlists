import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAUNUarol9mDoSDbVKz8pML8d4bP_qgsE",
  authDomain: "lauberge-ninjas.firebaseapp.com",
  projectId: "lauberge-ninjas",
  storageBucket: "lauberge-ninjas.appspot.com",
  messagingSenderId: "400255278177",
  appId: "1:400255278177:web:d88de3db8cd856893fde20",
  measurementId: "G-G0DP12KVZ0",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
