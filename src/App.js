import "./App.css";
import heroImage from "./assets/hero-image-removebg-preview.png";
import FoodCardComponent from "./components/foodCard/FoodCard";
import {
  FaArrowCircleLeft,
  FaArrowCircleRight,
  FaShoppingBag,
} from "react-icons/fa";
import StarComponent, { StarImageComponent } from "./components/stars/Stars";
import { useEffect, useState } from "react";

function App() {
  const [foodObject, setFoodObject] = useState({ loading: true, meals: [] });

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast")
      .then((response) => response.json())
      .then((data) => {
        setFoodObject({
          loading: false,
          meals: data.meals,
        });
      });
  }, []);
  return (
    <div className="App">
      <div className="top-nav">
        <div>Logo</div>
        <ul className="nav">
          <li className="active">Home</li>
          <li>Menu</li>
          <li>About us</li>
          <li>Contact</li>
        </ul>

        <div>
          <span>
            <FaShoppingBag />
          </span>
          <button className="btn rounded btn-danger ms-3">Sign up</button>
        </div>
      </div>

      <section className="hero-section">
        <div className="container">
          <div className="row" style={{ maxWidth: "1000px", margin: "0 auto" }}>
            <div className="col-md-6 text-col">
              <div className="text-div">
                <h1>it's not just Food, it's an Experience.</h1>
                <div className="d-flex mt-3">
                  <button className="btn rounded btn-danger  me-2">
                    View menu
                  </button>
                  <button className="btn rounded btn-white border ">
                    Book a table
                  </button>
                </div>
              </div>
              <div className="mt-5">
                <span>Review</span>
                <div
                  className="d-flex"
                  style={{ position: "relative", height: "40px" }}
                >
                  {" "}
                  <StarImageComponent rate={3} />
                </div>
                <div>
                  <StarComponent rate={5} />
                </div>
              </div>
            </div>
            <div className="col-md-6 image-col">
              <img src={heroImage} alt="hero food" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container scroll-container">
          <FaArrowCircleLeft className="left" />
          <div className="scroll-div w-100">
            {!foodObject.loading ? (
              <>
                {foodObject.meals.map((food) => {
                  console.log("food");
                  const { strMeal, strMealThumb, idMeal } = food;
                  return (
                    <FoodCardComponent
                      img={strMealThumb}
                      name={strMeal}
                      price={"200"}
                      id={idMeal}
                    />
                  );
                })}
              </>
            ) : (
              <span className="m-auto fs-1">Loading...</span>
            )}
          </div>
          <FaArrowCircleRight className="right" />
        </div>
      </section>
    </div>
  );
}

export default App;
