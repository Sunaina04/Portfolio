import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../../App';
import { openMailApp } from './delivery';

// Simulate a build with no Web3Forms key configured.
jest.mock('./delivery', () => ({
  ...jest.requireActual('./delivery'),
  emailServiceReady: false,
  openMailApp: jest.fn(),
}));

// Without a key, "Send by email" must not post anywhere: it opens the
// visitor's email app addressed to the portfolio owner instead.
test('falls back to the email app when no form key is configured', () => {
  const fetchSpy = jest.spyOn(window, 'fetch');
  window.history.pushState({}, '', '/Portfolio/');
  render(<App />);

  const fill = (label: RegExp, value: string) => {
    const el = screen.getByLabelText(label);
    fireEvent.change(el, { target: { value } });
    fireEvent.blur(el);
  };
  fill(/^Name/, 'Asha Verma');
  fill(/^Email/, 'asha@example.com');
  fill(/^Message/, 'I need help planning and building a small web app.');
  fireEvent.click(screen.getByRole('button', { name: /Send by email/ }));

  expect(fetchSpy).not.toHaveBeenCalled();
  expect(openMailApp).toHaveBeenCalledWith(
    expect.stringMatching(/^mailto:sunainatakhi64@gmail\.com\?subject=/)
  );
  expect(screen.getByText(/Your email app has opened/)).toBeInTheDocument();
  fetchSpy.mockRestore();
});
