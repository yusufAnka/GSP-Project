// src/components/Comments/Comments.js
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Table from '../Table';
import { fetchComments } from '../../utils/api';

const CommentsContainer = styled.div`
  padding: 2rem;
`;

const Comments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments()
      .then((response) => setComments(response))
      .catch((error) => console.error('Error fetching comments:', error));
  }, []);

  const tableHeadings = ['ID', 'Name', 'Email'];

  return (
    <CommentsContainer>
      <h2>Comments from JSONPlaceholder API</h2>
      <Table headings={tableHeadings} data={comments} itemsPerPage={20} />
    </CommentsContainer>
  );
};

export default Comments;
