import React from 'react';
import { Spinner } from 'reactstrap';

import styles from './AddNewPlaceSpinner.module.css';

interface IAddNewPlaceSpinnerProps {
  message?: string;
}

export function AddNewPlaceSpinner({
  message,
}: IAddNewPlaceSpinnerProps): JSX.Element {
  return (
    <div className={styles.container}>
      <Spinner type="grow" color="success" />
      <span className={styles.message}>
        {message || 'Something is happening here...'}
      </span>
    </div>
  );
}
