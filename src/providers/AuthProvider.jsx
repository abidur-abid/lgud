'use client'
import AuthContext from '@/contexts/AuthContext';
import auth, { googleProvider } from '@/firebase/firebase.auth';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { useEffect, useState } from 'react';

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const profileUpdate = async(updateUser={}) => {
        setLoading(true);
        await updateProfile(auth.currentUser, updateUser);
        setUser((preUser) => ({...preUser, updateUser}));
    }

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (user)=>{
            setUser(user)
            setLoading(false)

        });

        ()=>{
            unsubscribe();
        };

    }, [])


    const value = {user, loading, createUser, login, profileUpdate, googleLogin, logOut}

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};

export default AuthProvider;