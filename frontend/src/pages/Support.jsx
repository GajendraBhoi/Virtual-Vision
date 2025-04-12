import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { FiGlobe } from 'react-icons/fi';
import { HiOutlineSpeakerWave } from 'react-icons/hi2';
import { MdOutlineHelpOutline } from 'react-icons/md';

const Support = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-6 space-y-6">
                {/* Title */}
                <h2 className="text-2xl font-bold text-center text-gray-800">Help & Settings</h2>

                {/* Guide */}
                <div className="flex items-center justify-between bg-gray-100 p-4 rounded-xl">
                    <div className="flex items-center gap-3">
                        <div className="text-red-500 text-xl"><MdOutlineHelpOutline /></div>
                        <span className="font-medium">How to Use (Visual & Voice Guide)</span>
                    </div>
                    <button className="text-blue-500 font-semibold hover:underline">View</button>
                </div>

                {/* Emergency Contacts */}
                <div className="bg-gray-100 p-4 rounded-xl space-y-2">
                    <div className="flex items-center gap-3">
                        <div className="text-xl text-gray-700"><FaPhoneAlt /></div>
                        <div>
                            <div className="font-semibold">Emergency Contacts</div>
                            <div className="text-sm text-gray-600">Contact 1: <span className="bg-white px-2 py-1 rounded shadow">John Doe (123-456-7890)</span></div>
                            <div className="text-sm text-gray-600">Contact 2: <span className="bg-white px-2 py-1 rounded shadow">Jane Smith (987-654-3210)</span></div>
                        </div>
                    </div>
                    <button className="text-blue-500 font-medium hover:underline text-sm ml-8">Edit</button>
                </div>

                {/* Language Preferences */}
                <div className="flex items-center justify-between bg-gray-100 p-4 rounded-xl">
                    <div className="flex items-center gap-3">
                        <div className="text-xl text-gray-700"><FiGlobe /></div>
                        <span className="font-medium">Language Preferences</span>
                    </div>
                    <button className="text-blue-500 font-semibold hover:underline">Change</button>
                </div>

                {/* Voice Speed and Volume */}
                <div className="bg-gray-100 p-4 rounded-xl">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="text-xl text-gray-700"><HiOutlineSpeakerWave /></div>
                        <span className="font-medium">Customize voice speed/volume</span>
                    </div>
                    <div className="flex flex-col gap-4 px-4">
                        <div>
                            <label className="block text-sm mb-1">Voice Speed:</label>
                            <input type="range" min="0" max="100" className="w-full accent-blue-500" />
                        </div>
                        <div>
                            <label className="block text-sm mb-1">Voice Volume:</label>
                            <input type="range" min="0" max="100" className="w-full accent-blue-500" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;
