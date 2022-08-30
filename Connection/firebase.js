import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBeKJKr0JoDjnUmN1eUkBN7SmAYOSUpC40",
  authDomain: "datacenter3-projects.firebaseapp.com",
  databaseURL:
    "https://datacenter3-projects-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "datacenter3-projects",
  storageBucket: "datacenter3-projects.appspot.com",
  messagingSenderId: "124225142030",
  appId: "1:124225142030:web:2635c3c0b6add7152ceb5f",
  measurementId: "G-1RC90VT7GB",
};

let app;

if (firebase.apps.length == 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
const db = app.database();

export { auth };
export { firebase };
export { db };
