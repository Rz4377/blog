import { Link } from 'react-router-dom';
import { Dumbbell } from 'lucide-react';
import { ThemeToggle } from './design/ThemeToggle';
import { useTheme } from '../context/ThemeContext';

export function Header() {
  const { theme } = useTheme();
  return (
    <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 text-white">
            <Dumbbell className="h-8 w-8" />
            <h1 className="text-2xl font-bold">Sport Fusion</h1>
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className="text-white hover:text-blue-200">Home</Link>
              </li>
              <li>
                <Link to="/blog" className="text-white hover:text-blue-200">Blog</Link>
              </li>
              <li>
                <Link to="/admin" className="text-white hover:text-blue-200">Admin</Link>
              </li>
              <li>
    
              </li>
            </ul>
          </nav>
          <div className={` transition-colors ${
                theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
              }`}>
                <ThemeToggle />
              </div>
        </div>
      </div>
    </header>
  );
}