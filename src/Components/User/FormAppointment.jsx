import { useState } from "react";
import PropTypes from 'prop-types';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../Styles/User/FormAppointment.css";

const FormAppointment = ({ onClose, onAppointmentSubmit }) => {
  const doctor = { name: "Dr. John Doe", _id: "12345" };

  const [formData, setFormData] = useState({ name: "", phoneNumber: "", date: new Date(), status: "pending", doctorId: doctor._id });
  const [errors, setErrors] = useState({ nameError: "", phoneNumberError: "", dateError: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleDateChange = (date) => {
    setFormData(prevData => ({ ...prevData, date }));
  };

  const validateForm = () => {
    let valid = true;
    const { name, phoneNumber, date } = formData;
    const newErrors = { nameError: "", phoneNumberError: "", dateError: "" };

    if (!/^[a-zA-Z\s]+$/.test(name)) {
      newErrors.nameError = "Name must contain only letters and spaces.";
      valid = false;
    }

    if (!/^\d{8}$/.test(phoneNumber)) {
      newErrors.phoneNumberError = "Phone number must be exactly 8 digits.";
      valid = false;
    }

    const selectedDate = new Date(date);
    const futureDate = new Date();
    futureDate.setMonth(futureDate.getMonth() + 1);

    if (selectedDate > futureDate) {
      newErrors.dateError = "Date must not exceed a month from today.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSubmitting(true);

    setTimeout(() => {
      onAppointmentSubmit(true);
      onClose();
      setSubmitting(false);
    }, 2000);
  };

  return (
    <div className="appointment-form">
      <button className="close-button" onClick={onClose}>X</button>
      <h2>Appointment Request</h2>
      <p>You are scheduling an appointment with {doctor.name}</p>
      <form onSubmit={handleSubmit}>
        {['name', 'phoneNumber'].map((field) => (
          <div className="form-group" key={field}>
            <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
            <input
              type={field === 'phoneNumber' ? 'tel' : 'text'}
              id={field}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              required
            />
            {errors[`${field}Error`] && <div className="error-popup active">{errors[`${field}Error`]}</div>}
          </div>
        ))}
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <DatePicker
            id="date"
            selected={formData.date}
            onChange={handleDateChange}
            minDate={new Date()}
            dateFormat="yyyy-MM-dd"
            required
            className="custom-date-picker"
          />
          {errors.dateError && <div className="error-popup active">{errors.dateError}</div>}
        </div>
        <button type="submit" disabled={submitting}>{submitting ? 'Submitting...' : 'Submit'}</button>
      </form>
    </div>
  );
};

FormAppointment.propTypes = {
  onClose: PropTypes.func.isRequired,
  onAppointmentSubmit: PropTypes.func.isRequired,
};

export default FormAppointment;
