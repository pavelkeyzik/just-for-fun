import React from 'react';

import styles from './Button.module.css';

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: React.ReactNode;
  type: 'submit' | 'reset' | 'button';
}

export function Button({ children, ...props }: ButtonProps): JSX.Element {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
}
