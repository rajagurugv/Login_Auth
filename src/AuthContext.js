import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [error, setError] = useState('');

    const login = (email, password) => {

        if (email === 'rajagurugv1998@gmail.com' && password === '86758171') {

            setError('Login Successfull');

        } else {
            setError('Invalid username or password');
        }
    };


    return (
        <AuthContext.Provider value={{ error, login, }}>
            {children}
        </AuthContext.Provider>
    );
};
