import React from 'react';
import { Card, CardTitle, CardSubtitle } from 'reactstrap';

import './PlaceCard.css';

export function PlaceCard({ information }) {
  return (
    <article className="PlaceCard__container">
      <Card className="PlaceCard__card">
        <CardTitle className="PlaceCard__card-title">
          <h3 aria-label={information.title + ' place'}>{information.title}</h3>
        </CardTitle>
        <CardSubtitle className="PlaceCard__card-address">
          {information.address}
        </CardSubtitle>
      </Card>
    </article>
  );
}
