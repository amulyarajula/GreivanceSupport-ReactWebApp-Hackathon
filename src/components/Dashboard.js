import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { ref, onValue } from 'firebase/database';
import '../CSS/Dashboard.css'; // Ensure proper styling

const Dashboard = () => {
    const [grievances, setGrievances] = useState([]);

    useEffect(() => {
        // Reference to the grievances node in Firebase
        const userGrievancesRef = ref(db, 'grievances'); 

        // Set up a listener to fetch data in real-time
        const unsubscribe = onValue(userGrievancesRef, (snapshot) => {
            const data = snapshot.val();

            console.log("Fetched data:", data); // Debugging line to inspect the data

            // Process and set grievances data
            if (data) {
                const userGrievances = Object.keys(data).map(key => {
                    console.log("Grievance entry:", { id: key, ...data[key] });
                    return { id: key, ...data[key] };
                });
                setGrievances(userGrievances);
            } else {
                setGrievances([]); // Handle empty data
            }
        }, (error) => {
            console.error("Error fetching grievances: ", error);
        });

        // Clean up the listener on component unmount
        return () => unsubscribe();
    }, []);

    return (
        <div>
            <h2>Your Grievances</h2>
            {grievances.length > 0 ? (
                grievances.map(grievance => (
                    <div key={grievance.id} className="grievance-card">
                        <h3>Domain: {grievance.domain}</h3>
                        <p>Problem: {grievance.problem}</p>
                        <p>Status: {grievance.status || 'Pending'}</p>
                        <p>Last Updated: {new Date(grievance.lastUpdated).toLocaleString()}</p>
                    </div>
                ))
            ) : (
                <p>No grievances found.</p>
            )}
        </div>
    );
};

export default Dashboard;
