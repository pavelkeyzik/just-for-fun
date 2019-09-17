import React from 'react';

import './Button.css';

export function Button({ children, ...props }) {
  return (
    <button className="Button" {...props}>
      {children}
    </button>
  );
}
