import PropTypes from "prop-types"; 
import "../../Styles/User/Modal.css";

function Modal(props) {
  const { onClose, children } = props;

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOutsideClick}>
      <div className="modal-content">
        {children}
      </div>
    </div>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
