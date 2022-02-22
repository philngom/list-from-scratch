import { render, screen } from '@testing-library/react';
import Countries from './Countries';

test('renders learn react link', async () => {
  render(<Countries />);
  const linkElement = await screen.findByText(/search for a country/i);
  expect(linkElement).toBeInTheDocument();
});
