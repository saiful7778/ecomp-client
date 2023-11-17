import { useLoaderData } from "react-router-dom";
import PhoneItem from "../components/PhoneItem";

const Phones = () => {
  const data = useLoaderData();
  const renderAllPhones = data?.result?.map((ele) => (
    <PhoneItem key={ele._id} itemData={ele} />
  ));
  return (
    <div>
      <h2 className="my-4 text-4xl font-medium">All products here:</h2>
      <div className="grid grid-cols-3 gap-4">{renderAllPhones}</div>
    </div>
  );
};

export default Phones;
