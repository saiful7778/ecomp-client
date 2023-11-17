import PhoneItem from "../components/PhoneItem";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { phonesDataLoader } from "../api/dataLoader";
import LoadingSpinner from "../layout/shared/LoadingSpinner";
import Pagination from "../components/Pagination";
import { CiFilter } from "react-icons/ci";

const Phones = () => {
  const defItemPerPage = 3;
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemPerPage, setItemPerPage] = useState(defItemPerPage);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["phones", currentPage],
    queryFn: () => phonesDataLoader(currentPage, itemPerPage, setTotalItems),
  });

  const numberOfPage = Math.ceil(totalItems / itemPerPage);
  const pages = [...Array(numberOfPage).keys()];

  const handlePagination = (data) => {
    setCurrentPage(data);
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

  const renderAllPhones = data?.result?.map((ele) => (
    <PhoneItem key={ele._id} itemData={ele} />
  ));
  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <div className="text-center">Error: {error}</div>;
  }
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="my-4 text-4xl font-medium">All products here:</h2>
        <button className="btn btn-sm btn-pri" type="button">
          <CiFilter size={20} strokeWidth={1} /> <span>filter</span>
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {renderAllPhones}
      </div>
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

export default Phones;
