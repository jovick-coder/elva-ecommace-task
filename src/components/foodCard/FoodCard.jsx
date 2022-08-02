import React from "react";
import { FaCartPlus } from "react-icons/fa";
import "./FoodCard.css";
// import { foodObject } from "../../foodObject";

function FoodCardComponent({ img, name, price, id }) {
  return (
    <div className="FoodCardComponent" key={id}>
      <img src={img} alt="" />
      <div className="icon">
        <FaCartPlus />
      </div>
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
