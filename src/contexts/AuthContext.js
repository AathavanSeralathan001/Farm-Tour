import React, { useContext, useEffect, useState } from 'react'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail, updateEmail, updatePassword} from 'firebase/auth';

 
import { auth } from '../firebase'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export default function AuthProvider({children}) {

const [currentUser, setCurrentUser] = useState("")
const [loading, setLoading] = useState(true)

function signup(email, password)
{
  
    return createUserWithEmailAndPassword(auth, email, password)
}

function login(email,password)
{
  return signInWithEmailAndPassword(auth, email, password)
}

function logout()
{
  return signOut(auth)
}

function resetPassword(email)
{
  return sendPasswordResetEmail(auth, email)
}

function updateEmailForCurrentUser(email)
{
   return updateEmail(currentUser, email)
}

 function updatePasswordForCurrentUser(password)
{
   return updatePassword(currentUser, password)
}

function googleSignIn()
{
  const googleAuthProvider = new GoogleAuthProvider();
  return signInWithPopup(auth,googleAuthProvider)
}

useEffect(() => {
   const unsubscribe =  onAuthStateChanged(auth, user => {
    setCurrentUser(user)   
    setLoading(false) })

    return unsubscribe
}, [])



const value = {
    currentUser,
    login,
    signup,
    logout,
    googleSignIn,
    resetPassword,
    updateEmail,
    updatePassword,
    updateEmailForCurrentUser,
    updatePasswordForCurrentUser,
   
}


  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
