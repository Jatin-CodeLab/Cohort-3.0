import { Children, createContext, useContext, useState } from "react";

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [accessToken, setAccessToken] = useState(null)
    const [loading, setLoading] = useState(true)

    const value = {
        user,
        accessToken,
        loading,
        isAuthenticat: !!user,
        setUser,
        setAccessToken,
        setLoading
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    
    if (!context) {
        throw new Error('useAuth must br used within an Authprovider')
    }
    return context
}

export default AuthContext