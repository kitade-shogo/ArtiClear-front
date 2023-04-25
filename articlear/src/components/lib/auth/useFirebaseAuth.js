import { useState, useEffect } from 'react';
import { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../../../firebase';

const useFirebaseAuth = () => { 
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const loginWithGoogle = async() => {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);

        if (result.user) {
            const user = result.user;
            return user;
        }
    }

    const clear = () => { 
        setCurrentUser(null);
        setLoading(false);
    }

    const logout = async () => { 
        await signOut(auth);
        clear();
    }

    const nextOrObserver = (user) => {
        if (!user) {
            setLoading(false);
            setCurrentUser(null);
            return;
        }
        setLoading(true);
        setCurrentUser(user);
        setLoading(false);
    }
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, nextOrObserver);
        return () => unsubscribe();
    }, []);

    return {
        currentUser,
        loading,
        loginWithGoogle,
        logout
    }
}

export default useFirebaseAuth;