import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import ResultWindow from './ResultWindow';
import "../../Styles/User/Result.css";

const Result = () => {
    const navigate = useNavigate();
    const [selectedSickness, setSelectedSickness] = useState(null);
    const [showFAQ, setShowFAQ] = useState(false);

    const sicknesses = [
        {
            name: 'Flu',
            description: 'A viral infection that attacks the respiratory system.',
            specialty: ['General Medicine'],
            matchedSymptoms: ['fever', 'cough', 'fatigue'],
            totalSymptoms: ['fever', 'cough', 'fatigue', 'headache', 'sore throat'],
        },
        {
            name: 'COVID-19',
            description: 'A contagious disease caused by the SARS-CoV-2 virus.',
            specialty: ['Infectious Disease'],
            matchedSymptoms: ['fever', 'cough', 'fatigue', 'shortness of breath'],
            totalSymptoms: ['fever', 'cough', 'fatigue', 'shortness of breath', 'loss of taste'],
        },
        {
            name: 'Common Cold',
            description: 'A viral infection of your nose and throat.',
            specialty: ['General Medicine'],
            matchedSymptoms: ['cough', 'sore throat'],
            totalSymptoms: ['cough', 'sore throat', 'fever', 'fatigue'],
        }
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleSicknessClick = (sicknessName) => {
        const selected = sicknesses.find(sickness => sickness.name === sicknessName);
        setSelectedSickness(selected);
    };

    const handleCloseWindow = () => {
        setSelectedSickness(null);
    };

    const handleSubmit = () => {
        navigate("/doctors");
    };

    const calculatePercentage = (matchedSymptoms, totalSymptoms) => {
        const percentage = (matchedSymptoms.length / totalSymptoms.length) * 100;
        return Math.round(percentage);
    };
    
    const sortedSicknesses = [...sicknesses].sort((a, b) => {
        const percentageA = calculatePercentage(a.matchedSymptoms, a.totalSymptoms);
        const percentageB = calculatePercentage(b.matchedSymptoms, b.totalSymptoms);
        return percentageB - percentageA;
    });
    
    const renderPercentage = (sickness) => {
        if (sortedSicknesses.length === 1) {
            return "100%";
        } else {
            return calculatePercentage(sickness.matchedSymptoms, sickness.totalSymptoms) + "%";
        }
    };

    return (
        <div className="result-section">
            {selectedSickness && (
                <ResultWindow
                    sicknessName={selectedSickness.name}
                    description={selectedSickness.description}
                    specialty={selectedSickness.specialty}
                    onClose={handleCloseWindow}
                />
            )}
            <div className="result-title-content">
                <h3 className="result-title"><span>Result of Your Diagnosis</span></h3><br /><br />
                <div className="result-description">
                    <p>Here are the potential sicknesses based on your symptoms:</p>
                </div>
                <br />
                <div className="result-list">
                    {sortedSicknesses.map((sickness, index) => {
                        const sicknessNameWithoutParentheses = sickness.name.replace(/\s*\(.*?\)\s*/g, '');
                        return (
                            <div className="result-item" key={index} onClick={() => handleSicknessClick(sickness.name)}>
                                <span className="result-name">{sicknessNameWithoutParentheses} :</span>
                                <span className="result-percentage">
                                    {renderPercentage(sickness)}
                                </span>
                                <div className="outer-bar">
                                    <div className="result-bar" style={{ width: `${renderPercentage(sickness)}` }}></div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <button className="proceed-button" onClick={handleSubmit}>Proceed to pick <div>a doctor</div></button>
            </div>
        </div>
    );
};

export default Result;
