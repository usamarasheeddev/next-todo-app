import { createContext } from "react";
import React from "react";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = React.useState('');
    const [authenticated, setAuthenticated] = React.useState(false);
    return <AuthContext.Provider value={{ user, setUser, authenticated, setAuthenticated }}>
        {children}</AuthContext.Provider>

}

export { AuthContext, AuthProvider }