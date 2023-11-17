import React, { createContext } from 'react'
import auth from '../firebase.init'
import { GoogleAuthProvider, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { } from "firebase/auth";

export const Context = createContext()

const UrlContext = ({ children }) => {
    const url = 'https://unique-shop-server.onrender.com'
    // const url = 'http://localhost:5000'
    //********** Create account
    const createAccountWithEmail = async (email, password, name, mobile) => {
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(auth.currentUser, {
                displayName: name, phoneNumber: mobile
            })
            return { success: true, user, message: 'Account Created Successfully' }
        }
        catch (err) {
            return { success: false, message: err.code }
        }
    }

    //********** Sign in with email
    const loginAccount = async (email, password) => {
        try {
            const user = await signInWithEmailAndPassword(auth, email, password);
            return { success: true, message: "Login Successful", user };
        }
        catch (err) {
            return { success: false, message: err.code }
        }
    }

    //Google sign in
    const provider_google = new GoogleAuthProvider();
    const googleSignIn = async () => {
        try {
            const user = await signInWithPopup(auth, provider_google);
            return { user, success: true, message: "Login successful" }
        }
        catch (err) {
            return { success: false, message: err.code }
        }

    }


    return (
        <Context.Provider value={{ url, createAccountWithEmail, loginAccount, googleSignIn }}>{children}</Context.Provider>
    )
}

export default UrlContext