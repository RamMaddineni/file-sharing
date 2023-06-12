import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/upload">Upload a file</Link>
      <Link to="/download">Download a file</Link>
    </div>
  );
}

export default Home;
