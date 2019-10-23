import React from 'react';

import { Input } from '../../components/Input';
import { Button } from './components/Button';

import './CreateNewPlace.css';

function CreateNewPlace() {
  function handleAddNewPlace(event) {
    event.preventDefault();
  }

  return (
    <React.Fragment>
      <div className="Page__short-info">
        <h2>Create new place</h2>
      </div>
      <section className="CreateNewPlace__page-grid">
        <form
          className="CreateNewPlace__form-grid"
          onSubmit={handleAddNewPlace}
        >
          <label>Place name</label>
          <Input type="text" placeholder="Enter name of new place" />
          <label>Place address</label>
          <Input type="text" placeholder="Enter name of new place" />
          <Button type="submit">Save place</Button>
        </form>
        <div className="CreateNewPlace__map-container">
          Here will be a map...
        </div>
      </section>
    </React.Fragment>
  );
}

export default CreateNewPlace;
