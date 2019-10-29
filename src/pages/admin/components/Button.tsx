import React from 'react';

import './Button.css';

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: React.ReactNode;
  type: 'submit' | 'reset' | 'button';
}

export function Button({ children, ...props }: ButtonProps): JSX.Element {
  return (
    <button className="Button" {...props}>
      {children}
    </button>
  );
}
