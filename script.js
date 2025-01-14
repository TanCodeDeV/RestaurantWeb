import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo_container">
        <img
          className="logo"
          src="https://static.vecteezy.com/system/resources/previews/013/810/890/original/restaurant-food-chef-logo-design-planet-food-catering-logo-template-online-order-food-logo-icon-symbol-vector.jpg"
          alt="Food company Logo"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <h5>Made with Love by Tanmayi Bhave</h5>;
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="resturant-container">
        <ResturantCard></ResturantCard>
      </div>
    </div>
  );
};

const ResturantCard = () => {
  return (
    <div className="res-card">
      <img
        className="res-img"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/1053423198dd62c4a112f158c5f6840d"
      ></img>
      <h3>Sharma Pav Bhaji</h3>
      <h4>Pav Bhaji, Tava Pulao</h4>
      <h4>4.4⭐</h4>
      <h4>38 Mins</h4>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout></AppLayout>);
