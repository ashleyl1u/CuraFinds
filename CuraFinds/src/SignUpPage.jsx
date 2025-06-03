import React, { useState } from "react";
import "./SignUpPage.css";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !agree) {
      alert("Please complete all fields and agree to the terms.");
      return;
    }

    console.log("Sign up with", { name, email, password });
    alert("Account created!");
    navigate("/");
  };

  return (
    <div className="auth-card">
      <h1 className="title">CuraFinds</h1>
      <p className="subtitle">Discover personalized health insights for chronic conditions</p>
      <h2 className="form-title">Create Account</h2>
      <form onSubmit={handleSignUp} className="auth-form">
        <div className="name-field">
          <div>
            <label>First Name</label>
            <input
              type="text"
              placeholder="Your first name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input-field"
            />
          </div>

          <div>
            <label>Last Name</label>
            <input
              type="text"
              placeholder="Your last name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input-field"
            />
          </div>
          



        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
        </div>

        <div className="checkbox-wrapper">
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          <span>
            I agree to the{" "}
            <a href="#" className="link">
              Terms
            </a>{" "}
            and{" "}
            <a href="#" className="link">
              Privacy Policy
            </a>
          </span>
        </div>

        <div>
          <button type="submit" className="submit-btn">
            Sign Up
          </button>

          <p className="switch-text">
            Already have an account?{" "}
            <span className="link" onClick={() => navigate("/")}>
              Login now.
            </span>
          </p>

        </div>

        
      </form>
    </div>
  );
};

export default SignUpPage;
