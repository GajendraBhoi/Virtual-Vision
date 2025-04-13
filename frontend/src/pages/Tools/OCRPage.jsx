import React, { useState, useRef, useEffect } from 'react';
import Webcam from 'react-webcam';
import Tesseract from 'tesseract.js';
import { createCanvas, loadImage } from 'canvas';

const OCRPage = () => {
    const [ocrText, setOcrText] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const [lastTapTime, setLastTapTime] = useState(0);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Manage dropdown state
    const [selectedLanguage, setSelectedLanguage] = useState('en'); // Default language is English
    const webcamRef = useRef(null);

    // Preprocess the image before OCR
    const preprocessImage = (imageSrc) => {
        return new Promise((resolve, reject) => {
            loadImage(imageSrc)
                .then((image) => {
                    const canvas = createCanvas(image.width, image.height);
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(image, 0, 0);

                    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                    const data = imgData.data;

                    // Grayscale conversion
                    for (let i = 0; i < data.length; i += 4) {
                        const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
                        data[i] = avg;
                        data[i + 1] = avg;
                        data[i + 2] = avg;
                    }
                    ctx.putImageData(imgData, 0, 0);

                    // Apply threshold
                    const threshold = 128;
                    for (let i = 0; i < data.length; i += 4) {
                        const brightness = data[i];
                        if (brightness < threshold) {
                            data[i] = data[i + 1] = data[i + 2] = 0; // Black
                        } else {
                            data[i] = data[i + 1] = data[i + 2] = 255; // White
                        }
                    }
                    ctx.putImageData(imgData, 0, 0);

                    resolve(canvas.toDataURL());
                })
                .catch(reject);
        });
    };

    // Process image with Tesseract.js
    const processImage = (imageSrc) => {
        setIsProcessing(true);
        preprocessImage(imageSrc)
            .then((processedImageSrc) => {
                Tesseract.recognize(
                    processedImageSrc,
                    'eng',
                    {
                        logger: (m) => console.log(m),
                    }
                ).then(({ data: { text } }) => {
                    setOcrText(text);
                    setIsProcessing(false);
                    // Speak the recognized text
                    speakText(text);
                });
            })
            .catch((error) => {
                console.error('Error processing image:', error);
                setIsProcessing(false);
            });
    };

    // Handle manual double-tap detection
    const handleTap = () => {
        const currentTime = Date.now();
        if (currentTime - lastTapTime < 300) {
            const imageSrc = webcamRef.current.getScreenshot();
            if (imageSrc) {
                processImage(imageSrc);
            }
        }
        setLastTapTime(currentTime);
    };

    // Function to speak the OCR text
    const speakText = (text) => {
        const speech = new SpeechSynthesisUtterance(text);
        speech.lang = 'en-US'; // Set language to English
        window.speechSynthesis.speak(speech);
    };

    // Function to speak the instruction when the page loads
    const speakInstruction = () => {
        const speech = new SpeechSynthesisUtterance('Double tap to scan');
        speech.lang = 'en-US'; // Set language to English
        window.speechSynthesis.speak(speech);
    };

    // Toggle the dropdown visibility
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // Handle language selection
    const handleLanguageSelect = (languageCode) => {
        setSelectedLanguage(languageCode);
        setIsDropdownOpen(false); // Close dropdown after selection
        // You could add logic to handle translation here
        console.log(`Selected Language: ${languageCode}`);
    };

    useEffect(() => {
        // Speak instruction when page loads
        speakInstruction();
    }, []);

    return (
        <div
            onMouseDown={handleTap} // Handle tap event
            onTouchStart={handleTap}
            className="flex items-center justify-center min-h-screen bg-gray-50"
        >
            {/* Left Part (Webcam) */}
            <div className="flex-shrink-0 w-1/2 p-4">
                <div
                    className="border-4 border-blue-500 rounded-lg shadow-lg p-2"
                >
                    <Webcam
                        audio={false}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        width="100%"
                        videoConstraints={{ facingMode: "environment" }}
                    />
                </div>
            </div>

            {/* Right Part (Text Display) */}
            <div className="w-1/2 p-4 space-y-6">
                <h1 className="text-3xl font-bold text-blue-600 text-center">Extracted Text</h1>

                {/* Instruction Text */}
                <div className="text-center text-lg text-gray-700 mb-4">
                    <p><strong>Double tap to scan</strong></p>
                </div>

                {/* Processing Indicator */}
                {isProcessing && (
                    <div className="flex items-center justify-center space-x-2">
                        <div className="animate-spin border-4 border-blue-500 border-t-transparent rounded-full w-8 h-8"></div>
                        <span>Processing...</span>
                    </div>
                )}

                {/* Display OCR Text */}
                <div className="bg-white shadow-lg p-4 rounded-lg h-full overflow-y-auto">
                    <h2 className="text-xl font-semibold mb-2">Recognized Text:</h2>
                    <p className="text-lg text-gray-700 whitespace-pre-line">
                        {ocrText || 'No text recognized yet.'}
                    </p>
                </div>

                {/* Translate Button with Dropdown */}
                <div className="relative inline-block text-left">
                    <button
                        onClick={toggleDropdown}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all"
                    >
                        Translate
                    </button>
                    {isDropdownOpen && (
                        <div className="absolute right-0 w-48 mt-2 origin-top-right bg-white shadow-lg rounded-lg border border-gray-200">
                            <ul className="py-1">
                                <li
                                    onClick={() => handleLanguageSelect('en')}
                                    className="px-4 py-2 text-gray-700 hover:bg-blue-100 cursor-pointer"
                                >
                                    English
                                </li>
                                <li
                                    onClick={() => handleLanguageSelect('es')}
                                    className="px-4 py-2 text-gray-700 hover:bg-blue-100 cursor-pointer"
                                >
                                    Spanish
                                </li>
                                <li
                                    onClick={() => handleLanguageSelect('fr')}
                                    className="px-4 py-2 text-gray-700 hover:bg-blue-100 cursor-pointer"
                                >
                                    French
                                </li>
                                <li
                                    onClick={() => handleLanguageSelect('de')}
                                    className="px-4 py-2 text-gray-700 hover:bg-blue-100 cursor-pointer"
                                >
                                    German
                                </li>
                                <li
                                    onClick={() => handleLanguageSelect('zh')}
                                    className="px-4 py-2 text-gray-700 hover:bg-blue-100 cursor-pointer"
                                >
                                    Chinese
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default OCRPage;
