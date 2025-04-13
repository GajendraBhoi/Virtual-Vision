import React, { useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import * as faceapi from 'face-api.js';

const FaceRecognitionPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [detections, setDetections] = useState([]);
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);

    useEffect(() => {
        const loadModels = async () => {
            // Load the models for face-api.js
            await faceapi.nets.ssdMobilenetv1.loadFromUri('/models');
            await faceapi.nets.faceLandmark68Net.loadFromUri('/models');
            await faceapi.nets.faceRecognitionNet.loadFromUri('/models');

            setIsLoading(false);
            startDetection();
        };

        loadModels();
    }, []);

    const startDetection = () => {
        if (webcamRef.current && webcamRef.current.video) {
            // Start face-api.js detection
            setInterval(async () => {
                const detections = await faceapi.detectAllFaces(
                    webcamRef.current.video,
                    new faceapi.SsdMobilenetv1Options()
                ).withFaceLandmarks().withFaceDescriptors();

                setDetections(detections);

                // Clear previous canvas and draw new faces on it
                const canvas = faceapi.createCanvasFromMedia(webcamRef.current.video);
                canvasRef.current.innerHTML = '';
                canvasRef.current.append(canvas);
                faceapi.matchDimensions(canvas, webcamRef.current.video);
                canvas?.render(detections);
            }, 100);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            {/* Left Part (Webcam) */}
            <div className="flex-shrink-0 w-1/2 p-4">
                <div className="border-4 border-blue-500 rounded-lg shadow-lg p-2">
                    <Webcam
                        audio={false}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        width="100%"
                        videoConstraints={{ facingMode: "user" }}
                    />
                </div>
            </div>

            {/* Right Part (Face Recognition Canvas) */}
            <div className="w-1/2 p-4">
                <h1 className="text-3xl font-bold text-blue-600 text-center">Face Recognition</h1>

                {/* Loading Indicator */}
                {isLoading && (
                    <div className="flex items-center justify-center space-x-2">
                        <div className="animate-spin border-4 border-blue-500 border-t-transparent rounded-full w-8 h-8"></div>
                        <span>Loading models...</span>
                    </div>
                )}

                {/* Display face detection results */}
                <div className="mt-4">
                    <div
                        ref={canvasRef}
                        style={{
                            position: 'absolute',
                            top: '0',
                            left: '50%',
                            transform: 'translateX(-50%)',
                        }}
                    />
                    <h2 className="text-xl font-semibold mt-4">Detected Faces: {detections.length}</h2>
                </div>
            </div>
        </div>
    );
};

export default FaceRecognitionPage;
