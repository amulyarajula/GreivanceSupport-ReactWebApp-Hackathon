// src/components/Logout.js
import React from 'react';
import { useHistory } from 'react-router-dom';

const Logout = () => {
    const history = useHistory();

    const handleLogout = () => {
        // Clear user session or token (adjust according to your auth logic)
        localStorage.removeItem('userToken'); // Example: if you're using localStorage
        history.push('/login'); // Redirect to the login page after logging out
    };

    return (
        <button onClick={handleLogout}>
            Logout
        </button>
    );
};

export default Logout;
