import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders without errors', () => {
  render(<App />);

  // Checking if the Navbar is rendered
  expect(screen.getByText('GSP Project')).toBeInTheDocument();

  //Checking if the Introduction section is rendered
  expect(screen.getByText('Interview Project: Building a ReactJS Application with API Integration')).toBeInTheDocument();

  //Checking if the Footer is rendered
  expect(screen.getByText('© 2023 Your Company')).toBeInTheDocument();
});

test('navigates to Posts page', () => {
    render(<App />);
    const postsLink = screen.getByText('Posts');
    fireEvent.click(postsLink);
    expect(screen.getByText('Posts from JSONPlaceholder API')).toBeInTheDocument();
  });
  
// Mocking a scenario where fetching data fails
jest.mock('../src/utils/api', () => ({
    fetchPosts: jest.fn(() => Promise.reject(new Error('API Error'))),
  }));
  
  test('displays error message on data fetching failure', async () => {
    render(<App />);
    // Checking if the error message is displayed
    expect(await screen.findByText('An error occurred: API Error')).toBeInTheDocument();
  });
    
