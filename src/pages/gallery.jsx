import React, { useEffect, useState } from "react";
//import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import "../styles/Gallery.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Modal, Button } from "react-bootstrap";
import { API_URL } from "../config";

function Gallery() {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const imagesPerPage = 9;
  //const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/api/v1/gallery/get-gallery`
        );
        setGallery(response.data.reverse());
      } catch (err) {
        setError("Error fetching gallery data");
      } finally {
        setLoading(false);
      }
    };
    fetchGalleryData();
  }, []);

  // const deleteImage = async (imageId) => {
  //   try {
  //     await axios.delete(
  //       `http://localhost:8086/api/v1/gallery/delete-gallery/${imageId}`
  //     );
  //     setGallery((prevGallery) =>
  //       prevGallery.filter((image) => image._id !== imageId)
  //     );
  //     closeModal();
  //   } catch (err) {
  //     console.error("Error deleting image", err);
  //   }
  // };

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = gallery.slice(indexOfFirstImage, indexOfLastImage);

  const openModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  if (loading) {
    return (
      <Layout>
        <div className="loading-container text-center py-5" data-aos="fade-up">
          <h2>Loading gallery...</h2>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="error-container text-center py-5" data-aos="fade-up">
          <h2>{error}</h2>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="gallery-container container py-5" data-aos="fade-up">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="mb-0">Our Gallery</h1>
          {/* <div>
            <ToggleButton
              value="photos"
              variant="outline-primary"
              onClick={() => navigate("/gallary")}
            >
              Photos
            </ToggleButton>{" "}
            &nbsp;&nbsp;
            <ToggleButton
              value="videos"
              variant="outline-primary"
              onClick={() => navigate("/videos")}
            >
              Videos
            </ToggleButton>
          </div> */}
          {/* <button
            className="btn btn-success"
            onClick={() => navigate("/create-gallery")}
            data-aos="fade-left"
          >
            + Add New Photo
          </button> */}
        </div>

        <div className="row g-4">
          {currentImages.map((image) => (
            <div className="col-12 col-sm-6 col-md-3 col-lg-4" key={image._id}>
              <div className="card shadow-sm h-100 position-relative">
                <img
                  src={`${API_URL}/${image.g_image}`}
                  className="card-img-top"
                  alt={image.gname}
                  style={{ width: "100%", height: "45vh", cursor: "pointer" }}
                  data-aos="fade-right"
                  onClick={() => openModal(image)}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="pagination-controls text-center mt-4">
          <button
            className="btn btn-secondary me-2"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="page-number">
            Page {currentPage} of {Math.ceil(gallery.length / imagesPerPage)}
          </span>
          <button
            className="btn btn-primary ms-2"
            onClick={() =>
              setCurrentPage((prev) =>
                Math.min(prev + 1, Math.ceil(gallery.length / imagesPerPage))
              )
            }
            disabled={currentPage === Math.ceil(gallery.length / imagesPerPage)}
          >
            Next
          </button>
        </div>
      </div>

      <Modal show={showModal} onHide={closeModal} centered>
        <Modal.Body className="text-center">
          {selectedImage && (
            <img
              src={`https://renderproject-rflr.onrender.com/${selectedImage.g_image}`}
              alt="Full Size"
              className="img-fluid"
              style={{
                width: "100%",
                height: "100%",
                cursor: "pointer",
                borderRadius: "0px",
              }}
            />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          {/* <Button
            variant="danger"
            onClick={() => deleteImage(selectedImage._id)}
          >
            Delete
          </Button> */}
        </Modal.Footer>
      </Modal>
    </Layout>
  );
}

export default Gallery;
