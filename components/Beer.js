import React from "react";
import styles from "../styles/Beer.module.css";

const Beer = (props) => {
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <div className="beer col-md-3">
      <h2>{props.name}</h2>
      <span>{props.tagline}</span>
      <img
        className={styles.beer__poster}
        src={props.thumbnail}
        alt={props.name}
      />
      <p>{truncate(props.description, 100)}</p>
    </div>
  );
};

export default Beer;
