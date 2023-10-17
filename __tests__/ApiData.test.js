// tests/ApiData.test.js
import { render, screen } from '@testing-library/react';
import ApiData from '../src/components/ApiData/ApiData';

test('renders data from API', async () => {
  render(<ApiData />);
  const dataElement = await screen.findByText(/Data from API/i);
  expect(dataElement).toBeInTheDocument();
});
