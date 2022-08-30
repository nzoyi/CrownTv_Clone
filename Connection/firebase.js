import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBeKJKr0JoDjnUmN1eUkBN7SmAYOSUpC40",
  authDomain: "datacenter3-projects.firebaseapp.com",
  projectId: "datacenter3-projects",
  storageBucket: "datacenter3-projects.appspot.com",
  messagingSenderId: "124225142030",
  appId: "1:124225142030:web:02d2d49036b1fdc82ceb5f",
  measurementId: "G-HNC7NTSRK2",
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
