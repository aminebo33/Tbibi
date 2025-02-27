import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faHouseMedical, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import "../../Styles/User/Navbar.css";

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToInfoSection = () => {
    const infoSection = document.getElementById("info-section");
    if (infoSection) {
      window.scrollTo(0, 600);
    } else {
      window.location.href = '/Tbibi/#start';
    }
  };
  
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#start') {
        window.scrollTo(0, 600);
      }
    };
 
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
  

  const handleScroll = () => {
    setShowScrollTop(window.scrollY > 200);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="navbar-section">
      <h1 className="navbar-title">
        <Link to="/" onClick={handleScrollToTop}>
          <FontAwesomeIcon icon={faHouseMedical} /> Tbibi
        </Link>
      </h1>

      <ul className="navbar-items">
        <li><Link to="/" onClick={handleScrollToTop} className="navbar-links">Home</Link></li>
        <li><Link to="/doctors" onClick={handleScrollToTop} className="navbar-links">Doctors</Link></li>
        <li><Link to="/contact" onClick={handleScrollToTop} className="navbar-links">Contact</Link></li>
      </ul>

      <button className="navbar-btn" onClick={handleScrollToInfoSection}>Start now</button>

      <div className={`mobile-navbar ${navOpen ? "open-nav" : ""}`}>
        <div className="mobile-navbar-close" onClick={handleNavToggle}>
          <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
        </div>
        <ul className="mobile-navbar-links">
          <li><Link to="/" onClick={handleScrollToTop}>Home</Link></li>
          <li><Link to="/doctors" onClick={handleScrollToTop}>Doctors</Link></li>
          <li><Link to="/contact" onClick={handleScrollToTop}>Contact</Link></li>
        </ul>
      </div>

      <div className="mobile-nav">
        <FontAwesomeIcon icon={faBars} onClick={handleNavToggle} className="hamb-icon" />
      </div>

      <div className={`scroll-up ${showScrollTop ? "show-scroll" : ""}`} onClick={handleScrollToTop}>
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Navbar;
