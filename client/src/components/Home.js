import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
function Home() {
  return (
    <div className="home-div">
      <h1 className="home-h1">Home</h1>
      <Link to="/upload" className="home-upload">
        Upload a file
      </Link>
      <Link to="/download" className="home-download">
        Download a file
      </Link>
    </div>
  );
}

export default Home;
