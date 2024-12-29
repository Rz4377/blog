import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type?:string;
  required?:boolean;
  value?:string | number;
  onChange:(event: React.ChangeEvent<HTMLInputElement>)=> void
}

export function Input({ label, id, className = '', ...props }: InputProps) {
  return (
    <div>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-1">
          {label}
        </label>
      )}
      <input
        id={id}
        className={`block w-full rounded-md bg-gray-800 border-gray-700 text-gray-100 shadow-sm 
          focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${className}`}
        {...props}
      />
    </div>
  );
}