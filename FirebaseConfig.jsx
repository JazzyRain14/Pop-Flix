import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, initializeAuth, getReactNativePersistence, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore"
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
const firebaseConfig = {
  apiKey: "AIzaSyCT0HdJgw6UKZa6R5b9UlswmkDM3HpDmhA",
  authDomain: "pop-flix-d4a0d.firebaseapp.com",
  projectId: "pop-flix-d4a0d",
  storageBucket: "pop-flix-d4a0d.appspot.com",
  messagingSenderId: "895046882643",
  appId: "1:895046882643:web:ea2cd5c88d8fd25b113da6"
};
const FIREBASE_APP = initializeApp(firebaseConfig)
const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
// const FIREBASE_AUTH = getAuth(FIREBASE_APP)
const db = getFirestore(FIREBASE_APP)

export { FIREBASE_AUTH, db}