import "../../Styles/User/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseMedical, faLink } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div>
          <p className="ft-title">
            <span className="tbibi-link" onClick={scrollToTop}>
              <FontAwesomeIcon icon={faHouseMedical} /> Tbibi
            </span>
          </p>
          <p className="ft-description">
            Our commitment to your well-being extends beyond diagnosis. We prioritize transparency and security.
            For further assistance or inquiries, please reach out to us using the provided contact information.
            Discover more about our platform, team, and updates by connecting with us on social media.
            Your feedback is invaluable in our ongoing efforts to enhance your experience and provide reliable healthcare resources.
            Thank you for entrusting us with your health.
          </p>
        </div>

        <div>
          <p className="ft-list-title">Talk To Us</p>
          <ul className="ft-list-items">
            <li>email@gmail.com</li>
            <li>email@gmail.com</li>
            <li>+216-55555555</li>
            <li>+216-55555555</li>
          </ul>
        </div>
      </div>

      <div className="ft-copyright">
        <p>© 2024 Tbibi. All rights reserved.</p>
        <ul className="ft-social-links">
          <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
          <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a></li>
          <li><a href="https://github.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLink} /></a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
