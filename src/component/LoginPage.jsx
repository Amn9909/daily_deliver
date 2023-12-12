// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Login.css";

import password from "../assets/password.png";
import profile from "../assets/profile.png";

const LoginPage = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="text">Signup </div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={profile} alt="Profile" />
          <input type="text" />
        </div>
      </div>
      <div className="inputs">
        <div className="input">
          <input type="Email" />
        </div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={password} alt="Password" />
          <input type="Password" />
        </div>
      </div>
      <div className="forgetPassword">forgetPassword</div>
      <div className="submit-container">
        <div className="submit">signup</div>
        <div className="submit">Login</div>
      </div>

    </div>
  );
};

export default LoginPage;
