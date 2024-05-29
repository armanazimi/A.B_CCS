import React from "react";

// scss
import "./App.css";

// Component
import Auction from "./Components/Auction/Auction";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Search from "./Components/Search/Search";
import Trending from "./Components/Trending/Trending";
import Sellers from "./Components/Sellers/Sellers";
import Review from "./Components/Review/Review";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div className="title">
      {/* navbar */}
      <Navbar />
      {/* home */}
      <Home />
      {/* search */}
      <Search />
      {/* trending */}
      <Trending />
      {/* swllers */}
      <Sellers />
      {/* auction */}
      <Auction />
      {/* reviwe */}
      <Review />
      {/* footer */}
      <Footer />
    </div>
  );
};

export default App;
