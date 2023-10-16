// src/components/ApiData/ApiData.js
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchPosts } from '../../utils/api';
import Table from '../Table';

const DataContainer = styled.div`
  padding: 2rem;
`;

const ApiData = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts()
      .then((response) => setPosts(response))
      .catch((error) => console.error('Error fetching posts:', error));
  }, []);

  const tableHeadings = ['ID', 'Title', 'Body'];

  return (
    <DataContainer>
      <h2>Posts from JSONPlaceholder API</h2>
      <Table headings={tableHeadings} data={posts} />
    </DataContainer>
  );
};

export default ApiData;
