import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    // apiKey: "AIzaSyC0_f4XA8n4PTSzvePLcXgzoQmHm9jzmds",

    // authDomain: "it-website-b3cc0.firebaseapp.com",

    // projectId: "it-website-b3cc0",

    // storageBucket: "it-website-b3cc0.appspot.com",

    // messagingSenderId: "552683835880",

    // appId: "1:552683835880:web:138e36db0f42c48655945d",

    // measurementId: "G-Q45DTVF08B"

    apiKey: "AIzaSyC0_f4XA8n4PTSzvePLcXgzoQmHm9jzmds",
    authDomain: "it-3d54b.firebaseapp.com",
    projectId: "it-3d54b",
    storageBucket: "it-3d54b.appspot.com",
    messagingSenderId: "322339567720",
    appId: "1:322339567720:web:41770461ca20d20450e3dd",
    measurementId: "G-MTL98FQH6J"

};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {
    db
}