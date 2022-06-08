import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA7jshYjDH7Ye147DFv8D3HgZzEbpQ5BZs",
    authDomain: "blogsite-92232.firebaseapp.com",
    projectId: "blogsite-92232",
    storageBucket: "blogsite-92232.appspot.com",
    messagingSenderId: "1071207622857",
    appId: "1:1071207622857:web:f6551ad2af955deb9fc518"
}

//init firebase
firebase.initializeApp(firebaseConfig)

//init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

//timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }