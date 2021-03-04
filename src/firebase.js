import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAp-bQC3QI8Y44cyLxSiVg06srv-6e9SCo",
  authDomain: "facebook-clone-afcf9.firebaseapp.com",
  projectId: "facebook-clone-afcf9",
  storageBucket: "facebook-clone-afcf9.appspot.com",
  messagingSenderId: "1026894029358",
  appId: "1:1026894029358:web:f872098eca73e65c5eb5bf",
  measurementId: "G-BRRZMQGZ7F"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;