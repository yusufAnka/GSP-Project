import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Table from '../Table';
import Loader from '../Loader'; 
import { fetchPosts } from '../../utils/api';

const DataContainer = styled.div`
  padding: 2rem;
`;

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts()
      .then((response) => {
        setPosts(response);
        setLoading(false); // I have Set loading to false once the data is loaded
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
        setLoading(false); // I have Set loading to false in case of an error
      });
  }, []);

  const tableHeadings = ['ID', 'Title', 'Body'];

  return (
    <DataContainer>
      <h2>Posts from JSONPlaceholder API</h2>
      {loading ? (
        <Loader /> // I display the Loader component while data is being fetching.....
      ) : (
        <Table headings={tableHeadings} data={posts} itemsPerPage={15} />
      )}
    </DataContainer>
  );
};

export default Posts;
