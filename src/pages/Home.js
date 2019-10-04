import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Container } from 'reactstrap';

import { ErrorMessage } from '../components/ErrorMessage';

import { AddPlaceForm } from './home/AddPlaceForm';
import { Card } from './home/Card';

import { GET_PLACES } from '../utils/queries';
import { PageLoader } from '../components/PageLoader';
import { NavigationMenu } from './home/NavigationMenu';
import { GradientLine } from './home/GradientLine';

import { Terminal } from './home/Terminal';
import { projectName } from '../config';

import './Home.css';
import { Footer } from '../components/Footer';

export default function Home() {
  const { data, loading, error } = useQuery(GET_PLACES);

  if (loading) {
    return <PageLoader message="Loading home page" />;
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }

  return (
    <div>
      <NavigationMenu />
      <GradientLine />
      <Container>
        <Terminal />
        <main className="Home__main">
          <h2>Welcome! You are in {projectName} project!</h2>
        </main>
        <Footer />
      </Container>
      {/* <div style={{ display: 'flex', alignItems: 'center' }}>
        <PoolingStatus isPooling={isPoolingEnabled} />
        <Button onClick={handleStartPooling}>Start pooling</Button>
        <Button onClick={handleStopPooling}>Stop pooling</Button>
        <span style={{ marginLeft: 10 }}>
          (Will make request every {poolingTimeMs}ms)
        </span>
      </div>
      <div>
        <b style={{ padding: 20 }}>Do you wanna make request manually?</b>
        <Button>
          <span role="img" aria-label="Plea emoji" style={{ marginRight: 10 }}>
            🙏🏼
          </span>
          <span onClick={handleRepeatQuery}>Request data again</span>
        </Button>
      </div> */}
      {/* <AddPlaceForm /> */}
      {/* <hr />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gridGap: 20,
        }}
      >
        {data &&
          data.places &&
          data.places.map((place, placeIndex) => (
            <Card
              key={placeIndex}
              title={place.title}
              address={place.address}
              lat={place.lat}
              lng={place.lng}
            />
          ))}
      </div> */}
    </div>
  );
}
