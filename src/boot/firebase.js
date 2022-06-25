// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/database";

// PUT YOUR OWN FIREBASE CONFIGURATION HERE
const firebaseConfig = {

  apiKey: "AIzaSyB65vO8k5OBUqqSgip6qKCoQqfkvz_KjE0",

  authDomain: "chatapp-7803e.firebaseapp.com",

  databaseURL: "https://chatapp-7803e-default-rtdb.firebaseio.com",

  projectId: "chatapp-7803e",

  storageBucket: "chatapp-7803e.appspot.com",

  messagingSenderId: "267727747019",

  appId: "1:267727747019:web:2dc5c31bf2ab433e8da84e"

};


// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()

export { firebaseAuth, firebaseDb }
