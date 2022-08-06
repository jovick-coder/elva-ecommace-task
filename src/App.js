import "./App.css";
import heroImage from "./assets/hero-image-removebg-preview.png";
import { FaBars, FaShoppingBag } from "react-icons/fa";
import StarComponent, { StarImageComponent } from "./components/stars/Stars";
import { useEffect, useState } from "react";
import { HorizontalScrollComponent } from "./components/horizontalScrolls/HorizontalScrolls";

function App() {
  const [foodObject, setFoodObject] = useState({
    loading: true,
    meals: [],
  });
  const [openMobileNav, setOpenMobileNav] = useState(true);

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
        <ul className="nav" style={!openMobileNav ? { display: "none" } : null}>
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
          <button
            className="mobile-menu"
            onClick={() => setOpenMobileNav(!openMobileNav)}
          >
            <FaBars />
          </button>
        </div>
      </div>

      <section className="hero-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-col">
              <div className="text-div">
                <h1>it's not just Food, it's an Experience.</h1>
                <div className="d-flex mt-3">
                  <button className="btn rounded btn-danger  me-2">
                    View menu
                  </button>
                  <button className="btn rounded bg-white border ">
                    Book a table
                  </button>
                </div>
              </div>
              <div className="mt-5 review-div">
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
            <div className="col-md-6 image-col d-n one d-md-block">
              <img src={heroImage} alt="hero food" />
            </div>
          </div>
        </div>
      </section>
      <section>
        {!foodObject.loading ? (
          <>
            <HorizontalScrollComponent foodObject={foodObject} />
          </>
        ) : (
          <span className="m-auto fs-1">Loading...</span>
        )}
      </section>
    </div>
  );
}

export default App;
