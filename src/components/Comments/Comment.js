import React from "react";
import styled from "styled-components";
import Table from "../Table";
import Loader from "../Loader";
import useFetch from "../../hooks/useFetch";
import { COMMENTS } from "../../utils/constants";

const CommentsContainer = styled.div`
  padding: 2rem;
  margin-bottom: 6rem;
`;

const ErrorMessage = styled.p`
  color: #721c24;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 5px;
  padding: 1rem;
  text-align: center;
  font-family: 'Arial', sans-serif; /* Change the font family as needed */
`;

const Comments = () => {
  const { loading, error, data: comments } = useFetch(COMMENTS);

  const tableHeadings = ["ID", "Name", "Email"];

  return (
    <CommentsContainer>
      <h2>Comments from JSONPlaceholder API</h2>
      {loading ? (
        <Loader /> // Display the Loader component while data is being fetched
      ) : error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : (
        <Table headings={tableHeadings} data={comments} itemsPerPage={15} />
      )}
    </CommentsContainer>
  );
};

export default Comments;
