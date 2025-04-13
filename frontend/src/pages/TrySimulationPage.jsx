import React from 'react';
import { FaSearch, FaCompass } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TrySimulationPage = () => {
    return (
        <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center space-y-10 p-6">
            {/* Eye Logo */}
            <div className="text-6xl">
                👁️
            </div>

            {/* Title */}
            <h1 className="text-3xl font-semibold text-gray-800">
                VirtualVision
            </h1>

            {/* Navigation Buttons */}
            <div className="flex flex-wrap justify-center gap-8 mt-6">
                <Link to="/objectDetector" className="flex flex-col items-center bg-white shadow-md rounded-full p-6 w-32 h-32 hover:shadow-xl transition transform hover:scale-105">
                    <span className="text-4xl">👁️</span>
                    <span className="mt-2 text-sm font-medium">Start Assistant</span>
                </Link>

                <button className="flex flex-col items-center bg-white shadow-md rounded-full p-6 w-32 h-32 hover:shadow-xl transition transform hover:scale-105">
                    <span className="text-4xl">🧰</span>
                    <span className="mt-2 text-sm font-medium">Tools</span>
                </button>

                <Link to="/support" className="flex flex-col items-center bg-white shadow-md rounded-full p-6 w-32 h-32 hover:shadow-xl transition transform hover:scale-105">
                    <span className="text-4xl">⚙️</span>
                    <span className="mt-2 text-sm font-medium">Settings</span>
                </Link>
            </div>

            {/* Emergency SOS Button */}
            <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-red-700 transition transform hover:scale-105">
                🔴 Emergency SOS
            </button>
        </div>
    );
};

export default TrySimulationPage;
