import React from 'react';
import { Link } from 'react-router-dom';

const ToolsPage = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
            {/* Title */}
            <h1 className="text-3xl font-bold mb-10">Tools</h1>

            {/* Tools List */}
            <div className="w-full max-w-xs space-y-4">
                {/* OCR (Read Text) */}
                <Link to="/OCRPage" className="flex items-center bg-gray-800 bg-opacity-80 backdrop-blur-md rounded-xl p-4 shadow-lg">
                    <span className="text-2xl mr-4">📝</span>
                    <span className="text-lg">OCR (Read Text)</span>
                </Link>

                {/* Current Location Announcer */}
                <Link to="/location" className="flex items-center bg-gray-800 bg-opacity-80 backdrop-blur-md rounded-xl p-4 shadow-lg">
                    <span className="text-2xl mr-4">📍</span>
                    <span className="text-lg">Current Location Announcer</span>
                </Link>

                {/* Barcode Scanner */}
                <Link to='/BarcodeScannerPage' className="flex items-center bg-gray-800 bg-opacity-80 backdrop-blur-md rounded-xl p-4 shadow-lg">
                    <span className="text-2xl mr-4">🔍</span>
                    <span className="text-lg">Barcode Scanner (Food details)</span>
                </Link>



                {/* Scene Description using GPT */}
                <div className="flex items-center bg-gray-800 bg-opacity-80 backdrop-blur-md rounded-xl p-4 shadow-lg">
                    <span className="text-2xl mr-4">🖼️</span>
                    <span className="text-lg">Scene Description using GPT</span>
                </div>

                {/* Face Recognition */}
                <Link to='/FaceRecognitionPage' className="flex items-center bg-gray-800 bg-opacity-80 backdrop-blur-md rounded-xl p-4 shadow-lg">
                    <span className="text-2xl mr-4">😊</span>
                    <span className="text-lg">Face Recognition</span>
                </Link>
            </div>
        </div>
    );
};

export default ToolsPage;