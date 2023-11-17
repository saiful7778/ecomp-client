import { useState } from "react";
import Pagination from "../components/Pagination";
import { CiFilter } from "react-icons/ci";
import PhonesShowcase from "../components/PhonesShowcase";
import PropTypes from "prop-types";

const Phones = () => {
  const defItemPerPage = 6;
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [type, setType] = useState("");
  const [itemPerPage, setItemPerPage] = useState(defItemPerPage);
  const [showFilterOptions, setShowFilterOptions] = useState(false);

  const numberOfPage = Math.ceil(totalItems / itemPerPage);
  const pages = [...Array(numberOfPage).keys()];

  const handlePagination = (data) => {
    setCurrentPage(data);
  };

  const handleItemPerPage = (e) => {
    setItemPerPage(+e.target.value);
    setCurrentPage(0);
  };
  const handleType = (e) => {
    setType(e.target.value);
    setCurrentPage(0);
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage((prop) => prop - 1);
    }
  };
  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage((prop) => prop + 1);
    }
  };
  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center mb-4 items-end justify-between">
        <h2 className="my-4 text-4xl font-medium">All phones here:</h2>
        <div className="relative">
          <button
            onClick={() => setShowFilterOptions((prop) => !prop)}
            className="btn btn-sm btn-pri"
            type="button"
          >
            <CiFilter size={20} strokeWidth={1} /> <span>filter</span>
          </button>
          {showFilterOptions && (
            <div className="absolute top-full right-0 z-50 container-bg p-4 rounded mt-1 text-gray-500 dark:text-gray-400 space-y-2 whitespace-nowrap">
              <SelectOptions
                typeName="Item per page"
                defaultValue={defItemPerPage.toString()}
                handleChange={handleItemPerPage}
              >
                <option value="3">3</option>
                <option value="6">6</option>
                <option value="9">9</option>
                <option value="12">12</option>
                <option value="15">15</option>
                <option value="18">18</option>
                <option value="21">21</option>
                <option value="24">24</option>
              </SelectOptions>
              <SelectOptions typeName="brand" defaultValue="oppo">
                <option value="">All</option>
                <option value="oppo">Oppo</option>
              </SelectOptions>
              <SelectOptions
                typeName="type"
                defaultValue="all"
                handleChange={handleType}
              >
                <option value="">All</option>
                <option value="phone">Phone</option>
                <option value="watch">Watch</option>
              </SelectOptions>
              <SelectOptions typeName="sort by" defaultValue="random">
                <option value="random">Random</option>
                <option value="low_to_high">Low to High</option>
                <option value="high_to_low">High to Low</option>
              </SelectOptions>
            </div>
          )}
        </div>
      </div>
      <PhonesShowcase
        currentPage={currentPage}
        itemPerPage={itemPerPage}
        setTotalItems={setTotalItems}
        type={type}
      />
      <Pagination
        paginationName="phpg"
        handlePrev={handlePrev}
        handleNext={handleNext}
        pages={pages}
        handlePagination={handlePagination}
        currentPage={currentPage}
      />
    </div>
  );
};

const SelectOptions = ({ typeName, children, defaultValue, handleChange }) => {
  return (
    <div className="flex items-center justify-between">
      <label className="font-semibold mr-2 capitalize">{typeName}:</label>
      <select
        onChange={handleChange}
        className="select w-32"
        defaultValue={defaultValue}
      >
        {children}
      </select>
    </div>
  );
};

SelectOptions.propTypes = {
  typeName: PropTypes.string,
  children: PropTypes.node,
  defaultValue: PropTypes.string,
  handleChange: PropTypes.func,
};

export default Phones;
