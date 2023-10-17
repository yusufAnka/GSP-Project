// src/components/Users/Users.js
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Table from '../Table';
import Loader from '../Loader'; 
import { fetchUsers } from '../../utils/api';

const UsersContainer = styled.div`
  padding: 2rem;
`;

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers()
      .then((response) => {
        setUsers(response);
        setLoading(false); // I set loading to false once the data is loaded
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
        setLoading(false); // here too I have set loading to false in case of an error
      });
  }, []);

  const tableHeadings = ['ID', 'Name', 'Email']; // I define the table headings for User's table

  return (
    <UsersContainer>
      <h2>Users from JSONPlaceholder API</h2>
      {loading ? (
        <Loader /> // I display the loader component while data is being fetching...
      ) : (
        <Table headings={tableHeadings} data={users} itemsPerPage={15} />
      )}
      
    </UsersContainer>
  );
};

export default Users;
