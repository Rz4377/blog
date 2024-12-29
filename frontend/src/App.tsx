import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Header } from './components/Header';
import { BlogPost } from './components/design/BlogPost';

import { MobileNavigation } from './components/MobileNavigation';
import { HomePage } from './pages/HomePage';
import { BlogPage } from './pages/BlogPage';
import { AdminPage } from './pages/AdminPage';
import { AuthPage } from './pages/AuthPage';
import { useTheme } from './context/ThemeContext';

export default function App() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className={`min-h-screen min-w-screen ${
          isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
        }`}>
          <Header />
          <main className="pt-16 pb-16">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/sample" element={<BlogPost />} />
              <Route path="/auth" element={<AuthPage />} />
              <Route
                path="/admin"
                element={
                  <ProtectedRoute>
                    <AdminPage />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>
          <MobileNavigation />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}