// Pagination.js
import React from 'react';
import MuiPagination from '@mui/material/Pagination';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const handlePageChange = (event, value) => {
    onPageChange(value);
  };

  return (
    <div>
      {/* Render pagination buttons */}
      <MuiPagination count={totalPages} page={currentPage} onChange={handlePageChange} />
    </div>
  );
};

export default Pagination;
