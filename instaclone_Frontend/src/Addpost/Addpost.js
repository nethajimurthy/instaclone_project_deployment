import React, { useState } from "react";
import { Createpost } from "../Api/api.js";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header.js";
import './Addpost.css';

const Addpost = () => {
  const [postData, setData] = useState({
    author: "",
    location: "",
    image: "",
    description: "",
  });

  let navigate = useNavigate();
  const routeChange = () => {
    navigate("/posts");
  };

  const handle = (e) => {
    console.log("ok");
    const copyData = { ...postData };
    copyData[e.target.id] = e.target.value;
    setData(copyData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Createpost(postData);
    e.target.reset();
    routeChange();
  };

  return (
    <div>
      <Header />
      <form className="Postform" onSubmit={handleSubmit}>
        <input
          className="imagefield"
          type="file"
          placeholder="No file chosen"
          id="image"
          onChange={(e) => handle(e)}
        />
        <input
          className="authorfield"
          type="text"
          placeholder="Author"
          id="author"
          onChange={(e) => handle(e)}
        />
        <input
          className="locationfield"
          type="text"
          placeholder="Location"
          id="location"
          onChange={(e) => handle(e)}
        />
        <input
          className="descriptionfield"
          type="text"
          placeholder="Description"
          id="description"
          onChange={(e) => handle(e)}
        />
        <button className="postbutton" type="submit">
          Post
        </button>
      </form>
    </div>
  );
};

export default Addpost;
