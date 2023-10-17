import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

const StyledTable = styled.table`
  width: 100%;
  margin: 0 auto;
  border-collapse: collapse;
  margin-top: 1rem;
`;

const TableHead = styled.th`
  background-color: #333;
  color: white;
  padding: 0.5rem;
  text-align: left;
`;

const TableData = styled.td`
  padding: 0.5rem;
  text-align: left;
`;

const TableRow = styled.tr`
  ${(props) =>
    props.$isOdd &&
    css`
      background-color: #f2f2f2;
    `}
`;

const PaginationContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PaginationButton = styled.button`
  padding: 0.5rem;
  margin: 0.5rem;
  cursor: pointer;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 4px;
`;

const TableComponent = ({ headings, data, itemsPerPage }) => {
  // State for managing pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);

  // Update currentItems when currentPage or data changes
  useEffect(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    setCurrentItems(data.slice(indexOfFirstItem, indexOfLastItem));
  }, [currentPage, data, itemsPerPage]);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Handle next page click
  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  // Handle previous page click
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div>
      <StyledTable>
        <thead>
          <tr>
            {headings.map((heading) => (
              <TableHead key={heading}>{heading}</TableHead>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <TableRow key={item.id} $isOdd={index % 2 !== 0}>
              {headings.map((heading) => (
                <TableData key={heading}>{item[heading.toLowerCase()]}</TableData>
              ))}
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
      {/* Pagination */}
      <PaginationContainer>
        <PaginationButton onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </PaginationButton>
        <div>
          Page {currentPage} of {totalPages || 1}
        </div>
        <PaginationButton onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </PaginationButton>
      </PaginationContainer>
    </div>
  );
};

export default TableComponent;
