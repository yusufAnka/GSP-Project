// src/components/Users/Users.js
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchUsers } from '../../utils/api';
import Table from '../Table';

const UsersContainer = styled.div`
  padding: 2rem;
`;

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers()
      .then((response) => setUsers(response))
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  const tableHeadings = ['ID', 'Name', 'Email'];

  return (
    <UsersContainer>
      <h2>Users from JSONPlaceholder API</h2>
      <Table headings={tableHeadings} data={users} />
    </UsersContainer>
  );
};

export default Users;
