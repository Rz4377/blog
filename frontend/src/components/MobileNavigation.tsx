import { NavLink } from 'react-router-dom';
import { Home, BookOpen, Settings } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function MobileNavigation() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const navItems = [
    { to: '/', icon: Home, label: 'Home' },
    { to: '/blog', icon: BookOpen, label: 'Blog' },
    { to: '/admin', icon: Settings, label: 'Admin' },
  ];

  return (
    <nav
      className={`fixed bottom-0 left-0 right-0 border-t ${
        isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'
      } md:hidden`}
    >
      <div className="flex justify-around items-center h-16">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => `
              flex flex-col items-center px-3 py-2 text-sm ${
                isActive
                  ? isDark
                    ? 'text-blue-400'
                    : 'text-blue-600'
                  : isDark
                  ? 'text-gray-400 hover:text-blue-300'
                  : 'text-gray-500 hover:text-blue-500'
              }
            `}
          >
            <Icon
              className={`h-6 w-6 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}
            />
            <span className="mt-1">{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}