import React, { useState } from "react";
import axios from "axios";
import Layout from "../components/Layout/Layout";
import { useNavigate } from "react-router-dom";
import "../styles/Creategallery.css";

const Creategallery = () => {
  const [gname, setGname] = useState("");
  const [date, setDate] = useState("");
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Function to format date in DD-MM-YYYY format
  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split("-");
    return `${day}-${month}-${year}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (!gname || !date || !file) {
      setError("All fields are required.");
      return;
    }

    const formattedDate = formatDate(date);

    const formData = new FormData();
    formData.append("gname", gname);
    formData.append("date", formattedDate);
    formData.append("g_image", file);

    try {
      await axios.post(
        "https://renderproject-rflr.onrender.com/api/v1/gallery/create-gallery",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setMessage("Gallery item uploaded successfully!");
      setGname("");
      setDate("");
      setFile(null);
      setTimeout(() => navigate("/gallary"), 1000); // Redirect after success
    } catch (error) {
      console.error("Upload error:", error);
      setError("Error uploading image.");
    }
  };

  return (
    <Layout>
      <br />
      <h1 className="text-center text-primary fw-bold">Add to Gallery</h1>
      <div className="create-gallery-container">
        {message && (
          <p className="alert alert-success text-center">{message}</p>
        )}
        {error && <p className="alert alert-danger text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="create-gallery-form">
          <div className="mb-3">
            <label className="form-label">Name of Image</label>
            <input
              type="text"
              className="form-control"
              value={gname}
              onChange={(e) => setGname(e.target.value)}
              required
              placeholder="Enter image name"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Date (DD-MM-YYYY)</label>
            <input
              type="date"
              className="form-control"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Upload Image</label>
            <input
              type="file"
              className="form-control"
              onChange={(e) => setFile(e.target.files[0])}
              required
            />
            {file && (
              <small className="text-success">Selected: {file.name}</small>
            )}
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Upload
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Creategallery;
