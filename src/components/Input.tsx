import React from 'react';

import './Input.css';

export function Input({ ...props }): JSX.Element {
  return <input className="Input" {...props} />;
}
