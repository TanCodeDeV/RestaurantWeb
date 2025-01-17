import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginButton, setloginButton] = useState("login");
  let btnName = "login";
  return (
    <div className="header">
      <div className="logo_container">
        <img className="logo" src={LOGO_URL} alt="Food company Logo"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contct Us</Link>
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
