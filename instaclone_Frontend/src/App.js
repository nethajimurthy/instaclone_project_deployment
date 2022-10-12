import "./App.css";
import React from "react";
import Landingpage from "./Landingpage/Landingpage.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Postview from "./postview/postview";
import Addpost from "./Addpost/Addpost.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landingpage/>}/>
            <Route path="/posts/add" element={<Addpost/>}/>
            <Route path="/posts" element={<Postview />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
