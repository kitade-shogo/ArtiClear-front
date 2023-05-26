import { createContext, useContext } from 'react'
import useFirebaseAuth from '../hooks/useFirebaseAuth'

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const { currentUser, loading, loginWithGoogle, logout } = useFirebaseAuth()

    return (
        <AuthContext.Provider
            value={{ currentUser, loading, loginWithGoogle, logout }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)
