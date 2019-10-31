import React from 'react';
import { Card, CardTitle, CardSubtitle } from 'reactstrap';

import styles from './PlaceCard.module.css';
import { Place } from '../../../../types';

export interface PlaceCardProps {
  information: Place;
}

export function PlaceCard({ information }: PlaceCardProps): JSX.Element {
  return (
    <article className={styles.root}>
      <Card className={styles.card}>
        <CardTitle>
          <h3 aria-label={information.title + ' place'}>{information.title}</h3>
        </CardTitle>
        <CardSubtitle>{information.address}</CardSubtitle>
      </Card>
    </article>
  );
}
