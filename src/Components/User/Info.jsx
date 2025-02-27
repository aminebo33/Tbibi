import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../Styles/User/Info.css';
import SearchBar from './Searchbar';

const fetchSymptoms = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        'fever',
        'cough',
        'fatigue',
        'headache',
        'sore throat',
        'shortness of breath',
        'loss of taste',
        'body aches'
      ]);
    }, 500);
  });
};

const Info = () => {
  const initialSearchBar = { word: "", suggestions: [], suggestionSelected: false };
  const [searchBars, setSearchBars] = useState([initialSearchBar]);
  const [symptoms, setSymptoms] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchSymptoms().then(setSymptoms).catch(console.error);
  }, []);

  const updateSearchBar = (index, updatedFields) => {
    setSearchBars(prev => {
      const updated = [...prev];
      updated[index] = { ...updated[index], ...updatedFields };
      return updated;
    });
  };

  const handleInputChange = (index, event) => {
    const { value } = event.target;
    const filteredSuggestions = value ? symptoms.filter(s => s.toLowerCase().includes(value.toLowerCase())) : [];
    updateSearchBar(index, { word: value, suggestions: filteredSuggestions, suggestionSelected: false });
  };

  const handleSuggestionSelect = (index, suggestion) => {
    updateSearchBar(index, { word: suggestion, suggestionSelected: true });
  };

  const addSearchBar = () => {
    setSearchBars(prev => [...prev, initialSearchBar]);
  };

  const removeSearchBar = () => {
    setSearchBars(prev => prev.slice(0, -1));
  };

  const submitForm = async () => {
    const selectedSymptoms = searchBars.filter(bar => bar.word && bar.suggestionSelected);
    if (selectedSymptoms.length) {
      const dummyData = [
        { name: 'Flu', description: 'A viral infection that attacks the respiratory system.', specialty: ['General Medicine'] },
        { name: 'COVID-19', description: 'A contagious disease caused by the SARS-CoV-2 virus.', specialty: ['Infectious Disease'] }
      ];
      navigate("/symptoms", { state: { sicknesses: dummyData } });
    } else {
      showWarning();
    }
  };

  const showWarning = () => {
    toast.warn('Please select at least one symptom', {
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

  return (
    <div className="info-section" id="info-section">
      <ToastContainer />
      <div className="info-title-content">
        <h3 className="info-title"><span>What We Do</span></h3>
        <p className="info-description">
          We bring healthcare to your convenience, offering a comprehensive range of on-demand medical services tailored to your needs.
        </p>
        <div className="search-paragraph-container">
          <div className="search-container">
            {searchBars.map((bar, index) => (
              <SearchBar
                key={index}
                index={index}
                bar={bar}
                onInputChange={handleInputChange}
                onSuggestionSelect={handleSuggestionSelect}
              />
            ))}
            {searchBars.length > 1 && <button className="button" onClick={removeSearchBar}>-</button>}
            <button className="button" onClick={addSearchBar}>+</button>
            <button className="submit" onClick={submitForm}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
