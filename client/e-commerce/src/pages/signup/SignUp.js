import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../signup/SignUp.css'
const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "user",
  });
  const navigate = useNavigate();

  const [alrt, setAlrt] = useState("");
  const [blankFieldMsg, setBlankFieldMsg] = useState("");
  const [invalidEmailMsg, setInvalidEmailMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    setBlankFieldMsg("");
    setInvalidEmailMsg("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.username || !formData.email || !formData.password) {
      setBlankFieldMsg("Please fill in all fields");
    } else if (!isEmailValid(formData.email)) {
      setInvalidEmailMsg("Invalid email format");
    } else {
      setBlankFieldMsg("");
      setInvalidEmailMsg("");

      axios
        .post(
          `https://gfuture-full-stack-1.onrender.com/api/user/register`,
          formData
        )
        .then((res) => {
          console.log(res.data);
          setAlrt(res.data.message);
          localStorage.setItem("role", res.data.registerdata.role);
        })
        .catch((error) => {
          console.error("Registration failed:", error.message);
        });
    }
  };

  const handleclick = () => {
    navigate("/login");
  };

  const isEmailValid = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  return (
    <div>
      <Navbar />
      <div className="signup-container">
        <form className="signup-form" onSubmit={handleSubmit}>
          <h2 className="signup-title">Register Form</h2>
          <div className="signup-field">
            <label className="signup-label" htmlFor="username">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter username"
              className="signup-input"
            />
          </div>
          <div className="signup-field">
            <label className="signup-label" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              className="signup-input"
            />
          </div>
          <div className="signup-field">
            <label className="signup-label" htmlFor="password">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="signup-input"
            />
          </div>
          {blankFieldMsg && <p className="signup-error">{blankFieldMsg}</p>}
          {invalidEmailMsg && <p className="signup-error">{invalidEmailMsg}</p>}
          {alrt && <p className="signup-alert">{alrt}</p>}
          <div className="signup-buttons">
            <button type="submit" className="signup-btn">
              Register
            </button>
            <button type="button" className="login-btn" onClick={handleclick}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
