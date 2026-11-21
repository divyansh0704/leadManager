
import { createContext, useContext, useState, useEffect } from "react";
import { signupUser, loginUser, getCurrentUser, logoutUser, } from "../services/authServices";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const data = await getCurrentUser();
                setUser(data);
            } catch (error) {
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, []);


    const signup = async (userData) => {
        const data = await signupUser(userData);
        return data;
    };

    const logout = async () => {
        try {
            await logoutUser();
        } finally {
            setUser(null);
        }
    };
    const login = async (userData) => {
        const data = await loginUser(userData);
        setUser(data.user);
        return data;
    };

    return (
        <AuthContext.Provider value={{ user, setUser, signup, login, loading, setLoading,logout }}>
            {children}
        </AuthContext.Provider>
    );
};


export const useAuth = () => useContext(AuthContext);
