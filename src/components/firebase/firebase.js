import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyA4KTcdnNFEo9PLLLzbqDq8WeEJQN1c5JM",
  authDomain: "login-auth-react-e630d.firebaseapp.com",
  databaseURL: "https://login-auth-react-e630d.firebaseio.com",
  projectId: "login-auth-react-e630d",
  storageBucket: "login-auth-react-e630d.appspot.com",
  messagingSenderId: "322784760003",
  appId: "1:322784760003:web:d759b719779c5f74ddd276",
});

export const auth = app.auth();
export default app;
