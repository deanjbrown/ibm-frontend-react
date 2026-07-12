import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

import Navbar from "../Components/Navbar";
import "./ContactPage.css";

function ContactPage() {
  return (
    <>
      <Navbar />
      <div className="contact-page-container">
        <div className="contact-page-content">

          {/* Left Section - Contact Form */}
          <div className="contact-left-section">
            <h1>Contact Us</h1>
            <p>
              If you have any questions, feedback, or inquiries, please feel
              free to reach out to us. We value your input and are here to
              assist you in any way we can.
            </p>
            <form className="contact-form">
              <label htmlFor="name">Name: </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
              />
              <label htmlFor="email">Email: </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
              />
              <label htmlFor="message">Message: </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Your Message"
                required
              ></textarea>
              <button className="submit-button" type="submit">
                Submit
              </button>
            </form>
          </div>

          {/* Right Section - Contact Information */}
          <div className="contact-right-section">
            <h1>Our Contact Information</h1>
            <p>
              <strong>Address:</strong> 123 Main Street, Anytown, USA
            </p>
            <p>
              <strong>Phone:</strong> (555) 123-4567
            </p>
            <p>
              <strong>Email:</strong> info@example.com
            </p>

            <hr className="divider" />

            <h3>Follow Us on Social Media</h3>
            <div className="social-media-links">
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/yourpage"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.twitter.com/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <RiTwitterXLine />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
