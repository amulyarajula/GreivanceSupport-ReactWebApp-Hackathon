import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../CSS/GrievanceConfirmation.css';

const GrievanceConfirmation = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { token, domain } = location.state || {}; // Retrieve the token and domain from the route state

    const handleDashboardClick = () => {
        navigate('/dashboard'); // Redirect to the dashboard page
    };

    return (
        <div className="confirmation-container">
            <h2>Grievance Submitted Successfully!</h2>
            <p>Your grievance under the <strong>{domain}</strong> domain has been received by the officials.</p>
            <p>Your Grievance Token: <strong>{token}</strong></p>
            <p>You will be notified when your grievance is being worked on.</p>
            <button onClick={handleDashboardClick} className="home-button">Go to Dashboard</button>
        </div>
    );
};

export default GrievanceConfirmation;
