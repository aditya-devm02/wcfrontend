import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const loginElement = screen.getByRole('button', { name: /login/i });
  expect(loginElement).toBeInTheDocument();
});