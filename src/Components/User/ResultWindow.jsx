import PropTypes from 'prop-types';
import "../../Styles/User/ResultWindow.css";

const ResultWindow = ({ sicknessName, specialty, description, onClose }) => {
    return (
        <div className="result-window-overlay">
            <div className="result-window">
                <button className="close-button" onClick={onClose}>X</button>
                <h3 className="result-window-title">{sicknessName}</h3>
                <p className="result-window-description">{description}</p>
                <p className="result-window-specialty">
                    Specialty: <span className="result-window-specialty-value">{specialty.join(", ")}</span>
                </p>
            </div>
        </div>
    );
};

ResultWindow.propTypes = {
    sicknessName: PropTypes.string.isRequired,
    specialty: PropTypes.array.isRequired,
    description: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired
};

export default ResultWindow;
