import React, { useEffect, useState } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import FoodCardComponent from "../foodCard/FoodCard";
import {
  FaArrowCircleLeft,
  FaArrowCircleRight,
  FaDotCircle,
} from "react-icons/fa";

const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` }));

function HorizontalScrolls() {
  const [items, setItems] = React.useState(getItems);
  const [selected, setSelected] = React.useState([]);
  const [position, setPosition] = React.useState(0);

  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const handleClick =
    (id) =>
    ({ getItemById, scrollToItem }) => {
      // console.log(getItemById);
      // console.log(scrollToItem);
      const itemSelected = isItemSelected(id);

      console.log(itemSelected);

      setSelected((currentSelected) =>
        itemSelected
          ? currentSelected.filter((el) => el !== id)
          : currentSelected.concat(id)
      );
    };

  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {items.map(({ id }) => (
        <Card
          itemId={id} // NOTE: itemId is required for track items
          title={id}
          key={id}
          onClick={handleClick(id)}
          selected={isItemSelected(id)}
        />
      ))}
    </ScrollMenu>
  );
}

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    <button disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
      Left
    </button>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <button disabled={isLastItemVisible} onClick={() => scrollNext()}>
      Right
    </button>
  );
}

function Card({ onClick, selected, title, itemId }) {
  const visibility = React.useContext(VisibilityContext);

  return (
    <div
      onClick={() => onClick(visibility)}
      style={{
        width: "160px",
      }}
      tabIndex={0}
    >
      <div className="card">
        <div>{title}</div>
        <div>visible: {JSON.stringify(!!visibility.isItemVisible(itemId))}</div>
        <div>selected: {JSON.stringify(!!selected)}</div>
      </div>
      <div
        style={{
          height: "200px",
        }}
      />
    </div>
  );
}

export default HorizontalScrolls;

export function HorizontalScrollComponent({ foodObject }) {
  const [items, setItems] = useState(foodObject.meals);
  const [startIndex, setStartIndex] = useState(0);
  const [itemCount, setItemCount] = useState(3);
  const [visibleItems, setVisibleItems] = useState([]);
  // const [visibleItemsIndex, setVisibleItemsIndex] = useState([0, 1, 2]);

  useEffect(() => {
    // setItems(foodObject.meals);
  }, []);
  useEffect(() => {
    setVisibleItems(items.slice(startIndex, startIndex + itemCount));
  }, [startIndex]);

  function prevItemFunction() {
    if (startIndex === 0) {
      setStartIndex(items.length - itemCount);

      return console.log("first image");
    }
    setStartIndex(startIndex - 1);
  }

  function nextItemFunction() {
    // console.log(startIndex, items.length - startIndex + itemCount);
    if (startIndex >= items.length - startIndex + itemCount) {
      setStartIndex(0);
      return console.log("last image");
    }
    setStartIndex(startIndex + 1);
  }
  window.onload = function () {
    // Your code
    setVisibleItems(items.slice(startIndex, startIndex + itemCount));
  };
  return (
    <>
      <div className="container scroll-container">
        <FaArrowCircleLeft
          className="arrow left"
          onClick={() => prevItemFunction()}
        />
        <div className="scroll-div w-100">
          {() => setStartIndex(0)}
          {visibleItems.map((item, index) => {
            const { strMeal, strMealThumb, idMeal } = item;

            return (
              <div key={`card${index}`}>
                <FoodCardComponent
                  img={strMealThumb}
                  name={strMeal}
                  price={"200"}
                  id={idMeal}
                />
              </div>
            );
            // }
          })}
        </div>
        <div className="dot">
          {[...Array(Math.round(items.length / itemCount))].map((e, i) => (
            <span className="" key={`dot${i}`}>
              <FaDotCircle />
            </span>
          ))}
        </div>
        <FaArrowCircleRight
          className="arrow right"
          onClick={() => nextItemFunction()}
        />
      </div>
    </>
  );
}
