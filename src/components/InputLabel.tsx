import React from 'react';

import './InputLabel.css';

export interface InputLabelProps {
  children: React.ReactNode;
}

export function InputLabel({ children }: InputLabelProps): JSX.Element {
  return <label className="InputLabel">{children}</label>;
}
