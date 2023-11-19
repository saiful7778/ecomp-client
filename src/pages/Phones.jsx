import { useState } from "react";
import Pagination from "../components/Pagination";
import { CiFilter } from "react-icons/ci";
import PhonesShowcase from "../components/PhonesShowcase";
import PropTypes from "prop-types";

const Phones = () => {
  const defItemPerPage = 6;
  const minPrice = 200;
  const maxPrice = 1400;
  const [paginationData, setPaginationData] = useState({
    totalItems: 0,
    currentPage: 0,
    itemPerPage: defItemPerPage,
  });
  const [query, setQuery] = useState({
    brand: "",
    type: "",
    dataSort: "",
    priceRange: [minPrice, maxPrice],
  });
  const [queryData, setQueryData] = useState({
    brand: "",
    type: "",
    dataSort: "",
    priceRange: [minPrice, maxPrice],
  });
  const [showFilterOptions, setShowFilterOptions] = useState(false);

  const numberOfPage = Math.ceil(
    paginationData.totalItems / paginationData.itemPerPage
  );
  const pages = [...Array(numberOfPage).keys()];
  console.log(query);

  const handlePagination = (data) => {
    setPaginationData({ ...paginationData, currentPage: data });
  };

  const handleItemPerPage = (e) => {
    setPaginationData({
      ...paginationData,
      itemPerPage: +e.target.value,
      currentPage: 0,
    });
  };
  const handleType = (e) => {
    setQuery({ ...query, type: e.target.value, currentPage: 0 });
  };

  const handlePrev = () => {
    if (paginationData.currentPage > 0) {
      setPaginationData({
        ...paginationData,
        currentPage: paginationData.currentPage - 1,
      });
    }
  };
  const handleNext = () => {
    if (paginationData.currentPage < pages.length - 1) {
      setPaginationData({
        ...paginationData,
        currentPage: paginationData.currentPage + 1,
      });
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
            <div className="absolute top-full right-0 z-50 container-bg p-4 rounded mt-1 text-sm text-gray-500 dark:text-gray-400 space-y-2 whitespace-nowrap">
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
              <SelectOptions
                handleChange={(e) =>
                  setQuery({ ...query, brand: e.target.value })
                }
                typeName="brand"
                defaultValue="oppo"
              >
                <option value="">All</option>
                <option value="oppo">Oppo</option>
                <option value="samsung">samsung</option>
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
              <SelectOptions
                typeName="sort by"
                defaultValue=""
                handleChange={(e) =>
                  setQuery({ ...query, dataSort: e.target.value })
                }
              >
                <option value="">Random</option>
                <option value="asc">Low to High</option>
                <option value="dsc">High to Low</option>
              </SelectOptions>
              <div className="flex items-center justify-between">
                <label className="font-semibold mr-2 capitalize">Range:</label>
                <div className="flex items-center justify-between gap-2 w-44 text-center">
                  <div>
                    <h6>Min</h6>
                    <input
                      className="input w-full"
                      type="number"
                      onChange={(e) =>
                        setQuery({
                          ...query,
                          priceRange: [+e.target.value, query.priceRange[1]],
                        })
                      }
                      defaultValue={minPrice}
                    />
                  </div>
                  <div>to</div>
                  <div>
                    <h6>Max</h6>
                    <input
                      className="input w-full"
                      type="number"
                      onChange={(e) =>
                        setQuery({
                          ...query,
                          priceRange: [query.priceRange[0], +e.target.value],
                        })
                      }
                      defaultValue={maxPrice}
                    />
                  </div>
                </div>
              </div>
              <button
                onClick={() => setQueryData(query)}
                className="btn btn-pri btn-sm w-full"
                type="button"
              >
                apply
              </button>
            </div>
          )}
        </div>
      </div>
      <PhonesShowcase
        queryData={queryData}
        paginationData={paginationData}
        setTotalItems={setPaginationData}
      />
      <Pagination
        paginationName="phpg"
        handlePrev={handlePrev}
        handleNext={handleNext}
        pages={pages}
        handlePagination={handlePagination}
        currentPage={paginationData.currentPage}
      />
    </div>
  );
};

const SelectOptions = ({ typeName, children, defaultValue, handleChange }) => {
  return (
    <div className="flex items-center justify-between">
      <label className="font-semibold mr-2 capitalize">{typeName}:</label>
      <select
        name={typeName.split(" ").join("_").toLowerCase()}
        onChange={handleChange}
        className="select w-44"
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
