import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Loader from '../Loader';
import { fetchPhotos } from '../../utils/api';

const PhotosContainer = styled.div`
  padding: 2rem;
`;

const PhotosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
`;

const PhotoCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PaginationContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
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

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  useEffect(() => {
    fetchPhotos()
      .then((response) => {
        setPhotos(response);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching photos:', error);
        setLoading(false);
      });
  }, []);

  const indexOfLastPhoto = currentPage * itemsPerPage;
  const indexOfFirstPhoto = indexOfLastPhoto - itemsPerPage;
  const currentPhotos = photos.slice(indexOfFirstPhoto, indexOfLastPhoto);
  const totalPages = Math.ceil(photos.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <PhotosContainer>
      <h2>Photos from JSONPlaceholder API</h2>
      {loading ? (
        <Loader />
      ) : (
        <>
          <PhotosGrid>
            {currentPhotos.map((photo) => (
              <PhotoCard key={photo.id}>
                <img src={photo.url} alt={photo.title} />
              </PhotoCard>
            ))}
          </PhotosGrid>
          <PaginationContainer>
            <PaginationButton onClick={handlePrevPage} disabled={currentPage === 1}>
              Previous
            </PaginationButton>
            <div>Page {currentPage} of {totalPages || 1}</div>
            <PaginationButton onClick={handleNextPage} disabled={currentPage === totalPages}>
              Next
            </PaginationButton>
          </PaginationContainer>
        </>
      )}
    </PhotosContainer>
  );
};

export default Photos;
