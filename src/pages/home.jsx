import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import "../styles/Home.css";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import img7 from "../Images/facebook.png";
import img3 from "../Images/img1.jpg";
import img2 from "../Images/pic5.jpeg";
import img4 from "../Images/pic2.jpeg";
import img5 from "../Images/pic4.jpg";
import img6 from "../Images/pic6.jpeg";
import { Link } from "react-router-dom";

function Home() {
  const images = [img3, img6, img2, img4, img5];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
    //eslint-disable-next-line
  }, []);

  return (
    <Layout>
      {/* Marquee Section */}
      <div className="marquee-container">
        <div className="marquee">
          <p>
            Welcome to Navjeevan Andh Apang Kalyan Mandal — Address: Shubhashree
            Tower, Second Floor, Dhandekar Nagar, Yewlewadi, Opposite Kondhwa
            Hospital, Pune 411048. | Email: navjeevanandhapang@gmail.com |
            Contact: 9545937333 / 9823985253
          </p>
        </div>
      </div>

      {/* Background Image Section */}
      <div
        className="home-background"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      >
        <div className="home-content" data-aos="fade-up">
          <h1 className="home-title">
            Welcome to Navjeevan Andh Apang Kalyan Mandal
          </h1>
          <p className="home-description">
            Navjeevan Andh Apang Kalyan Mandal Operated Blind Handicapped
            Training Centre and Hostel this unit was first started in the year
            1992 at Ambegaon Budruk Pune 46. And in the year 1996-97, it was
            approved on grant basis, all the expenses were being borne by the
            management of the institution, As the space is less as per the
            government regulations, some flats in the building were taken on
            lease at Shubashtri Tower Dhandekar Nagar Yevalewadi Kondhwa Pune
            411048 .
          </p>
          <button className="learn-more-button">
            <Link to="/about" className="learn-btn">
              Learn More
            </Link>
          </button>
        </div>
      </div>

      {/* Information Sections */}
      <div className="info-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center" data-aos="fade-right">
              <img
                src={img7}
                alt="Empowering Communities"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-6" data-aos="fade-left">
              <h2 className="info-title">Empowering Communities</h2>
              <p className="info-description">
                Navjeevan Kendra is committed to empowering individuals and
                families by providing access to education and skill-building
                programs...
              </p>
              <ul className="info-list">
                <li>Free education for underprivileged children</li>
                <li>Skill training programs tailored to local needs</li>
                <li>Opportunities for women’s empowerment and leadership</li>
              </ul>
            </div>
          </div>

          <div className="row align-items-center mt-5">
            <div className="col-md-6" data-aos="fade-right">
              <h2 className="info-title">Building a Brighter Future</h2>
              <p className="info-description">
                By fostering an inclusive environment, Navjeevan Kendra aims to
                build a brighter future for everyone...
              </p>
              <ul className="info-list">
                <li>Comprehensive job placement assistance</li>
                <li>Collaboration with local industries for growth</li>
                <li>
                  Focus on sustainable development and eco-friendly practices
                </li>
              </ul>
            </div>
            <div className="col-md-6 text-center" data-aos="fade-left">
              <img
                src={img2}
                alt="Building a Brighter Future"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Feedback Section */}
      <div>
        <button className="learn-more-button justify-items-center">
          <Link to="/create-gallery" className="learn-btn">
            Add To Gallery
          </Link>
        </button>
      </div>

      <div>
        <div className="volunteer-description-container" data-aos="fade-right">
          <h2>Volunteer with Navjeevan Andh Apang Kalyan Mandal</h2>
          <p>
            Join us in empowering individuals with visual and physical
            disabilities. At Navjeevan, we work towards creating an inclusive
            environment where everyone can thrive. As a volunteer, you’ll help
            organize events, provide educational support, assist with mobility
            training, and offer companionship. Your involvement will make a
            lasting impact on the lives of many, helping build a more inclusive
            society.
          </p>
          <br></br>
          <a
            href="/volunteer-form"
            className="cta-btn btn-cta"
            data-aos="fade-right"
          >
            Become a Volunteer
          </a>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
