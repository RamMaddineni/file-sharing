import React from "react";
import axios from "axios";
import { useState } from "react";
function FileList() {
  const [files, setFiles] = useState([]);
  const [display, setDisplay] = useState(false);
  const handleFiles = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/files");
      console.log(response.data);
      if (response.data) {
        setFiles(response.data);
        setDisplay(true);
      }
    } catch (err) {
      console.log(err.message);
      setDisplay(false);
    }
  };
  return (
    <div>
      <h1>File List</h1>
      <button onClick={handleFiles}> Display Files</button>
      {display ? (
        <div>
          {files.map((file) => {
            return (
              <div>
                <h3>{file.name}</h3>
                <a href={`http://localhost:3000/api/files/${file._id}`}>
                  Download
                </a>
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          <h3>No files to display</h3>
        </div>
      )}
    </div>
  );
}

export default FileList;
