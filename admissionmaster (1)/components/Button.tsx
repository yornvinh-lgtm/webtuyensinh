
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  fullWidth?: boolean;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  fullWidth = false,
  disabled = false,
  className = '',
  type = 'button'
}) => {
  const baseStyles = "px-6 py-3 rounded-custom font-semibold transition-all duration-200 flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-cta text-primary hover:opacity-90 active:scale-95",
    secondary: "bg-ctaSecondary text-white hover:opacity-90 active:scale-95",
    outline: "border border-border text-white hover:bg-white/5 active:scale-95",
    ghost: "text-textSecondary hover:text-white active:scale-95",
    danger: "bg-error text-white hover:opacity-90 active:scale-95"
  };

  const widthStyle = fullWidth ? "w-full" : "";
  const disabledStyle = disabled ? "opacity-50 cursor-not-allowed grayscale" : "";

  return (
    <button 
      type={type}
      onClick={onClick} 
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${disabledStyle} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
