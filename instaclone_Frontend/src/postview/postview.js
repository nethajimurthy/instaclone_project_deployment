import React, { useState } from "react";
import {FetchPosts} from "../Api/api.js";
import Header from '../Header/Header.js'
import './postview.css';

const PostView = () => {
  const [likes,setlikes]=useState(0)
  const postData = FetchPosts();

  return (
    <div>
      <Header/>
      <div className="posts">
      {postData.map((post) => {
        return (
          <ul className="postarea">
            <div className="top">
              <div className="info">
                <h2>{post.author}</h2>
                <p>{post.location}</p>
              </div>
              <img className="moreicon" src={require('../images/moreicon.png')} alt="moreicon"/>
            </div>
            <img className="postimage" src={post.image} alt="post_image" />
            <div className="bottom">
              <div className="likes">
                <div className="likeshare">
                  <img src={require('../images/hearticon.png')} alt='heart icon' onClick={() => setlikes(likes+1)}/>
                  <img src={require('../images/shareicon.png')} alt='share icon'/>
                </div>
                <h4>{likes} likes</h4>
              </div>
              <h4>{post.date}</h4>
            </div>
            <h1 className="description">{post.description}</h1>
          </ul>
        );
      })}
      </div>
    </div>
  );
};

export default PostView;
