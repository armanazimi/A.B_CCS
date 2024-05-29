import React, { useEffect }  from "react";
import "./Footer.css";


// Import Aos for animation and scroll reveal
import Aos from "aos";
import "aos/dist/aos.css";
 

const Footer = () => {

  
    // Lets Initialise Aos and set the default animation duration

  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []); 

  return (
    <div className="footer">
      <div className="footerContainer container">
        <div className="footerMenuDive grid">
          {/* Single Grid1 */}
          <div data-aos='fade-up' className="singleGrid">
            <span className="footerTitle">About</span>
            <ul className="footerUl grid">
              <li className="footerLi">How it works</li>
              <li className="footerLi">Careers</li>
              <li className="footerLi">Affliates</li>
              <li className="footerLi">Media</li>
            </ul>
          </div>
          {/* Single Grid2 */}
          <div data-aos='fade-up' className="singleGrid">
            <span className="footerTitle">About</span>
            <ul className="footerUl grid">
              <li className="footerLi">How it works</li>
              <li className="footerLi">Careers</li>
              <li className="footerLi">Affliates</li>
              <li className="footerLi">Media</li>
            </ul>
          </div>
          {/* Single Grid3 */}
          <div data-aos='fade-up' className="singleGrid">
            <span className="footerTitle">About</span>
            <ul className="footerUl grid">
              <li className="footerLi">How it works</li>
              <li className="footerLi">Careers</li>
              <li className="footerLi">Affliates</li>
              <li className="footerLi">Media</li>
            </ul>
          </div>
          {/* Single Grid5 */}
          <div data-aos='fade-up' className="singleGrid">
            <span className="footerTitle">About</span>
            <ul className="footerUl grid">
              <li className="footerLi">How it works</li>
              <li className="footerLi">Careers</li>
              <li className="footerLi">Affliates</li>
              <li className="footerLi">Media</li>
            </ul>
          </div>
        </div>

        {/* Footer Lower Section */}
        <div className="lowerSection grid">
          <p>2024 All right reserved</p>
          <blockquote>KAB Project</blockquote>
        </div>
      </div>
    </div>
  );
};

export default Footer;
