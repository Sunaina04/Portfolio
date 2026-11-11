import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the hero with name and current role', () => {
  window.history.pushState({}, '', '/Portfolio/');
  render(<App />);
  expect(screen.getByRole('heading', { level: 1, name: 'Sunaina' })).toBeInTheDocument();
  expect(
    screen.getAllByText('Technical Project Manager & Software Engineer').length
  ).toBeGreaterThan(0);
});
