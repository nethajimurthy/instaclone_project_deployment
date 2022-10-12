import React from "react";
import "./landingPage.css";
import { Link } from "react-router-dom";

export default function Landingpage() {
  return (
    <div className="Landingarea">
      <img
        src={require("../images/loadimage.png")}
        alt="landingimage"
        className="landimage"
      />
      <div className="textarea">
        <h1>10x Team 04</h1>

        <button className="enterbutton">
          <Link to="/posts">Enter</Link>
        </button>
      </div>
    </div>
  );
}
