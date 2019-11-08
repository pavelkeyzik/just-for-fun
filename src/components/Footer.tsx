import React from 'react';

import styles from './Footer.module.css';
import { Container } from 'reactstrap';

export function Footer(): JSX.Element {
  return (
    <div className={styles.footerContainer}>
      <Container>
        <footer className={styles.footer}>Make fun with love</footer>
      </Container>
    </div>
  );
}
