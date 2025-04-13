import React from 'react';
import { Link } from 'react-router-dom';
import rightImg from '../assets/right.png';

const Homepage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white font-sans overflow-hidden">
            {/* Navbar */}
            <nav className="flex justify-between items-center px-8 py-6 shadow-md backdrop-blur-sm bg-white/5">
                <div className="text-2xl font-extrabold tracking-wide text-white">
                    👁️ Virtual Vision
                </div>
                <div className="hidden md:flex gap-6 items-center text-sm font-medium">
                    <Link to="/" className="hover:text-blue-400 transition duration-200">Home</Link>
                    <Link to="/try" className="hover:text-blue-400 transition duration-200">Explore</Link>
                    {/* <Link to="/community" className="hover:text-blue-400 transition duration-200">Community</Link> */}
                    <Link to="/support" className="hover:text-blue-400 transition duration-200">Support</Link>

                </div>
            </nav>

            {/* Hero Section */}
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-8 lg:px-24 py-12 lg:py-20 relative z-10">
                {/* Left Content */}
                <div className="max-w-2xl text-center lg:text-left">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                        Empowering Vision with <br />
                        <span className="text-blue-400 drop-shadow-md">AI & AR</span>
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed">
                        Real-time object detection, distance estimation, obstacle alerts, and scene narration — designed for the visually impaired and powered by modern tech.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <Link
                            to="/try"
                            className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg text-white font-semibold transition duration-200 shadow-lg"
                        >
                            🔊 Try Simulation
                        </Link>

                    </div>
                </div>

                {/* Right Image */}
                <div className="mb-10 lg:mb-0 relative animate-float drop-shadow-2xl">
                    <img
                        src={rightImg}
                        alt="AR & Vision Cube"
                        className="w-[320px] sm:w-[400px] object-contain rounded-2xl"
                    />
                    <div className="absolute -z-10 w-full h-full blur-3xl opacity-20 bg-blue-400 rounded-full top-12 left-12"></div>
                </div>
            </div>

            {/* Glow Background Effect */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pink-500 rounded-full blur-3xl opacity-20 -z-10"></div>
        </div>
    );
};

export default Homepage;
