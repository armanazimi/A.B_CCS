import React, { useEffect } from "react";
import "./Sellers.css";

// Image
import sellerImage1 from "../../Assets/Volkswagen Logo.png";
import sellerImage2 from "../../Assets/Toyota Logo.png";
import sellerImage3 from "../../Assets/Ford Logo.png";
import sellerImage4 from "../../Assets/Audi Logo.png";


// Import Aos for animation and scroll reveal
import Aos from "aos";
import "aos/dist/aos.css";


const Sellers = () => {


    // Lets Initialise Aos and set the default animation duration

  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);  

  return (
    <div className="seller section">
      <div className="secContainer container">
        <div data-aos='fade-up' className="secHeading grid">
          <h3 className="secTitle">Explore top sellers in town</h3>

          <p>
            Joseph Samuel Girard holds the Guinness World Record for being the
            greatest salesman in the world.
          </p>
        </div>

        <div className="sellersContainer grid">
          {/* Single seller */}
          <div data-aos='fade-up' className="singleSeller flex">
            <div className="imgDiv flex">
              <img src={sellerImage2} alt="" className="img" />
            </div>
            <span className="info">
              <h4 className="name">Toyota</h4>
              <p>from $40k</p>
            </span>
          </div>
          {/* Single seller */}
          <div data-aos='fade-up' className="singleSeller flex">
            <div className="imgDiv flex">
              <img src={sellerImage4} alt="" className="img" />
            </div>
            <span className="info">
              <h4 className="name">Audi</h4>
              <p>from $40k</p>
            </span>
          </div>
          {/* Single seller */}
          <div data-aos='fade-up' className="singleSeller flex">
            <div className="imgDiv flex">
              <img src={sellerImage3} alt="" className="img" />
            </div>
            <span className="info">
              <h4 className="name">Ford</h4>
              <p>from $40k</p>
            </span>
          </div>
          {/* Single seller */}
          <div data-aos='fade-up' className="singleSeller flex">
            <div className="imgDiv flex">
              <img src={sellerImage1} alt="" className="img" />
            </div>
            <span className="info">
              <h4 className="name">Volkswagen</h4>
              <p>from $40k</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sellers;
