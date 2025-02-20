import React from "react";

function Footer() {
  return (
    <div>
      <footer className="bg-dark text-white py-4 mt-5">
        <div className="container">
          <div className="row text-center text-md-start">
            {/* Section 2: Quick Links */}
            <div className="col-12 col-md-3 mb-3">
              <h5 className="mb-3">Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/" className="text-white text-decoration-none">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-white text-decoration-none">
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/programs"
                    className="text-white text-decoration-none"
                  >
                    Programs
                  </a>
                </li>
                <li>
                  <a
                    href="/programs/past"
                    className="text-white text-decoration-none"
                  >
                    Past Programs
                  </a>
                </li>
                <li>
                  <a
                    href="/programs/upcoming"
                    className="text-white text-decoration-none"
                  >
                    Upcoming Programs
                  </a>
                </li>
                <li>
                  <a
                    href="/gallary"
                    className="text-white text-decoration-none"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-white text-decoration-none"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/donate" className="text-white text-decoration-none">
                    Donate
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy-policy"
                    className="text-white text-decoration-none"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="text-white text-decoration-none"
                  >
                    Terms and Conditions
                  </a>
                </li>
              </ul>
            </div>
            {/* Section 3: Social Media Links with Icons */}
            <div className="col-12 col-md-3 mb-3">
              <h5 className="mb-3">Connect with Us</h5>
              <div className="d-flex justify-content-center justify-content-md-start">
                <a
                  className="me-3 text-primary"
                  href="https://www.facebook.com/profile.php?id=61573123041721"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a
                  className="me-3 text-danger"
                  href="https://www.instagram.com/navjeevan_mandal/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-instagram"></i>
                </a>
                <a
                  className="me-3 text-danger"
                  href="https://www.youtube.com/@NavjeevanAndhApangKalyanMandal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-youtube"></i>
                </a>
              </div>
            </div>
            {/* Section 4: Contact Us with Icons */}
            <div className="col-12 col-md-3 mb-3">
              <h5 className="mb-3">Contact Us</h5>
              <p>
                <i className="bi bi-person-circle me-2"></i> Contact Number:{" "}
                <strong>9545937333 / 9823985253 / 9922946230</strong>
              </p>
              <p>
                <i className="bi bi-envelope me-2"></i> <strong>Email:</strong>
                <a
                  href="mailto:navjeevanandhapang@gmail.com"
                  className="text-white"
                >
                  {" "}
                  navjeevanandhapang@gmail.com
                </a>
              </p>
              <p>
                <i className="bi bi-geo-alt me-2"></i>
                <strong>Address:</strong> Shubhashree Tower, Second Floor,
                Dhandekar Nagar, Yewlewadi, Opposite Kondhwa Hospital, Pune
                411048.
              </p>
            </div>
            {/* Section 1: Copyright Information */}
            <div className="col-12 col-md-3 mb-3 text-center text-md-start">
              <p className="mb-0">
                &copy; {new Date().getFullYear()} Navjeevan Andha Apang Kalyan
                Mandal.
                <br />
                All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
