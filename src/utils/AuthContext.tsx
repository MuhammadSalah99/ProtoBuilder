import React, { createContext, useContext, useState, ReactNode } from 'react';
interface AuthContextProps {
  userToken: string | null;
  setUserToken: (token: string | null) => void;
}

const initialAuthContext: AuthContextProps = {
  userToken: null,
  setUserToken: () => {}
};

export const AuthContext = createContext<AuthContextProps>(initialAuthContext);

export const useAuth = () => useContext(AuthContext);
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userToken, setUserToken] = useState<string | null>(null);

  return (
    <AuthContext.Provider value={{ userToken, setUserToken }}>
      {children}
    </AuthContext.Provider>
  );
};


