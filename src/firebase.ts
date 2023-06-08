// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxz7G9vCFzt5P4p4hum_2vA25buKr7V-4",
  authDomain: "protostorage-cdcce.firebaseapp.com",
  projectId: "protostorage-cdcce",
  storageBucket: "protostorage-cdcce.appspot.com",
  messagingSenderId: "953674700740",
  appId: "1:953674700740:web:f75f867a2aedf82981b691",
  measurementId: "G-N5GBK1J7X1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app)
