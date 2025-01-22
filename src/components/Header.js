import { LOGO_URL } from "../utils/constants";
import { useState, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/Hooks/useOnlineStatus";

const Header = () => {
  const [loginButton, setloginButton] = useState("login");
  let btnName = "login";
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header flex justify-between bg-orange-100 shadow-md ">
      <div className="logo_container">
        <Link to="/">
          <img
            className="logo w-32"
            src={LOGO_URL}
            alt="Food company Logo"
          ></img>
        </Link>
      </div>
      <div className="nav-items flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 font-bold text-purple-800 text-xl">
            Online Status: {onlineStatus ? "💚" : "❤️"}
          </li>
          <li className="px-4 font-bold text-purple-800 text-xl hover:shadow-md">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 font-bold text-purple-800 text-xl hover:shadow-md">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 font-bold text-purple-800 text-xl hover:shadow-md">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 font-bold text-purple-800 text-xl hover:shadow-md">
            <Link to="/store">Instant Store</Link>
          </li>
          <li className="px-4 font-bold text-purple-800 text-xl">Cart</li>
          <button
            className="login-button px-4 py-0 font-bold text-purple-800 bg-yellow-50 hover:bg-pink-100 hover:border-black border-2 border-gray-500 rounded-lg"
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
