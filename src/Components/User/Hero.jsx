import { useState, useEffect } from "react";
import "../../Styles/User/Hero.css";

function Hero() {
  const [doctorCount, setDoctorCount] = useState(150);
  const [diagnosedDiseasesCount, setDiagnosedDiseasesCount] = useState(1200);
  const [error, setError] = useState(null);

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <h2 className="text-title">Find your Doctor and make an Appointment</h2>
          <p className="text-descritpion">
            Access essential medical information and connect with nearby doctors swiftly. Obtain the guidance you need, along with the contact details and locations of trusted healthcare professionals. Our platform streamlines access to vital resources, empowering you to make informed decisions about your health with ease.
          </p>
          <div className="text-stats">
            <div className="text-stats-container">
              <p>{diagnosedDiseasesCount}</p>
              <p>Diagnosed Diseases</p>
            </div>

            <div className="text-stats-container">
              <p>{doctorCount}</p>
              <p>Expert Doctors</p>
            </div>

            <div className="text-stats-container">
              <p>2024</p>
              <p>Started In</p>
            </div>
          </div>

          {error && (
            <div className="error-message">
              <p>{error}</p>
            </div>
          )}
        </div>

        <div className="hero-image-section">
          <img className="hero-image1" src="/Tbibi/doctor.png" alt="Doctor" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
