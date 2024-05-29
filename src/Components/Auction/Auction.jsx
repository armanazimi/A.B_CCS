import React, { useEffect } from "react";
import "./Auction.css";

// icons
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";

// Image
import car1 from "../../Assets/homeImage2.png";
import car3 from "../../Assets/auction2.png";
import car2 from "../../Assets/auction.png";

// Import Aos for animation and scroll reveal
import Aos from "aos";
import "aos/dist/aos.css";

const Auction = () => {
  // Lets Initialise Aos and set the default animation duration

  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="auction section">
      <div className="secContainer container">
        <div data-aos="fade-up" className="secHeading flex">
          <h3 className="secTitle">Active Auctions</h3>

          <div className="navBtns flex">
            <BsArrowLeftShort className="icon leftIcon" />
            <BsArrowRightShort className="icon rightIcon" />
          </div>
        </div>

        <div className="carContainer grid">
          {/* single car div */}
          <div data-aos="fade-up" className="singleCar singleCarActive grid">
            <div className="imgDiv">
              <img src={car1} alt="Car Image" />
            </div>
            <hr />
            <h5 className="carTitle">Used 2019 Audi S4 Premium Plus</h5>
            <span className="miles">11254 Miles</span>
            <span className="AWD">AWD 4-Cylinder Turbo</span>

            <div className="price_buyBtn flex">
              <span className="price">$45,234</span>
              <span className="buyBtn">Buy Now</span>
            </div>
          </div>

          {/* single car div */}
          <div data-aos="fade-up" className="singleCar grid">
            <div className="imgDiv">
              <img src={car3} alt="Car Image" />
            </div>
            <hr />
            <h5 className="carTitle">Used 2019 Audi S4 Premium Plus</h5>
            <span className="miles">11254 Miles</span>
            <span className="AWD">AWD 4-Cylinder Turbo</span>

            <div className="price_buyBtn flex">
              <span className="price">$45,234</span>
              <span className="buyBtn">Buy Now</span>
            </div>
          </div>

          {/* single car div */}
          <div data-aos="fade-up" className="singleCar singleCarActive grid">
            <div className="imgDiv">
              <img src={car2} alt="Car Image" />
            </div>
            <hr />
            <h5 className="carTitle">Used 2019 Audi S4 Premium Plus</h5>
            <span className="miles">11254 Miles</span>
            <span className="AWD">AWD 4-Cylinder Turbo</span>

            <div className="price_buyBtn flex">
              <span className="price">$45,234</span>
              <span className="buyBtn">Buy Now</span>
            </div>
          </div>

          {/* single car div */}
          <div data-aos="fade-up" className="singleCar grid">
            <div className="imgDiv">
              <img src={car1} alt="Car Image" />
            </div>
            <hr />
            <h5 className="carTitle">Used 2019 Audi S4 Premium Plus</h5>
            <span className="miles">11254 Miles</span>
            <span className="AWD">AWD 4-Cylinder Turbo</span>

            <div className="price_buyBtn flex">
              <span className="price">$45,234</span>
              <span className="buyBtn">Buy Now</span>
            </div>
          </div>

          {/* single car div */}
          <div data-aos="fade-up" className="singleCar singleCarActive grid ">
            <div className="imgDiv">
              <img src={car3} alt="Car Image" />
            </div>
            <hr />
            <h5 className="carTitle">Used 2019 Audi S4 Premium Plus</h5>
            <span className="miles">11254 Miles</span>
            <span className="AWD">AWD 4-Cylinder Turbo</span>

            <div className="price_buyBtn flex">
              <span className="price">$45,234</span>
              <span className="buyBtn">Buy Now</span>
            </div>
          </div>

          {/* single car div */}
          <div data-aos="fade-up" className="singleCar  grid">
            <div className="imgDiv">
              <img src={car2} alt="Car Image" />
            </div>
            <hr />
            <h5 className="carTitle">Used 2019 Audi S4 Premium Plus</h5>
            <span className="miles">11254 Miles</span>
            <span className="AWD">AWD 4-Cylinder Turbo</span>

            <div className="price_buyBtn flex">
              <span className="price">$45,234</span>
              <span className="buyBtn">Buy Now</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auction;
