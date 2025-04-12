import React from 'react';
import { FaSearch, FaCompass } from 'react-icons/fa';

const TrySimulationPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
            <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-6">
                {/* Title */}
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Tools</h2>

                {/* Tools List */}
                <div className="space-y-4">
                    {/* OCR Tool */}
                    <div className="flex items-center bg-blue-100 hover:bg-blue-200 cursor-pointer px-4 py-3 rounded-xl gap-3">
                        <FaSearch className="text-lg text-black" />
                        <span className="font-medium">OCR (Optical Character Recognition)</span>
                    </div>

                    {/* Barcode Scanner */}
                    <div className="flex items-center bg-blue-100 hover:bg-blue-200 cursor-pointer px-4 py-3 rounded-xl gap-3">
                        <span className="text-xl text-blue-600">條碼</span>
                        <span className="font-medium">Barcode Scanner</span>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center bg-blue-100 hover:bg-blue-200 cursor-pointer px-4 py-3 rounded-xl gap-3">
                        <FaCompass className="text-xl text-gray-700" />
                        <span className="font-medium">Navigation</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrySimulationPage;
