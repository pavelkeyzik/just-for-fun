import React from 'react';

import { Button } from '../../components/Button';
import { InputLabel } from '../../components/InputLabel';
import { Input } from '../../components/Input';

export function AddPlaceForm() {
  return (
    <div
      style={{
        border: '4px solid #666',
        padding: '20px 40px 40px',
        background: '#fafafa',
        width: 400,
      }}
    >
      <h2>Add new place</h2>
      <form
        style={{
          display: 'grid',
          gridGap: 20,
        }}
      >
        <InputLabel>
          <span>Place name:</span>
          <Input type="text" name="name" />
        </InputLabel>
        <InputLabel>
          <span>Place address:</span>
          <Input type="text" name="address" />
        </InputLabel>
        <InputLabel>
          <span>Latitude coordinate:</span>
          <Input type="number" name="lat" />
        </InputLabel>
        <InputLabel>
          <span>Longitude coordinate:</span>
          <Input type="number" name="lng" />
        </InputLabel>
        <Button type="submit" style={{ marginTop: 20 }}>
          Add new place
        </Button>
      </form>
    </div>
  );
}
