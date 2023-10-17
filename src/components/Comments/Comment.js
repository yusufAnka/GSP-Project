import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Table from '../Table';
import Loader from '../Loader';
import { fetchComments } from '../../utils/api';

const CommentsContainer = styled.div`
  padding: 2rem;
`;

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchComments()
      .then((response) => {
        setComments(response);
        setLoading(false); // Set loading to false once data is loaded
      })
      .catch((error) => {
        console.error('Error fetching comments:', error);
        setLoading(false); // Set loading to false in case of an error
      });
  }, []);

  const tableHeadings = ['ID', 'Comment', 'Email'];

  return (
    <CommentsContainer>
      <h2>Comments from JSONPlaceholder API</h2>
      {loading ? (
        <Loader /> // Display the Loader component while data is being fetched
      ) : (
        <Table headings={tableHeadings} data={comments} itemsPerPage={20} />
      )}
    </CommentsContainer>
  );
};

export default Comments;
