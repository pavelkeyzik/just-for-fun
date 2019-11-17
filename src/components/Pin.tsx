import React from 'react';

import { ReactComponent as PinIcon } from '../images/pin.svg';

import styles from './Pin.module.css';

export function Pin(): JSX.Element {
  return <PinIcon className={styles.pin} />;
}
