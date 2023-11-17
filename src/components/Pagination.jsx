import PropTypes from "prop-types";

const Pagination = ({
  paginationName,
  handlePrev,
  handleNext,
  pages,
  handlePagination,
  currentPage,
}) => {
  return (
    <div className="flex items-center justify-center gap-2 my-6">
      <button className="pagination-btn" onClick={handlePrev} type="button">
        PREV
      </button>
      <div className="flex flex-wrap gap-2 items-center justify-center">
        {pages.map((page, idx) => (
          <PaginationItem
            key={paginationName + idx}
            handlePagination={handlePagination}
            page={page}
            index={idx}
            currentPage={currentPage}
          />
        ))}
      </div>
      <button className="pagination-btn" onClick={handleNext} type="button">
        NEXT
      </button>
    </div>
  );
};

const PaginationItem = ({ handlePagination, page, index, currentPage }) => {
  const isActive = currentPage === index;
  return (
    <button
      onClick={() => handlePagination(page)}
      className={`pagination-item ${isActive ? "active" : ""}`}
    >
      {page + 1}
    </button>
  );
};

Pagination.propTypes = {
  paginationName: PropTypes.string,
  handlePrev: PropTypes.func,
  handleNext: PropTypes.func,
  handlePagination: PropTypes.func,
  pages: PropTypes.array,
  currentPage: PropTypes.number,
};
PaginationItem.propTypes = {
  handlePagination: PropTypes.func,
  currentPage: PropTypes.number,
  index: PropTypes.number,
  page: PropTypes.number,
};
export default Pagination;
