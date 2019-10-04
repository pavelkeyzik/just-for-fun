import React from 'react';
import { Container } from 'reactstrap';

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
        </main>
        <Footer />
      </Container>
    </div>
  );
}
