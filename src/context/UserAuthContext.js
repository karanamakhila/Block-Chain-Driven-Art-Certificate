import { createContext, useEffect,useState,useContext } from "react";
import {auth} from "./firebase";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged,signInWithPopup,GoogleAuthProvider,} from "firebase/auth";

const userAuthContext = createContext();

export function UserAuthContextProvider({children}){
    const [user,setUser] = useState("");
        function signUp(email,password){
            return createUserWithEmailAndPassword(auth,email,password);
        }
        function logIn(email,password){
            // console.log("Email",email);
            return signInWithEmailAndPassword(auth,email,password);
        }
        function logOut(){
            return signOut(auth);
        }
        function googleSignIn(){
            const googleAuthProvider=new GoogleAuthProvider();
            return signInWithPopup(auth,googleAuthProvider);
        }
        useEffect(()=>{
            const unsubscribe=onAuthStateChanged(auth,(currentuser)=>{
                setUser(currentuser);
            });
            return ()=>{
                unsubscribe();
            };
        },[]);
        return <userAuthContext.Provider value={{user,signUp,logIn,logOut,googleSignIn}}>{children}</userAuthContext.Provider>
}

export function useUSerAuth(){
    return useContext(userAuthContext);
}