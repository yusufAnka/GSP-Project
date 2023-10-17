import styled from 'styled-components';
import Table from '../Table';
import Loader from '../Loader'; 
import { POSTS } from '../../utils/constants';
import useFetch from '../../hooks/useFetch';

const DataContainer = styled.div`
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
  font-family: 'Arial', sans-serif; 
`;

const Posts = () => {
  const { loading, error, data: posts } = useFetch(POSTS)

  const tableHeadings = ['ID', 'Title', 'Body'];

  return (
    <DataContainer>
      <h2>Posts from JSONPlaceholder API</h2>
      {loading ? (
        <Loader /> // I display the Loader component while data is being fetching.....
      ) : error ? (
        <ErrorMessage>{error}</ErrorMessage>
        ) : (
        <Table headings={tableHeadings} data={posts} itemsPerPage={15} />
      )}
    </DataContainer>
  );
};

export default Posts;
