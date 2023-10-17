import { render, screen, waitFor } from '@testing-library/react';
import Users from '../src/components/Users';
import { fetchUsers } from '../src/utils/api';

// Mock the fetchUsers function
jest.mock('../src/utils/api');

// Helper function to delay a promise
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

test('renders users component correctly', async () => {
  // Mocking a successful response
  fetchUsers.mockResolvedValueOnce([
    { id: 1, name: 'User 1', email: 'user1@example.com' },
    { id: 2, name: 'User 2', email: 'user2@example.com' },
  ]);

  render(<Users />);

  // Checking if loading state is initially displayed
  expect(screen.getByText('Loading...')).toBeInTheDocument();

  // Wait for data to load
  await waitFor(() => {
    expect(screen.getByText('User 1')).toBeInTheDocument();
    expect(screen.getByText('User 2')).toBeInTheDocument();
  });

  // Ensure loading state is not present
  expect(screen.queryByText('Loading...')).toBeNull();
});

test('handles API error', async () => {
  // Mocking an error response
  fetchUsers.mockRejectedValueOnce(new Error('API Error'));

  render(<Users />);

  // Checking if error message is displayed
  await waitFor(() => {
    expect(screen.getByText('An error occurred: API Error')).toBeInTheDocument();
  });

  // Ensure loading state is not present
  expect(screen.queryByText('Loading...')).toBeNull();
});

test('handles loading state correctly', async () => {
  // Simulate a delayed response to test loading state
  fetchUsers.mockImplementationOnce(() => delay(100).then(() => [
    { id: 1, name: 'User 1', email: 'user1@example.com' },
    { id: 2, name: 'User 2', email: 'user2@example.com' },
  ]));

  render(<Users />);

  // Checking if loading state is initially displayed
  expect(screen.getByText('Loading...')).toBeInTheDocument();

  // Waiting for data to load
  await waitFor(() => {
    expect(screen.getByText('User 1')).toBeInTheDocument();
    expect(screen.getByText('User 2')).toBeInTheDocument();
  });

  // Ensure loading state is not present
  expect(screen.queryByText('Loading...')).toBeNull();
});

