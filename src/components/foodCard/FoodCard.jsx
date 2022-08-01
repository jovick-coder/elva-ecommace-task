import React from "react";
import "./FoodCard.css";
// import { foodObject } from "../../foodObject";

function FoodCardComponent({ img, name, price, id }) {
  // console.log();

  return (
    <div className="FoodCardComponent" key={id}>
      <img src={img} alt="" />
      <div className="cardPan">
        <div className="text">
          <h5>{name}</h5>
          <span>Some text</span>
          <div className="footer">${price}</div>
        </div>
      </div>
    </div>
  );
}

export default FoodCardComponent;
