import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 px-4">
            <div className="max-w-3xl text-center bg-white shadow-xl rounded-2xl p-10 border border-gray-200">
                <h1 className="text-5xl font-extrabold text-blue-800 mb-4">
                    👁️ Virtual Vision
                </h1>
                <p className="text-lg text-gray-700 mb-6">
                    A smart object distance simulation tool that turns proximity data into real-time voice feedback. Experience the future of spatial awareness.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        to="/try"
                        className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
                    >
                        🔊 Try Simulation
                    </Link>

                    <Link
                        to="/signup"
                        className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition"
                    >
                        Sign Up
                    </Link>

                    <Link
                        to="/login"
                        className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition"
                    >
                        Log In
                    </Link>
                </div>

                <footer className="mt-10 text-sm text-gray-500">
                    Built with ❤️ for ByteVerse Hackathon 2025
                </footer>
            </div>
        </div>);
};

export default HomePage;
