import { useContext } from "react";
import { contextAPI } from "../AllContext/AllContext";

const useContextAPI = () => {
  return useContext(contextAPI);
};

export default useContextAPI;
