import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import app from '../../firebase/firebase.config';


export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
   const [user,setUser]= useState(null)
   const [loading,setLoading]=useState(true)
   
   const createUser = (email,password)=>{
      setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
   }

   const logIn=(email,password)=>{
      setLoading(true)
     return signInWithEmailAndPassword(auth, email, password)
   }
   const googleProvider = new GoogleAuthProvider();
   const googleLogIn =()=>{
      setLoading(true)
    return signInWithPopup(auth,googleProvider)
   }
   const  updateUser=(userInfo)=>{
      setLoading(true)
      return updateProfile(auth.currentUser,userInfo)
   }
   const logOut =()=>{
      setLoading(true)
    return signOut(auth)
   }
   useEffect(()=>{
     const unscribe= onAuthStateChanged(auth,currentUser=>{
        console.log('user observing')
        setUser(currentUser)
        setLoading(false)
      })
      return ()=> unscribe();
   },[])
   const authInfo={
        user,
        loading,
        createUser,
        updateUser,
        logIn,
        logOut,
        googleLogIn,
        
   }
    return (
        <AuthContext.Provider value={authInfo}>
           { children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;