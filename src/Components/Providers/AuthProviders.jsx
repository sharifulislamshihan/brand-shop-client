import { createContext, useEffect, useState } from "react";
import app from "../../Firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app)

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // logout
    const logOut = () =>{
        return signOut(auth)
    }

    // sign in
    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // state change onAuth
    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
            console.log(currentUser);
            setUser(currentUser);
        });
        return () =>{
            unSubscribe();
        }
    }, [])

    const authInfo ={
        user,
        createUser,
        logOut,
        signIn,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;