import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../../CartContext";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const location = useLocation();
  const [access, setAccess] = useState(localStorage.getItem("logintoken"));
  const navigate = useNavigate();
  const { cart } = useCart();

  useEffect(() => {
    setAccess(localStorage.getItem("logintoken"));
  }, []);

  const logout = () => {
    localStorage.removeItem("logintoken");
    setAccess(null);
    navigate("/");
  };

  return (
    <>
      <div className="navbarContainer">
        <div className="navbar">
          <Link to="/">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
          </Link>
          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
          </div>
          <div className="icons">
            <sup>{cart.length}</sup>
            <Link to="/cart">
              <ShoppingBagOutlinedIcon sx={{ fontSize: "28px" }} />
            </Link>
          </div>
          {access ? (
            <span
              onClick={logout}
              className={`nav-link ${
                location.pathname === "/signup" ? "active" : ""
              }`}
              to="/signup"
            >
              Logout
            </span>
          ) : (
            <Link
              className={`nav-link ${
                location.pathname === "/login" ? "active" : ""
              }`}
              to="/login"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
