import { useContext } from "react";
import { StateContextData } from "./StateData";

const useStateData = () => {
  return useContext(StateContextData);
};

export default useStateData;
