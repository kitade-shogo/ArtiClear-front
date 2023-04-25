import { useState, useEffect } from 'react'
import {
    signInWithPopup,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
} from 'firebase/auth'
import { auth } from '../../../firebase'

const useFirebaseAuth = () => {
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const loginWithGoogle = async () => {
        const provider = new GoogleAuthProvider()
        const result = await signInWithPopup(auth, provider)
        
        // SingInWithPopupの返り値のuserを取得
        if (result.user) {
            const user = result.user
            return user
        }
    }

    const clear = () => {
        setCurrentUser(null)
        setLoading(false)
    }

    // SignOutでFirebaseの認証を解除
    const logout = async () => {
        await signOut(auth)
        clear()
    }

    //
    const nextOrObserver = (user) => {
        if (!user) {
            setLoading(false)
            setCurrentUser(null)
            return
        }
        setLoading(true)
        setCurrentUser(user)
        setLoading(false)
    }

    // Firebaseのログイン状態の監視
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, nextOrObserver)
        return () => unsubscribe()
    }, [])

    return {
        currentUser,
        loading,
        loginWithGoogle,
        logout,
    }
}

export default useFirebaseAuth
