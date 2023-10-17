import styled from 'styled-components';
import Table from '../Table';
import Loader from '../Loader'; 
import useFetch from "../../hooks/useFetch";
import { USERS } from "../../utils/constants";

const UsersContainer = styled.div`
  padding: 2rem;
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

const Users = () => {
  const { loading, error, data: users } = useFetch(USERS);

  const tableHeadings = ['ID', 'Name', 'Email']; // I define the table headings for User's table

  return (
    <UsersContainer>
      <h2>Users from JSONPlaceholder API</h2>
      {loading ? (
        <Loader /> // I display the loader component while data is being fetching...
      ) : error ? (
        <ErrorMessage>{error}</ErrorMessage>
        ) : (
        <Table headings={tableHeadings} data={users} itemsPerPage={15} />
      )}
      
    </UsersContainer>
  );
};

export default Users;
