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
      e.target.reset();
      setFile(null);
    } else {
      console.log("No file selected");
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h1>File Sharing</h1>
      <button
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
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Upload;
