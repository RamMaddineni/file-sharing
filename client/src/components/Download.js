import React from "react";
import axios from "axios";
import { useState } from "react";
import "./Download.css";
function Download() {
  const [files, setFiles] = useState([]);
  const [display, setDisplay] = useState(false);
  const handleFiles = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/files");
      console.log(response.data);
      console.log(response.data.length);
      setFiles(response.data);
      setDisplay(true);
    } catch (err) {
      console.log(err.message);
      setDisplay(false);
    }
  };
  return (
    <div className="download-main-div">
      <h1 className="download-h1">File List</h1>
      <button className="download-button" onClick={handleFiles}>
        Display Files
      </button>

      <div className="download-files">
        {files.map((file, ind) => {
          return (
            <div className="download-file" key={ind}>
              <h3>{file.name}</h3>
              <a href={`http://localhost:3000/api/download/${file.id}`}>
                Download
              </a>
            </div>
          );
        })}
      </div>
      {display === true && files.length === 0 && (
        <div>
          <h3>No files to display</h3>
        </div>
      )}
      {display === false && (
        <div>
          <h3>Click to display files</h3>
        </div>
      )}
    </div>
  );
}

export default Download;
