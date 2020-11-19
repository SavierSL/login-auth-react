import React, { useState, useEffect, useContext } from "react";
import { auth } from "../firebase/firebase";

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  // toCheck the current User or to put the currentUser
  const [currentUser, setCurrentUser] = useState("");

  //to create a new log in data
  const signUp = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const logIn = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const logOut = () => {
    return auth.signOut();
  };

  //when the auth has been change this 'un' will run and will set the user to currentUser and should be in useEffect and return to unsubscribe when umounted
  useEffect(() => {
    const un = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return un;

    //will run only once
  }, []);

  // initialValue
  const value = {
    currentUser,
    signUp,
    logIn,
    logOut,
  };

  //our provider
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

//react hooks
export const useAuth = () => useContext(AuthContext);
