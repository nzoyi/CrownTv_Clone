import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "your-firebase-api_key",
  authDomain: "your-firebase-url",
  databaseURL:
    "Your-Firebase_url",
  projectId: "your-project-name",
  storageBucket: "your-storage-bucket-name",
  messagingSenderId: "your-messaging-id",
  appId: "your-appId",
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
