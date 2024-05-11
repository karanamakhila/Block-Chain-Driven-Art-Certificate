// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getStorage} from 'firebase/storage';
import {getDatabase} from 'firebase/database';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALDKJtqHJETnc-YO2M9wt0igty0Hg1izU",
  authDomain: "artcertificate-8b481.firebaseapp.com",
  databaseURL: "https://artcertificate-8b481-default-rtdb.firebaseio.com",
  projectId: "artcertificate-8b481",
  storageBucket: "artcertificate-8b481.appspot.com",
  messagingSenderId: "760970150299",
  appId: "1:760970150299:web:0fc92af260eca9d0fca13e",
  measurementId: "G-D6Z9Y2TR9B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app);
export const storage=getStorage(app);
export const database=getDatabase();
// const analytics = getAnalytics(app);
export default app;



