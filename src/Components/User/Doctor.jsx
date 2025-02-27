import { useState, useEffect } from "react";
import Select from "react-select";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DoctorCard from "./DoctorCard";
import AppointmentForm from "./FormAppointment";
import Modal from "./Modal";
import "../../Styles/User/Doctor.css";

function Doctors() {
  const [doctors, setDoctors] = useState([]);
  const [specialityFilter, setSpecialityFilter] = useState("");
  const [stateFilter, setStateFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");
  const [uniqueSpecialities, setUniqueSpecialities] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const staticDoctors = [
      { img: "/Tbibi/male.png", name: "John Doe", specialty: "Cardiologist", location: { state: "California", city: "Los Angeles" }, number: "+1-555-555-5555" },
      { img: "/Tbibi/female.png", name: "Jane Smith", specialty: "Dermatologist", location: { state: "NewYork", city: "NewYorkCity" }, number: "+1-555-555-5556" },
      { img: "/Tbibi/male.png", name: "James Brown", specialty: "Cardiologist", location: { state: "California", city: "San Francisco" }, number: "+1-555-555-5557" },
      { img: "/Tbibi/female.png", name: "Emily Davis", specialty: "Neurologist", location: { state: "Texas", city: "Houston" }, number: "+1-555-555-5558" },
      { img: "/Tbibi/male.png", name: "David Johnson", specialty: "Dermatologist", location: { state: "California", city: "Los Angeles" }, number: "+1-555-555-5559" },
      { img: "/Tbibi/female.png", name: "Sarah Miller", specialty: "Cardiologist", location: { state: "NewYork", city: "Buffalo" }, number: "+1-555-555-5560" },
      { img: "/Tbibi/male.png", name: "Michael Wilson", specialty: "Neurologist", location: { state: "California", city: "San Francisco" }, number: "+1-555-555-5561" },
      { img: "/Tbibi/female.png", name: "Linda Moore", specialty: "Dermatologist", location: { state: "Texas", city: "Dallas" }, number: "+1-555-555-5562" },
      { img: "/Tbibi/male.png", name: "Robert Taylor", specialty: "Orthopedist", location: { state: "California", city: "San Diego" }, number: "+1-555-555-5563" }
    ];
    
    const staticStates = ["California", "NewYork", "Texas"];
    const staticCities = {
      California: ["Los Angeles", "San Francisco", "San Diego"],
      NewYork: ["NewYorkCity", "Buffalo", "Rochester"],
      Texas: ["Houston", "Dallas", "Austin"]
    };    
  
    setDoctors(staticDoctors);
    setStates(staticStates);
    setCities(staticCities["California"]);
  
    setUniqueSpecialities([...new Set(staticDoctors.map(doctor => doctor.specialty))]);
  }, []);
  

  const handleDoctorClick = doctor => {
    setSelectedDoctor(doctor);
    setShowAppointmentForm(true);
  };

  const handleFormClose = () => setShowAppointmentForm(false);

  const handleAppointmentSubmit = success => {
    const toastType = success ? toast.success : toast.error;

    toastType(success ? 'Request submitted successfully' : 'Failed to submit request', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce
    });
  };

  const filteredDoctors = doctors.filter(doctor => {
    if (!specialityFilter && !stateFilter && !cityFilter) {
      return true;
    }

    if (specialityFilter && !stateFilter && !cityFilter) {
      return doctor.specialty === specialityFilter;
    }

    if (!specialityFilter && stateFilter && !cityFilter) {
      return doctor.location.state === stateFilter;
    }

    if (specialityFilter && stateFilter && !cityFilter) {
      return doctor.specialty === specialityFilter && doctor.location.state === stateFilter;
    }

    if (!specialityFilter && stateFilter && cityFilter) {
      return doctor.location.state === stateFilter && doctor.location.city === cityFilter;
    }

    return doctor.specialty === specialityFilter && doctor.location.state === stateFilter && doctor.location.city === cityFilter;
  });

  return (
    <div className="doctor-section" id="doctors">
      <ToastContainer />
      <div className="doctor-title-content">
        <h3 className="doctor-title">
          <span>Find Your Doctor</span>
        </h3>
        <p className="doctor-description">
          Find the right doctor for your needs. We provide access to a diverse
          range of experienced healthcare professionals who specialize in
          various fields. Whether you need a specialist or a general
          practitioner, our platform connects you with the right professionals
          nearby. Take control of your health journey today.
        </p>
      </div>
      <div className="filter-section">
        <div className="filter">
          <label htmlFor="speciality">Speciality:</label>
          <Select
            id="speciality"
            className="filter-select"
            value={specialityFilter === "" ? { label: "All", value: "" } : { label: specialityFilter, value: specialityFilter }}
            onChange={selectedOption => setSpecialityFilter(selectedOption.value)}
            options={[{ label: "All", value: "" }, ...uniqueSpecialities.map(speciality => ({ label: speciality, value: speciality }))]}
            isSearchable={false}
          />
        </div>
        <div className="filter">
          <label htmlFor="state">State:</label>
          <Select
            id="state"
            className="filter-select"
            value={stateFilter === "" ? { label: "All", value: "" } : { label: stateFilter, value: stateFilter }}
            onChange={selectedOption => {
              setStateFilter(selectedOption.value);
              setCityFilter("");
              setCities(staticCities[selectedOption.value]);
            }}
            options={[{ label: "All", value: "" }, ...states.map(state => ({ label: state, value: state }))]}
            isSearchable={false}
          />
        </div>
        <div className="filter">
          <label htmlFor="city">City:</label>
          <Select
            id="city"
            className="filter-select"
            value={cityFilter === "" ? { label: "All", value: "" } : { label: cityFilter, value: cityFilter }}
            onChange={selectedOption => setCityFilter(selectedOption.value)}
            options={stateFilter !== "" ? [{ label: "All", value: "" }, ...cities.map(city => ({ label: city, value: city }))] : []}
            isDisabled={stateFilter === ""}
            isSearchable={false}
          />
        </div>
      </div>
      <div className="dt-cards-content">
        {filteredDoctors.map((doctor, index) => (
          <DoctorCard
            key={index}
            img={doctor.img}
            name={doctor.name}
            specialty={doctor.specialty}
            location={doctor.location}
            number={doctor.number}
            onClick={() => handleDoctorClick(doctor)}
          />
        ))}
      </div>
      {showAppointmentForm && (
        <Modal onClose={handleFormClose}>
          <AppointmentForm
            doctor={selectedDoctor}
            onClose={handleFormClose}
            onAppointmentSubmit={handleAppointmentSubmit}
          />
        </Modal>
      )}
    </div>
  );
}

export default Doctors;
