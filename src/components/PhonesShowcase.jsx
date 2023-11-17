import { useQuery } from "@tanstack/react-query";
import { phonesDataLoader } from "../api/dataLoader";
import PhoneItem from "./PhoneItem";
import LoadingSpinner from "../layout/shared/LoadingSpinner";
import PropTypes from "prop-types";

const PhonesShowcase = ({
  currentPage,
  itemPerPage,
  setTotalItems,
  type,
  dataSort,
}) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [
      "phones",
      { currentPage },
      { itemPerPage },
      { type },
      { dataSort },
    ],
    queryFn: () =>
      phonesDataLoader(currentPage, itemPerPage, setTotalItems, type, dataSort),
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
  currentPage: PropTypes.number,
  itemPerPage: PropTypes.number,
  setTotalItems: PropTypes.func,
  type: PropTypes.string,
  dataSort: PropTypes.string,
};

export default PhonesShowcase;
