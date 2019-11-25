import React from 'react';
import { Card, CardTitle, CardSubtitle } from 'reactstrap';

import styles from './PlaceCard.module.css';
import { IPlace } from '../../../../types';

export interface IPlaceCardProps {
  information: IPlace;
}

export function PlaceCard({ information }: IPlaceCardProps): JSX.Element {
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
