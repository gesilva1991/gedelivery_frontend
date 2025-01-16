import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
  user: any; // Tipo do usuário autenticado
  login: (userData: any) => void;
  logout: () => void;
  isGoogleLogin: boolean; // Verifica se o login foi feito com o Google
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any | null>(null);
  const [isGoogleLogin, setIsGoogleLogin] = useState(false); // Estado para verificar se o login foi via Google


  const login = (userData: any) => {
    setUser(userData); // Armazena o usuário
    // setIsGoogleLogin(isGoogle); // Define se o login foi com o Google
  };

  const logout = () => {
    setUser(null); // Limpa o usuário
    setIsGoogleLogin(false); // Limpa o estado do login
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isGoogleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
