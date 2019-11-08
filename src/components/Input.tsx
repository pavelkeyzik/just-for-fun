import React from 'react';

import styles from './Input.module.css';

export function Input(props: React.HTMLProps<HTMLInputElement>): JSX.Element {
  return <input data-testid="input" className={styles.input} {...props} />;
}
