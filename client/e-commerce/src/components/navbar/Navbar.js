import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [access, setAccess] = useState(localStorage.getItem("logintoken"));
  const navigate = useNavigate();

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
          {/* Added a Logo */}

          <div className="logo">
            <img src={logo} alt="" />
          </div>

          {/* Added a Links */}

          <div className="links">
            <Link to="/">Home</Link>

            <Link to="/shop">Shop</Link>
          </div>

          {/* Added a Icons */}

          <div className="icons">
            <sup>2</sup>
            <Link to="/cart">
              <ShoppingBagOutlinedIcon sx={{ fontSize: "28px" }} />
            </Link>
          </div>

          {/* Added Auth */}

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
