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
      <h1 className="title">Sign Up</h1>
      <p className="subtitle">Create your CuraFinds account</p>

      <form onSubmit={handleSignUp} className="auth-form">
        <div>
          <label>Name</label>
          <input
            type="text"
            placeholder="Your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-field"
          />
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
            placeholder="Choose a password"
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

        <button type="submit" className="submit-btn">
          Sign Up
        </button>

        <p className="switch-text">
          Already have an account?{" "}
          <span className="link" onClick={() => navigate("/")}>
            Sign In
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignUpPage;
