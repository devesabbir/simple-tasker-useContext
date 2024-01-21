/* eslint-disable react/prop-types */
import { useState } from "react";

const Pagination = ({ itemsPerPage, totalItems, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    onPageChange(newPage);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li key={i} className={currentPage === i ? "active" : ""}>
          <button onClick={() => handlePageChange(i)}>{i}</button>
        </li>
      );
    }
    return pageNumbers;
  };

  return (
    <div>
      <ul className="pagination">{renderPageNumbers()}</ul>
    </div>
  );
};

// Example usage:
const PaginationComponent = () => {
  const items = Array.from({ length: 30 }, (_, i) => `Item ${i + 1}`);
  const [currentPageItems, setCurrentPageItems] = useState([]);

  const handlePageChange = (page) => {
    const startIndex = (page - 1) * 5;
    const endIndex = startIndex + 5;
    setCurrentPageItems(items.slice(startIndex, endIndex));
  };

  return (
    <div>
      <ul>
        {currentPageItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <Pagination
        itemsPerPage={5}
        totalItems={items.length}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default PaginationComponent;
