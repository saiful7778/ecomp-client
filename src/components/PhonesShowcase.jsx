import { useQuery } from "@tanstack/react-query";
import { phonesDataLoader } from "../api/dataLoader";
import PhoneItem from "./PhoneItem";
import LoadingSpinner from "../layout/shared/LoadingSpinner";
import PropTypes from "prop-types";

const PhonesShowcase = ({ queryData, paginationData, setTotalItems }) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [
      "phones",
      { currentPage: paginationData.currentPage },
      { itemPerPage: paginationData.itemPerPage },
    ],
    queryFn: () => phonesDataLoader(queryData, paginationData, setTotalItems),
  });
  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <div className="text-center">Error: {error}</div>;
  }
  const renderAllPhones = data?.result?.map((ele) => (
    <PhoneItem key={ele._id} itemData={ele} />
  ));
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {renderAllPhones}
    </div>
  );
};

PhonesShowcase.propTypes = {
  queryData: PropTypes.object,
  paginationData: PropTypes.object,
  setTotalItems: PropTypes.func,
};

export default PhonesShowcase;
