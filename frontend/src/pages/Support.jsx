import React, { useState } from 'react';
//import { Button } from '@/components/ui/button'; // Removed - using standard HTML button
//import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'; // Removed - using standard select
//import { Slider } from '@/components/ui/slider';  // Removed - using standard HTML input range
import { cn } from '../lib/utils'; // You'll need this utility

const SupportScreen = () => {
    const [language, setLanguage] = useState('English');
    const [voiceSpeed, setVoiceSpeed] = useState(50); // Initial value - changed to number
    const [voiceVolume, setVoiceVolume] = useState(50); // Initial value - changed to number

    const handleReset = () => {
        setLanguage('English');
        setVoiceSpeed(50);
        setVoiceVolume(50);
    };

    return (
        <div className="flex flex-col items-center justify-start min-h-screen bg-gray-900 pt-20">
            <h1 className="text-3xl font-bold text-white mb-8">Settings</h1>

            <div className="w-full max-w-md space-y-6">
                <button
                    className={cn(
                        "w-full px-4 py-2 rounded-md bg-yellow-500/20 text-yellow-400 border border-yellow-500/50 hover:bg-yellow-500/30",
                        "shadow-lg"
                    )}
                >
                    How to Use
                </button>

                <div className="space-y-2">
                    <label htmlFor="language" className="block text-sm font-medium text-gray-300">
                        Language Preferences
                    </label>
                    <select
                        id="language"
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className={cn(
                            "w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700",
                            "focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        )}
                    >
                        <option value="English" className="bg-gray-700 hover:bg-gray-600 text-white">English</option>
                        <option value="Spanish" className="bg-gray-700 hover:bg-gray-600 text-white">Spanish</option>
                        <option value="French" className="bg-gray-700 hover:bg-gray-600 text-white">French</option>
                        {/* Add more languages as needed */}
                    </select>
                </div>

                <div className="space-y-2">
                    <label htmlFor="voice-speed" className="block text-sm font-medium text-gray-300">
                        Customize Voice Output - Voice Speed
                    </label>
                    <input
                        type="range"
                        id="voice-speed"
                        min="0"
                        max="100"
                        value={voiceSpeed}
                        onChange={(e) => setVoiceSpeed(parseInt(e.target.value, 10))}
                        className="w-full"
                        style={{
                            '--webkit-slider-runnable-track-color': 'linear-gradient(to right, #4b5563, #f59e0b, #4b5563)',
                            '--webkit-slider-thumb-color': '#f59e0b',
                            '--moz-range-track-color': 'linear-gradient(to right, #4b5563, #f59e0b, #4b5563)',
                            '--moz-range-thumb-color': '#f59e0b',
                            '--ms-track-color': 'linear-gradient(to right, #4b5563, #f59e0b, #4b5563)',
                            '--ms-thumb-color': '#f59e0b',
                        }}
                    />
                    <p className="text-sm text-gray-400 text-center">{voiceSpeed}</p>
                </div>

                <div className="space-y-2">
                    <label htmlFor="voice-volume" className="block text-sm font-medium text-gray-300">
                        Voice Volume
                    </label>
                    <input
                        type="range"
                        id="voice-volume"
                        min="0"
                        max="100"
                        value={voiceVolume}
                        onChange={(e) => setVoiceVolume(parseInt(e.target.value, 10))}
                        className="w-full"
                        style={{
                            '--webkit-slider-runnable-track-color': 'linear-gradient(to right, #4b5563, #f59e0b, #4b5563)',
                            '--webkit-slider-thumb-color': '#f59e0b',
                            '--moz-range-track-color': 'linear-gradient(to right, #4b5563, #f59e0b, #4b5563)',
                            '--moz-range-thumb-color': '#f59e0b',
                            '--ms-track-color': 'linear-gradient(to right, #4b5563, #f59e0b, #4b5563)',
                            '--ms-thumb-color': '#f59e0b',
                        }}
                    />
                    <p className="text-sm text-gray-400 text-center">{voiceVolume}</p>
                </div>

                <button
                    onClick={handleReset}
                    className={cn(
                        "w-full px-4 py-2 rounded-md bg-gray-800/50 text-white border border-gray-700 hover:bg-gray-700/50",
                    )}
                >
                    Reset
                </button>
            </div>
        </div>
    );
};

export default SupportScreen;
