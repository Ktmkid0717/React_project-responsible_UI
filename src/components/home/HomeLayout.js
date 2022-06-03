import React from "react";
import "./homeLayout.css";
import Navbar from "./Navbar";
import Profile from "./profile";
const HomeLayout = (props) => {
  return (
    <div className="main-container">
      <div className="sub-container">
        <Navbar />
        <Profile />
      </div>
    </div>
  );
};

export default HomeLayout;
