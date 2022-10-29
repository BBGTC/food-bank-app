import { useContext, createContext } from "react";
import { useAuth, UseAuth } from "../hooks/useAuth";

interface Props {
  children: React.ReactNode;
}

const AuthContext = createContext<UseAuth>(undefined!);

const AuthProvider = ({ children }: Props) => {
  const {isAuthenticated, setIsAuthenticated} = useAuth(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};


const useAuthContext = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuthContext };