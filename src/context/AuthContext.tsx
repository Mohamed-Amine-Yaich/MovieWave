import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { loginService } from '../services/movie-wave-api/movies-wave-api-Service';

interface AuthContextProps {
    isLoggedIn: boolean;
    login: (email: string, password: string) => void
    logout: () => void;
    authToken: string | undefined
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [user, setUser] = useState<{ name: string, email: string, password: string }>()
    const [authToken, setAuthToken] = useState<string | undefined>();

    const login = async (email: string, password: string) => {
        const res = await loginService({ email, password })
        console.log('res', res)
        return res
    };

    const logout = () => {
        setIsLoggedIn(false);
        // Implement your logout logic here
    };

    //trigger authentication cause we don't have a login screen
    useEffect(() => {
        const triggerLogin = async () => {
            const res = await login('amine@gmail.com', '123456')
            if ('token' in res) {
                const authtoken = res.token as string
                console.log(res)
                setAuthToken(authtoken)
                setIsLoggedIn(true)
            }
        }
        triggerLogin()

    }, [])
    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout, authToken }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuthContext must be used within an AuthProvider');
    }
    return context;
};
