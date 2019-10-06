import React from 'react';
import { Button, Container } from 'reactstrap';

import { NavigationMenu } from './home/NavigationMenu';
import { GradientLine } from './home/GradientLine';

import { Terminal } from './home/Terminal';
import { projectName } from '../config';

import './Home.css';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <div>
      <NavigationMenu />
      <GradientLine />
      <Container>
        <Terminal />
        <main className="Home__main">
          <h2>Welcome! You are in {projectName} project!</h2>
					<p>Now you can click on the button below to go on the Places page</p>
					<Button color="primary" outline block>View places</Button>
        </main>
        <Footer />
      </Container>
    </div>
  );
}
