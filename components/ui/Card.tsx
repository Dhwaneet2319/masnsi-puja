import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({ children, className = '', onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`
        bg-white rounded-[2rem] shadow-[0_10px_30px_rgba(0,0,0,0.05)] 
        border-b-8 border-r-4 border-black/5 
        transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_15px_35px_rgba(0,0,0,0.1)]
        overflow-hidden ${className}
        ${onClick ? 'cursor-pointer active:scale-95' : ''}
      `}
    >
      {children}
    </div>
  );
};