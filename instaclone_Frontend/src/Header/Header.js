import React from "react";
import { Link } from "react-router-dom";
import './header.css'

const Header = () => {
  return (
    <div className="Header">
      <div className="logoarea">
        <img src={require("../images/logoicon.png")} alt="logo" />
        <h1>Instaclone</h1>
      </div>
      <Link to="/posts/add">
      <img className="cameraarea"
        src={require("../images/Camera.png")}
        alt="camera_image"
      />
      </Link>
    </div>
  );
};

export default Header;
