import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../Firebase";

const AuthContext= createContext()

export function AuthContextprovider({children}){
    const [user, setUser]=useState({})
    
    function SignUp(email, password){
        createUserWithEmailAndPassword(auth, email, password)
    }
    function logIn(email,password){
        signInWithEmailAndPassword(auth,email,password)
    }

    function LogOut(){
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe =onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
        });
        return(()=>{
            unsubscribe();
        })
    })

    return(
        <AuthContext.Provider value={{SignUp, user, logIn, LogOut}}>
            {children}
        </AuthContext.Provider>
    )
}


export function UserAuth(){
    return useContext(AuthContext)
}