import React, { useEffect } from "react";
import "./Trending.css";

// icons
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";

// Import Aos for animation and scroll reveal
import Aos from "aos";
import "aos/dist/aos.css";

// Image
import car1 from "../../Assets/car4.png";
import car2 from "../../Assets/car1.png";
import car3 from "../../Assets/car10.png";

const Trending = () => {

    // Lets Initialise Aos and set the default animation duration

  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="trending section">
      <div className="secContainer container">
        <div data-aos='fade-up' className="secHeading flex">
          <h3 className="secTitle">Trending Near You</h3>

          <div className="navBtns flex">
            <BsArrowLeftShort className="icon leftIcon" />
            <BsArrowRightShort className="icon rightIcon" />
          </div>
        </div>

        <div className="carContainer grid">
          {/* single car div */}
          <div data-aos='fade-up' className="singleCar grid">
            <div className="imgDiv">
              <img src={car1} alt="Car Image" />
            </div>

            <h5 className="carTitle">Used 2019 Audi S4 Premium Plus</h5>
            <span className="miles">11254 Miles</span>
            <span className="AWD">AWD 4-Cylinder Turbo</span>

            <div className="price_seller flex">
              <span className="price">$45,234</span>
              <span className="seller">Best Seller</span>
            </div>
          </div>
          {/* single car div */}
          <div data-aos='fade-up' className="singleCar grid">
            <div className="imgDiv">
              <img src={car2} alt="Car Image" />
            </div>

            <h5 className="carTitle">Used 2019 Audi S4 Premium Plus</h5>
            <span className="miles">11254 Miles</span>
            <span className="AWD">AWD 4-Cylinder Turbo</span>

            <div className="price_seller flex">
              <span className="price">$45,234</span>
              <span className="seller">Best Seller</span>
            </div>
          </div>
          {/* single car div */}
          <div data-aos='fade-up' className="singleCar grid">
            <div className="imgDiv">
              <img src={car3} alt="Car Image" />
            </div>

            <h5 className="carTitle">Used 2019 Audi S4 Premium Plus</h5>
            <span className="miles">11254 Miles</span>
            <span className="AWD">AWD 4-Cylinder Turbo</span>

            <div className="price_seller flex">
              <span className="price">$45,234</span>
              <span className="seller">Best Seller</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
