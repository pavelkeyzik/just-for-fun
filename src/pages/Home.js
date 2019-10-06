import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import { Terminal } from './home/Terminal';
import { projectName } from '../config';

import './Home.css';

export default function Home() {
  return (
    <div>
			<Terminal />
			<main className="Home__main">
				<h2>Welcome! You are in {projectName} project!</h2>
				<p>Now you can click on the button below to go on the Places page</p>
				<Button tag={Link} to="/places" color="primary" outline block>View places</Button>
			</main>
    </div>
  );
}
