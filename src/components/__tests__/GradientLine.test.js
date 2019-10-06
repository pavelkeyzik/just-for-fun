import React from 'react';
import ReactDOM from 'react-dom';
import { GradientLine } from '../GradientLine';

test('should render one GradientLine component', () => {
	const container = document.createElement('div');
	ReactDOM.render(<GradientLine />, container);
	const element = container.querySelectorAll('.GradientLine__container');
	
	expect(element.length).toBe(1);
})
