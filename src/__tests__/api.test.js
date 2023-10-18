// testing file for api.js file:
import axios from 'axios';
import { fetchPosts, fetchUsers, fetchComments, fetchPhotos } from '../utils/api';

jest.mock('axios'); // Mocking axios module

describe('API Functions', () => {
  test('fetchPosts should return data', async () => {
    const mockData = [{ id: 1, title: 'Post 1' }];
    axios.get.mockResolvedValueOnce({ data: mockData });

    const result = await fetchPosts();

    expect(result).toEqual(mockData);
  });

  test('fetchUsers should return data', async () => {
    const mockData = [{ id: 1, name: 'User 1' }];
    axios.get.mockResolvedValueOnce({ data: mockData });

    const result = await fetchUsers();

    expect(result).toEqual(mockData);
  });

  test('fetchComments should return data', async () => {
    const mockData = [{ id: 1, text: 'Comment 1' }];
    axios.get.mockResolvedValueOnce({ data: mockData });

    const result = await fetchComments();

    expect(result).toEqual(mockData);
  });

  test('fetchPhotos should return data', async () => {
    const mockData = [{ id: 1, url: 'photo-url.jpg' }];
    axios.get.mockResolvedValueOnce({ data: mockData });

    const result = await fetchPhotos();

    expect(result).toEqual(mockData);
  });
});
