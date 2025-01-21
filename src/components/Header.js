import { LOGO_URL } from "../utils/constants";
import { useState, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/Hooks/useOnlineStatus";



const Header = () => {
  const [loginButton, setloginButton] = useState("login");
  let btnName = "login";
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo_container">
        <img className="logo" src={LOGO_URL} alt="Food company Logo"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus ? "💚" : "❤️"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/instaOrder">Instant Delivery</Link>
          </li>
          <li>Cart</li>
          <button
            className="login-button"
            onClick={() => {
              if (loginButton == "login") {
                setloginButton("logout");
              } else {
                setloginButton("login");
              }

              console.log("Button clicked", loginButton);
            }}
          >
            {loginButton}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
