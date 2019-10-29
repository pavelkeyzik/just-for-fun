import React from 'react';

import { ReactComponent as PinIcon } from '../images/pin.svg';

import './Pin.css';

export function Pin(): JSX.Element {
  return <PinIcon className="Pin__icon" />;
}
