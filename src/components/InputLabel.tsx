import React from 'react';

import './InputLabel.css';

export interface IInputLabel {
  children: React.ReactNode;
}

export function InputLabel({ children }: IInputLabel) {
  return <label className="InputLabel">{children}</label>;
}
