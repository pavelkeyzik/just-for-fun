import React from 'react';

import styles from './ReachedGoals.module.css';

export function ReachedGoals(): JSX.Element {
  return (
    <div className={styles.container}>
      {'100+ commits, 2 stars, and 7 contributors'}
      <span
        className={styles.partyIcon}
        role="img"
        aria-label="Party Popper Emoji"
      >
        🎉
      </span>
    </div>
  );
}
