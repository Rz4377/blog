import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  // const { isAuthenticated , isLoading} = useAuth();

  // if (isLoading) {
  //   return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  // }

  // if (!isAuthenticated) {
  //   return <Navigate to="/auth" />;
  // }

  return <>{children}</>;
}