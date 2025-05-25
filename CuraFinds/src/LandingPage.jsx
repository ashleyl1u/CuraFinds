import React, { useState } from "react";
import "./LandingPage.css";

const LandingPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [message, setMessage] = useState(null); // { type: "error"|"success"|"info", text: string }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage({ type: "error", text: "Please fill all required fields" });
      return;
    }

    if (!isChecked) {
      setMessage({ type: "error", text: "Please agree to Terms of Service" });
      return;
    }

    setMessage({ type: "success", text: "Form submitted successfully" });
    console.log("Form submitted", { email, password });
  };

  const handleGoogleSignIn = () => {
    setMessage({ type: "info", text: "Initiating Google authentication..." });

    // Removed the success message after google auth
    setTimeout(() => {
      console.log("Google authentication successful");
    }, 1500);
  };

  return (
    <div className="container">
      <h1 className="title">CuraFinds</h1>
      <p className="subtitle">Discover personalized health insights for chronic conditions</p>

      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input"
        />

        <label htmlFor="password" className="label">
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input"
        />

        <div className="checkboxContainer">
          <input
            id="terms"
            type="checkbox"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
            className="checkbox"
          />
          <label htmlFor="terms" className="checkboxLabel">
            Agree to our{" "}
            <a href="#" className="link">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="link">
              Privacy Policy
            </a>
          </label>
        </div>

        <button type="submit" className="submitButton">
          Sign up
        </button>
      </form>

      {message && <div className={`message ${message.type}`}>{message.text}</div>}

      <div className="dividerContainer">
        <div className="divider"></div>
        <span className="dividerText">OR</span>
        <div className="divider"></div>
      </div>

      <button className="googleButton" type="button" onClick={handleGoogleSignIn}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          style={{ marginRight: 8 }}
        >
          <path
            d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
            fill="#4285F4"
          />
        </svg>
        Sign up with Google
      </button>

      <div className="signInText">
        Already have an account?{" "}
        <a href="#" className="link">
          Sign In
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
