import React from 'react';

import './Terminal.css';

export function Terminal(): JSX.Element {
  return (
    <div className="Terminal">
      <div className="Terminal-header">
        <div className="Terminal-buttons">
          <div className="Terminal-button Terminal-button_close" />
          <div className="Terminal-button Terminal-button_minimize" />
          <div className="Terminal-button Terminal-button_fullscreen" />
        </div>
      </div>
      <div className="Terminal-content" aria-hidden="true">
        <code>
          <b>~root:</b> wget `React and GraphQL`
          <br />
          <b>~root:</b> node little-bit-fun.js
          <br />
          {'Fun started '}
          <span className="Terminal-content_success">succesfully</span>
          {" on your heart's port..."}
        </code>
      </div>
    </div>
  );
}
