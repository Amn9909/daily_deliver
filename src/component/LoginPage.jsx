// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Login.css";
import Id from "../assets/id.gif";
import password from "../assets/password.gif";
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
          <img src={profile} alt="" />
          <input type="Name" />
        </div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={Id} alt="" />
          <input type="email" />
        </div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={password} alt="" />
          <input type="Password" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
