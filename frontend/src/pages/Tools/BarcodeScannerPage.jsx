import React, { useEffect, useRef, useState } from 'react';
import { Html5Qrcode } from 'html5-qrcode';

const BarcodeScannerPage = () => {
    const scannerRef = useRef(null);
    const [scannedCode, setScannedCode] = useState('');
    const [foodDetails, setFoodDetails] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const scanner = new Html5Qrcode('reader');
        Html5Qrcode.getCameras()
            .then((devices) => {
                if (devices.length) {
                    const cameraId = devices[0].id;
                    scanner.start(
                        cameraId,
                        { fps: 10, qrbox: 250 },
                        (decodedText) => {
                            scanner.stop();
                            setScannedCode(decodedText);
                            fetchFoodDetails(decodedText);
                        },
                        (err) => {
                            setError('Scanning error. Try again.');
                            console.warn(err);
                        }
                    );
                } else {
                    setError('No camera found.');
                }
            })
            .catch((err) => {
                setError('Camera access error.');
                console.error(err);
            });

        return () => {
            scanner.clear();
        };
    }, []);

    const fetchFoodDetails = (code) => {
        const foodDB = {
            '8901234567890': {
                name: 'Maggie Noodles',
                calories: '320 kcal',
                ingredients: ['Wheat flour', 'Palm oil', 'Spices'],
            },
            '8909876543210': {
                name: 'Amul Milk',
                calories: '150 kcal',
                ingredients: ['Milk', 'Vitamin D'],
            },
        };

        const result = foodDB[code] || {
            name: 'Unknown Product',
            calories: 'N/A',
            ingredients: ['No data available'],
        };

        setFoodDetails(result);
        speakProduct(result.name);
    };

    const speakProduct = (name) => {
        const firstWords = name.split(' ').slice(0, 3).join(' ');
        const msg = new SpeechSynthesisUtterance(firstWords);
        window.speechSynthesis.speak(msg);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center relative">
            <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">📦 Barcode Scanner</h1>

            <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl items-start">
                <div id="reader" className="w-full md:w-1/2 h-[300px] rounded-lg border-2 border-gray-300 shadow-md bg-white"></div>

                <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md text-left">
                    {error && <p className="text-red-600 font-semibold">{error}</p>}
                    {scannedCode && (
                        <>
                            <h2 className="text-xl font-semibold mb-2">Scanned Code:</h2>
                            <p className="mb-4 text-gray-700">{scannedCode}</p>

                            {foodDetails && (
                                <>
                                    <p><span className="font-semibold">Name:</span> {foodDetails.name}</p>
                                    <p><span className="font-semibold">Calories:</span> {foodDetails.calories}</p>
                                    <p><span className="font-semibold">Ingredients:</span> {foodDetails.ingredients.join(', ')}</p>
                                </>
                            )}
                        </>
                    )}
                    {!scannedCode && !error && (
                        <p className="text-gray-600">Scan a barcode to view food details.</p>
                    )}
                </div>
            </div>

            {/* Translate Button */}
            <button
                className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full shadow-lg"
                onClick={() => alert('Translation feature coming soon!')}
            >
                🌐 Translate
            </button>
        </div>
    );
};

export default BarcodeScannerPage;
