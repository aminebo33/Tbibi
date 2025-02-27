import PropTypes from "prop-types";

function DoctorCard({ img, name, specialty, location, number, onClick }) {
  return (
    <div className="dt-card" onClick={onClick}>
      <img src={img} alt={name} className="dt-card-img" />
      <p className="dt-card-name">Dr. {name}</p>
      <p className="dt-card-special">{specialty}</p>
      <p className="dt-card-info">{location.state}/{location.city}</p>
      <p className="dt-card-info">{number}</p>
    </div>
  );
}

DoctorCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired, 
  specialty: PropTypes.string.isRequired,
  location: PropTypes.shape({
    state: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired
  }).isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default DoctorCard;
