import "./App.css";
import heroImage from "./assets/hero-image-removebg-preview.png";
import FoodCardComponent from "./components/foodCard/FoodCard";
import {
  FaArrowCircleLeft,
  FaArrowCircleRight,
  FaShoppingBag,
  FaStar,
} from "react-icons/fa";
import { foodObject } from "./foodObject";
import StarComponent from "./components/stars/Stars";

function App() {
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
                <div>images</div>
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
          <div className="scroll-div">
            {foodObject.meals.map((food) => {
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
          </div>
          <FaArrowCircleRight className="right" />
        </div>
      </section>
    </div>
  );
}

export default App;
