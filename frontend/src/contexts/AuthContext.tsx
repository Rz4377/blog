import React, { createContext, useContext, useState } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading , setIsLoading] = useState(false);
  const hardcodedPassword = "123"; // Replace with your password

  const login = async (password: string) => {
    setIsLoading(true);
    if (password === hardcodedPassword) {
      setIsAuthenticated(true);
      setIsLoading(false);
    } else {
      setIsLoading(false);
      throw new Error("Incorrect password");
    }
  };

  const logout = () => {
    setIsLoading(true);
    setIsAuthenticated(false);
    setIsLoading(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout , isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}