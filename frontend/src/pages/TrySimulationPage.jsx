import React, { useState, useEffect } from 'react';

const TrySimulationPage = () => {
    const [distance, setDistance] = useState(null);

    useEffect(() => {
        const fetchDistance = async () => {
            const response = await fetch('http://localhost:3001/api/distance');
            const data = await response.json();
            setDistance(data.distance);

            // Simulate voice feedback
            const utterance = new SpeechSynthesisUtterance(`Object is ${data.distance} centimeters away.`);
            speechSynthesis.speak(utterance);
        };

        fetchDistance();
    }, []);

    return (
        <div className="text-center p-10">
            <h1 className="text-3xl font-bold text-blue-600 mb-4">Try the Simulation</h1>
            <p className="text-lg mb-6">See how the distance simulation works.</p>
            {distance ? (
                <p className="text-2xl font-semibold">{distance} cm</p>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default TrySimulationPage;
