import React from 'react';

import './Button.css';

interface IButtonProps {
  children: React.ReactNode;
}

export function Button({ children, ...props }: IButtonProps) {
  return (
    <button className="Button" {...props}>
      {children}
    </button>
  );
}
