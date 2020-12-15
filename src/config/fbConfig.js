import Rebase from 're-base';
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCN-yJRir93PIyo1U3hcvkLJ18BgM5jP0U",
  authDomain: "project-list-app-186ec.firebaseapp.com",
  databaseURL: "https://project-list-app-186ec.firebaseio.com",
  projectId: "project-list-app-186ec",
  storageBucket: "project-list-app-186ec.appspot.com",
  messagingSenderId: "583050559277",
  appId: "1:583050559277:web:002baf16cc24b7695a1da4",
  measurementId: "G-Q7L8CHCJMF",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });
const base = Rebase.createClass(firebase.firestore());

export default base;
