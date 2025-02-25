import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../components/Layout/Layout";
import { API_URL } from "../config";
import { Modal, Button } from "react-bootstrap";

const GalleryPage = () => {
  const [gallery, setGallery] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Fetch all gallery items
  const getAllGalleryImages = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/api/v1/gallery/get-gallery`);
      setGallery(data.gallery);
    } catch (error) {
      console.error("Error fetching gallery images", error);
    }
  };

  useEffect(() => {
    getAllGalleryImages();
  }, []);

  // Open Modal with selected image
  const openModal = (img) => {
    setSelectedImage(img);
    setShowModal(true);
  };

  // Close Modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  // Delete Gallery Item
  const deleteGalleryItem = async (id) => {
    try {
      await axios.delete(`${API_URL}/api/v1/gallery/delete-gallery/${id}`);
      setGallery(gallery.filter((item) => item._id !== id));
      closeModal();
    } catch (error) {
      console.error("Error deleting gallery item", error);
    }
  };

  return (
    <Layout title="Gallery - Beautiful Moments">
      <div className="container-fluid row mt-3 gallery-page">
        <h1 className="text-center">Gallery</h1>
        <div className="d-flex flex-wrap">
          {gallery?.map((img) => (
            <div
              className="card m-2"
              key={img._id}
              onClick={() => openModal(img)}
            >
              <img
                src={`${API_URL}/api/v1/gallery/get-gallery-image/${img._id}`}
                className="card-img-top"
                alt={img.gname}
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{img.gname}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Viewing and Deleting Image */}
      <Modal show={showModal} onHide={closeModal} centered>
        <Modal.Body>
          {selectedImage && (
            <img
              src={`${API_URL}/api/v1/gallery/get-gallery-image/${selectedImage._id}`}
              alt={selectedImage.gname}
              style={{ width: "100%", height: "50vh", objectFit: "contain" }}
            />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button
            variant="danger"
            onClick={() => deleteGalleryItem(selectedImage._id)}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Layout>
  );
};

export default GalleryPage;
