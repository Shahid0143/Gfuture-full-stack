import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../login/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const obj = {
    email,
    password,
  };

  const isEmailValid = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const handleLogin = () => {
    try {
      if (!email || !password) {
        setMessage("Please enter both email and password.");
      } else {
        setLoading(true);
        localStorage.setItem("email", email);
        axios
          .post(`https://gfuture-full-stack-1.onrender.com/api/user/login`, obj)
          .then((res) => {
            const token = res.data.token;
            if (token) {
              localStorage.setItem("logintoken", token);
              setMessage("Login successful!");
              navigate("/");
            }
          })
          .catch((error) => {
            console.error("Login failed:", error);
            setMessage("Login failed. Please check your email and password.");
          })
          .finally(() => {
            setLoading(false);
          });
      }
    } catch (error) {
      console.error("Unexpected error during login:", error);
    }
  };

  const handleSignupClick = () => {
    navigate("/signup");
  };

  const handlePasswordFocus = () => {
    if (!isEmailValid(email)) {
      setMessage("Email is not valid");
    } else {
      setMessage("");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="login-container">
        <div className="login-box">
          <h2 className="">Login</h2>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={handlePasswordFocus}
          />
          <div>
            <button
              className="register-btn"
              onClick={handleLogin}
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
            <button
              className="register-btn"
              onClick={handleSignupClick}
              disabled={loading}
            >
              Register
            </button>
          </div>
          <p className="message">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
