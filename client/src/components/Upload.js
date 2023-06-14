import "./Upload.css";
import { useRef } from "react";
import { useState } from "react";
import axios from "axios";
function Upload() {
  const [file, setFile] = useState(null);
  const fileInput = useRef(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
    console.log(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      const formData = new FormData();
      console.log(file);
      formData.append("name", file.name);
      formData.append("file", file);
      console.log(formData);
      const response = await axios.post(
        "http://localhost:3000/api/upload",
        formData
      );
      console.log(response.data);
      setFile(null);
    } else {
      console.log("No file selected");
    }
  };

  return (
    <form
      className="upload-form"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <h1 className="upload-h1">File Sharing</h1>
      <button
        className="upload-button"
        onClick={() => {
          fileInput.current.click();
        }}
      >
        Upload
      </button>
      <input
        type="file"
        onChange={(e) => handleFileChange(e)}
        ref={fileInput}
        style={{ display: "none" }}
      />
      <p>{file && file.name}</p>
      {file && (
        <button className="upload-submit" onClick={handleSubmit}>
          Submit
        </button>
      )}
    </form>
  );
}

export default Upload;
