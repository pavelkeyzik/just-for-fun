import React from 'react';
import classNames from 'classnames';

import styles from './Terminal.module.css';

export function Terminal(): JSX.Element {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <div className={styles.buttons}>
          <div className={classNames([styles.button, styles.close])} />
          <div className={classNames([styles.button, styles.minimize])} />
          <div className={classNames([styles.button, styles.fullscreen])} />
        </div>
      </div>
      <div className={styles.content} aria-hidden="true">
        <code>
          <b>~root:</b> wget `React and GraphQL`
          <br />
          <b>~root:</b> node little-bit-fun.js
          <br />
          {'Fun started '}
          <span className={styles.contentSuccess}>succesfully</span>
          {" on your heart's port..."}
        </code>
      </div>
    </div>
  );
}
