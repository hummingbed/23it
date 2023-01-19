import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDtTbq4F-wWa5KG2m4CrFXxiXK3p0FamcY",

    authDomain: "it-website-b3cc0.firebaseapp.com",
  
    projectId: "it-website-b3cc0",
  
    storageBucket: "it-website-b3cc0.appspot.com",
  
    messagingSenderId: "552683835880",
  
    appId: "1:552683835880:web:138e36db0f42c48655945d",
  
    measurementId: "G-Q45DTVF08B"
  
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {
    db
}