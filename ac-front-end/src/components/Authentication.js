import { createContext, useContext, useState } from "react";

export const AuthenticationContext = createContext();

const AuthenticationProvider = ({ children }) => {
  // State for Authentication
  const [user, setUser] = useState("Jorge");
  const [userType, setUserType] = useState("Agent");
  //const [user, setUser] = useState(null);

  // Login
  const login = (user, userType) => {
    setUser(user);
    setUserType(userType);
  };

  // Logout
  const logout = (user) => {
    setUser(null);
  };

  return (
    <AuthenticationContext.Provider value={[user, userType, login, logout]}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationProvider;
