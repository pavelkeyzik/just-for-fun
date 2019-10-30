import React from 'react';

import './ReachedGoals.css';

export function ReachedGoals(): JSX.Element {
  return (
    <div className="ReachedGoals__container">
      {'100+ commits, 2 stars, and 7 contributors'}
      <span
        className="ReachedGoals__icon"
        role="img"
        aria-label="Party Popper Emoji"
      >
        🎉
      </span>
    </div>
  );
}
