import axios from "axios";
import React, { useEffect, useState } from "react";

export const FetchPosts = () => {
  const [values, setVal] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("http://localhost:5000/posts");
        setVal(res.data);
        console.log("set to values");
        console.log(res.data);
      } catch (err) {
        console.log(err.message);
      }
    })();
  },[]);

  return values;
};

export const Createpost=(newPost)=>{
  axios.post("http://localhost:5000/posts/add",newPost)
  .then((response) =>{
  console.log(response);
})
.catch((error)=> {
  console.log(error);
})
}
