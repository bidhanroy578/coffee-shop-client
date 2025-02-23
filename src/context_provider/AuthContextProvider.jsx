import PropTypes from "prop-types";
import { AuthContext } from "./AuthContext";
import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/__config__";

const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [linkState, setLinkState] = useState(null)

    const registerWithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginWithEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout = () => {
        return signOut(auth)
    }
    const loginWithGoogle = () => {
        const provider = new GoogleAuthProvider()
        return signInWithPopup(auth, provider)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => { unsubscribe() }
    }, [])

    const userData = { linkState, setLinkState, user, loading, registerWithEmail, loginWithGoogle, loginWithEmail, logout }


    return (
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    );
};
AuthContextProvider.propTypes = {
    children: PropTypes.node
}
export default AuthContextProvider;