import React from "react";
import styled from "styled-components";
import Table from "../Table";
import Loader from "../Loader";
import useFetch from "../../hooks/useFetch";
import { COMMENTS } from "../../utils/constants";

const CommentsContainer = styled.div`
  padding: 2rem;
  margin-bottom: 4rem;
`;

const ErrorMessage = styled.p`
  color: #721c24;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 5px;
  padding: 1rem;
  text-align: center;
  font-family: "Arial", sans-serif;
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
`;

const Comments = () => {
  // Fetching comments data using custom hook
  const { loading, error, data: comments } = useFetch(COMMENTS);

  // Table headings
  const tableHeadings = ["ID", "Name", "Email"];

  return (
    <CommentsContainer>
      <Heading>Comments from JSONPlaceholder API</Heading>
      {/* Display loader while data is being fetched */}
      {loading ? (
        <Loader />
      ) : error ? (
        // for displaying an error message 
        <ErrorMessage>{error}</ErrorMessage>
      ) : (
        <Table headings={tableHeadings} data={comments} itemsPerPage={15} />
      )}
    </CommentsContainer>
  );
};

export default Comments;
