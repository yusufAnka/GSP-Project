// Testing Navbar component:
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '../src/components/Navbar';

test('renders navbar correctly', () => {
  render(<Navbar />);

  // Assertions for the rendered navbar content
  expect(screen.getByText('GSP Project')).toBeInTheDocument();
  expect(screen.getByText('Home')).toBeInTheDocument();
  expect(screen.getByText('Posts')).toBeInTheDocument();
  expect(screen.getByText('Users')).toBeInTheDocument();
  expect(screen.getByText('Photos')).toBeInTheDocument();
  expect(screen.getByText('Comments')).toBeInTheDocument();
});

test('toggle navbar extension on button click', () => {
  render(<Navbar />);
  const button = screen.getByTestId('open-links-button');
  fireEvent.click(button);
  expect(screen.getByTestId('navbar-extended')).toBeInTheDocument();
});

