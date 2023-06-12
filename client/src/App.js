import "./App.css";
import React from "react";
import Upload from "./components/Upload";
import FileList from "./components/FileList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/upload" element={<Upload />} />
        <Route path="/download" element={<FileList />} />
      </Routes>
    </Router>
  );
}

export default App;
