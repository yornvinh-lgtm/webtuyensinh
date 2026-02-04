
import React from 'react';

interface InputProps {
  label?: string;
  placeholder?: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  className?: string;
  maxLength?: number;
}

const Input: React.FC<InputProps> = ({ 
  label, 
  placeholder, 
  type = 'text', 
  value, 
  onChange, 
  error,
  className = '',
  maxLength
}) => {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && <label className="text-sm text-textSecondary font-medium ml-1">{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        className={`bg-card border ${error ? 'border-error' : 'border-border'} text-white rounded-custom px-4 py-3 placeholder:text-placeholder focus:outline-none focus:border-cta transition-colors`}
      />
      {error && <span className="text-xs text-error ml-1">{error}</span>}
    </div>
  );
};

export default Input;
