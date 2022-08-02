import React from "react";
import "./StarComponent.css";
import { FaStar } from "react-icons/fa";

function StarComponent({ rate }) {
  return (
    <>
      {[...Array(rate)].map((e, i) => (
        <span className="star" key={i}>
          <FaStar />
        </span>
      ))}
    </>
  );
}

export default StarComponent;

export function StarImageComponent({ rate }) {
  return (
    <>
      {[...Array(rate)].map((e, i) => (
        <div className="starImage" key={i}></div>
      ))}
      <div className="starImage">48</div>
    </>
  );
}
