import React, { useContext, useEffect } from "react";
import axios from "../axios";
import requests from "../requests";
import Beer from "../components/Beer";
import { BeerContext } from "../store/BeerContext";

const BeerContainer = () => {
  const { beers, dispatch } = useContext(BeerContext);

  useEffect(() => {
    async function fetchBeer() {
      const req = await axios.get(requests.fetchBeer);
      console.log(req);
      dispatch({ type: "SET_BEERS", value: req.data });
      return req;
    }
    fetchBeer();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {beers.map((beer) => (
          <Beer
            key={beer.id}
            name={beer.name}
            tagline={beer.tagline}
            thumbnail={beer.image_url}
            description={beer.description}
            id={beer.id}
          />
        ))}
      </div>
    </div>
  );
};

export default BeerContainer;
