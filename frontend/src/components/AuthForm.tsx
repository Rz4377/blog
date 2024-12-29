import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Input } from './ui/Input';
import { Button } from './ui/Button';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export function AuthForm() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      await login(password);
      navigate('/admin'); // Assuming login works for both sign-up and sign-in
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  return (
    <div
      className={`max-w-md w-full space-y-8 ${
        isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      } p-6 rounded-lg shadow-lg`}
    >
      <div>
        <h2
          className={`text-3xl font-bold text-center ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}
        >
          {isSignUp ? 'Create an account' : 'Sign in to your account'}
        </h2>
      </div>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        {error && (
          <div
            className={`text-sm text-center ${
              isDark ? 'text-red-400' : 'text-red-600'
            }`}
          >
            {error}
          </div>
        )}
        <Input
          label="Email address"
          type="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError('');
          }}
          className={`${
            isDark
              ? 'bg-gray-800 text-white border-gray-600'
              : 'bg-gray-100 text-gray-900 border-gray-300'
          } h-9 p-5`}
        />
        <Input
          label="Password"
          type="password"
          required
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            if (error) setError('');
          }}
          className={`${
            isDark
              ? 'bg-gray-800 text-white border-gray-600'
              : 'bg-gray-100 text-gray-900 border-gray-300'
          } h-9 p-5`}
        />
        <Button
          type="submit"
          isLoading={isLoading}
          className={`w-full ${
            isDark
              ? 'bg-blue-600 hover:bg-blue-500'
              : 'bg-blue-500 hover:bg-blue-600'
          } text-white`}
        >
          {isLoading ? 'Processing...' : isSignUp ? 'Sign up' : 'Sign in'}
        </Button>
      </form>
      <div className="text-center">
        <button
          type="button"
          onClick={() => {
            setIsSignUp((prev) => !prev);
            setError(''); // Clear error when switching modes
          }}
          className={`${
            isDark
              ? 'text-blue-400 hover:text-blue-300'
              : 'text-blue-500 hover:text-blue-400'
          }`}
        >
          {isSignUp
            ? 'Already have an account? Sign in'
            : "Don't have an account? Sign up"}
        </button>
      </div>
    </div>
  );
}