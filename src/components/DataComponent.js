import React, { useEffect, useState } from 'react';
import { fetchData } from '../services/api';
import Loader from './common/Loader';
import ErrorComponent from './ErrorComponent';
import styled from 'styled-components';

const DataContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  margin-top: 20px;
  border-radius: 5px;
`;

const Title = styled.h2`
  color: #333;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  background-color: #fff;
  margin: 5px 0;
  padding: 10px;
  border-radius: 5px;
`;

const DataComponent = ({ resource }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const result = await fetchData(resource);
        setData(result);
      } catch (err) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchDataAsync();
  }, [resource]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorComponent message={error} />;
  }

  return (
    <DataContainer>
      <Title>Data from JSONPlaceholder API</Title>
      <List>
        {data.map((item) => (
          <ListItem key={item.id}>{item.title}</ListItem>
        ))}
      </List>
    </DataContainer>
  );
};

export default DataComponent;
