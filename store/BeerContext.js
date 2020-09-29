import { useReducer, createContext } from "react";
import { BeerReducer } from "../reducer/BeerReducer";

const BeerContext = createContext();

const BeerProvider = (props) => {
  const [beers, dispatch] = useReducer(BeerReducer, []);
  return (
    <BeerContext.Provider value={{ beers, dispatch }}>
      {props.children}
    </BeerContext.Provider>
  );
};

export { BeerProvider, BeerContext };
