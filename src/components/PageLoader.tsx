import React from 'react';
import { Spinner, Container, Row, Col } from 'reactstrap';

import styles from './PageLoader.module.css';

export interface PageLoaderProps {
  message: string;
}

export function PageLoader({ message }: PageLoaderProps): JSX.Element {
  return (
    <Container>
      <Row>
        <Col>
          <div className={styles.loader}>
            <Spinner type="grow" color="success" />
            <b>{message}</b>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
