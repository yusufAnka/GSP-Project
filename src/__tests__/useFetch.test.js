import { renderHook, act } from '@testing-library/react-hooks';
import useFetch from '../hooks/useFetch';

// Mocking the axios library
jest.mock('axios');

// Helper function to delay a promise
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

test('fetches data correctly', async () => {
  // Mocking a successful response
  axios.get.mockResolvedValueOnce({ data: { example: 'data' } });

  let result;

  await act(async () => {
    result = renderHook(() => useFetch('posts'));
  });

  expect(result.result.current.data).toEqual({ example: 'data' });
  expect(result.result.current.loading).toBeFalsy();
  expect(result.result.current.error).toBeNull();
});

test('handles API error', async () => {
  // Mocking an error response
  axios.get.mockRejectedValueOnce(new Error('API Error'));

  let result;

  await act(async () => {
    result = renderHook(() => useFetch('posts'));
  });

  expect(result.result.current.data).toEqual([]);
  expect(result.result.current.loading).toBeFalsy();
  expect(result.result.current.error).toEqual(new Error('API Error'));
});

test('handles loading state correctly', async () => {
  // Simulate a delayed response to test loading state
  axios.get.mockImplementationOnce(() => delay(100).then(() => ({ data: { example: 'data' } })));

  let result;

  await act(async () => {
    result = renderHook(() => useFetch('posts'));
  });

  expect(result.result.current.data).toEqual({ example: 'data' });
  expect(result.result.current.loading).toBeFalsy();
  expect(result.result.current.error).toBeNull();
});

