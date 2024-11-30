import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { auth } from './firebaseConfig'; // Import your Firebase authentication instance
import Login from './components/Login';
import Register from './components/Register';
import Welcome from './components/Welcome';
import GrievanceForm from './components/GrievanceForm';
import UserDetails from './components/UserDetails';
import DomainSelection from './components/DomainSelection';
import GrievanceConfirmation from './components/GrievanceConfirmation';
import Dashboard from './components/Dashboard';
import Admin from './components/Admin';
import ashokaIcon from './Assets/ashoka.png'; // Adjust the path based on your file structure
import progressIcon from './Assets/roadmap.png';
import './App.css';


function App() {
  const [user, setUser] = useState(null);
  const [selectedDomain, setSelectedDomain] = useState('');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Viksit Bharat - Grievance Reporting System</h1>
          <p>"Providing a Haven of Support and Guidance in Every Step of Your Journey."</p>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/welcome" element={<Welcome user={user} />} />
            <Route path="/user-details" element={<UserDetails user={user} />} />
            <Route path="/domain-selection" element={<DomainSelection user={user} setDomain={setSelectedDomain} />} />
            <Route path="/report" element={<GrievanceForm user={user} selectedDomain={selectedDomain} />} />
            <Route path="/confirmation" element={<GrievanceConfirmation />} />
            <Route path="/dashboard" element={<Dashboard />} />
           <Route path="/admin" element={<Admin />} /> 
            
          </Routes>
        </main>
        <footer className="App-footer">
          <p>© 2024 Vikasit Bharat. All Rights Reserved.</p>
          <div className="footer-icons">
            <img src={ashokaIcon} alt="Ashoka Chakra" />
            <img src={progressIcon} alt="Progress Icon" />
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;