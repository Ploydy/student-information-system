import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
  const [user, setUser] = useState({ userId: 1 });

  const login = () => {
    setUser({userId: 1});
    /* setUser((prevState) => [...prevState, {user, userData}]); */
  };
  const logout = () => {
    setUser({});
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthContextProvider;
