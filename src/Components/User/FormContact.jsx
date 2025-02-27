import { useState } from 'react';
import { toast, ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../Styles/User/FormContact.css';

const FormContact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({ name: "", email: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    const nameValid = /^[a-zA-Z\s]+$/.test(formData.name);
    const emailValid = /\S+@\S+\.\S+/.test(formData.email);
    
    setErrors({
      name: nameValid ? "" : "Name must contain only letters and spaces.",
      email: emailValid ? "" : "Please enter a valid email address."
    });
    
    if (!nameValid || !emailValid) {
      setSubmitting(false);
      return;
    }

    fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    .then(response => response.ok ? handleSuccess() : handleFailure())
    .catch(handleFailure)
    .finally(() => setSubmitting(false));
  };

  const handleSuccess = () => {
    toast.success('Request submitted successfully', { position: "top-right", autoClose: 5000, theme: "colored", transition: Bounce });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleFailure = () => toast.error('Failed to submit request', { position: "top-right", autoClose: 5000, theme: "colored", transition: Bounce });

  return (
    <div>
      <ToastContainer position="top-right" autoClose={5000} theme="colored" transition={Bounce} />
      <div className="form-title-content">
        <h3 className="form-title"><span>Get in Touch</span></h3>
        <p className="form-description">Have questions or need assistance? We are here to help...</p>
      </div>
      <div className="form-contact-section">
        <div className="form-section">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="form-group-first">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group-first">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
            </div>
            <div className="form-group-second">
              <label htmlFor="subject">Subject:</label>
              <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
            </div>
            <div className="form-group-second">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" disabled={submitting || Object.values(errors).some(error => error !== "")}>
              {submitting ? 'Submitting...' : 'Submit'}
            </button>
            <div className={`errorr-popup ${errors.name && "active"}`}>{errors.name}</div>
            <div className={`errorr-popup ${errors.email && "active"}`}>{errors.email}</div>
          </form>
        </div>
        <div className="form-image-section">
          <img src="/Tbibi/form.png" alt="Contact" />
        </div>
      </div>
    </div>
  );
};

export default FormContact;
