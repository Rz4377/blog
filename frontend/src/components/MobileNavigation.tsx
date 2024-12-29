import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, BookOpen, Settings } from 'lucide-react';

export function MobileNavigation() {
  const navItems = [
    { to: '/', icon: Home, label: 'Home' },
    { to: '/blog', icon: BookOpen, label: 'Blog' },
    { to: '/admin', icon: Settings, label: 'Admin' }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700 md:hidden">
      <div className="flex justify-around items-center h-16">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => `
              flex flex-col items-center px-3 py-2 text-sm
              ${isActive ? 'text-blue-400' : 'text-gray-400 hover:text-blue-300'}
            `}
          >
            <Icon className="h-6 w-6" />
            <span className="mt-1">{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}