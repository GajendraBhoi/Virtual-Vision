import React, { useRef, useEffect, useState } from "react";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import "@tensorflow/tfjs";

const ObjectDetector = () => {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [model, setModel] = useState(null);
    const [detectedObjects, setDetectedObjects] = useState([]);

    // Estimate distance (meters)
    const getDistanceInMeters = (pixelWidth, realWidth = 0.5, focalLength = 800) => {
        if (pixelWidth <= 0) return 0;
        return (realWidth * focalLength) / pixelWidth;
    };

    // Text-to-Speech function to speak all objects in the list
    const speakObjects = (objects) => {
        const unique = [...new Set(objects)];
        const message = unique.join(", ");

        const utterance = new SpeechSynthesisUtterance(message);
        utterance.rate = 1;
        utterance.pitch = 1;
        utterance.lang = "en-US";

        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(utterance);
    };

    // Load model and setup webcam
    useEffect(() => {
        cocoSsd.load().then(setModel);
        navigator.mediaDevices
            .getUserMedia({ video: true })
            .then((stream) => {
                videoRef.current.srcObject = stream;
                videoRef.current.onloadedmetadata = () => {
                    videoRef.current.play();
                };
            })
            .catch((err) => console.error("Webcam error:", err));
    }, []);

    // Run detection and update objects
    useEffect(() => {
        if (model) {
            const detect = async () => {
                if (videoRef.current && videoRef.current.readyState === 4) {
                    const predictions = await model.detect(videoRef.current);
                    const objectsWithDistance = predictions.map(pred => {
                        const distance = getDistanceInMeters(pred.bbox[2]);
                        return `${pred.class} - ${distance.toFixed(2)} m`;
                    });

                    setDetectedObjects(objectsWithDistance);
                    drawBoxes(predictions);
                }
                requestAnimationFrame(detect);
            };
            detect();
        }
    }, [model]);

    // Draw bounding boxes
    const drawBoxes = (predictions) => {
        const ctx = canvasRef.current.getContext("2d");
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        predictions.forEach((prediction) => {
            const [x, y, width, height] = prediction.bbox;
            const distance = getDistanceInMeters(width).toFixed(2);

            ctx.strokeStyle = "#22c55e";
            ctx.lineWidth = 2;
            ctx.strokeRect(x, y, width, height);

            ctx.fillStyle = "#22c55e";
            ctx.font = "16px sans-serif";
            ctx.fillText(`${prediction.class} (${distance} m)`, x, y > 10 ? y - 5 : 10);
        });
    };

    // Handle Double-click event
    const handleDoubleClick = () => {
        if (detectedObjects.length > 0) {
            speakObjects(detectedObjects);
        }
    };

    return (
        <div
            className="relative w-full h-screen bg-gray-100 flex flex-wrap"
            onDoubleClick={handleDoubleClick} // Trigger on double-click
        >
            {/* Webcam View */}
            <div className="absolute top-5 left-5">
                <div className="relative w-[640px] h-[480px] rounded-lg overflow-hidden shadow-md">
                    <video
                        ref={videoRef}
                        width="640"
                        height="480"
                        className="absolute top-0 left-0"
                    />
                    <canvas
                        ref={canvasRef}
                        width="640"
                        height="480"
                        className="absolute top-0 left-0"
                    />
                </div>
            </div>

            {/* Object List Panel */}
            <div className="absolute top-5 right-5 w-64 max-h-[480px] overflow-y-auto bg-white shadow-lg rounded-lg p-4">
                <h2 className="text-lg font-semibold text-center mb-3">Detected Objects</h2>
                <ul className="space-y-2">
                    {detectedObjects.map((item, index) => (
                        <li key={index} className="text-center text-gray-700 border-b border-gray-200 pb-1">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ObjectDetector;
