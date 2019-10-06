import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Row, Col } from 'reactstrap';

import { PlaceCard } from './placesGrid/PlaceCard.js';

export const GET_PLACES = gql`
	query getPlaces {
		places {
			title
			address
			lat
			lng
		}
	}
`;

export function PlacesGrid({ places }) {
	const { data, error, loading } = useQuery(GET_PLACES);

	if (loading) {
		return <div>Places is loading</div>
	}

	return (
		<section>
			<Row>
				{data && data.places && data.places.map((place, index) => (
					<Col sm={{ size: "auto" }}>
						<PlaceCard key={index} information={place} />
					</Col>
				))}
			</Row>
		</section>
	);
}
