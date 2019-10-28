import React from 'react';
import { Spinner } from 'reactstrap';

import './AddNewPlaceSpinner.css';

interface IAddNewPlaceSpinner {
  message?: string;
}

export function AddNewPlaceSpinner({ message }: IAddNewPlaceSpinner) {
  return (
    <div className="AddNewPlaceSpinner__container">
      <Spinner type="grow" color="success" />
      <span className="AddNewPlaceSpinner__message">
        {message || 'Something is happening here...'}
      </span>
    </div>
  );
}
