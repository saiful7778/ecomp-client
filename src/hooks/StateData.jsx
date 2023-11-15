import PropTypes from "prop-types";
import { createContext } from "react";

export const StateContextData = createContext(null);

const StateData = ({ children }) => {
  const data = "everything is ok!";
  const stateData = { data };
  return (
    <StateContextData.Provider value={stateData}>
      {children}
    </StateContextData.Provider>
  );
};
StateData.propTypes = {
  children: PropTypes.node,
};
export default StateData;
