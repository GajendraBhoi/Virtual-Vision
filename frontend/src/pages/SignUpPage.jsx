import React, { useState } from 'react';

const SignUpPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = () => {
        // Handle signup logic (API call)
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-xl shadow-lg w-96">
                <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border p-2 mb-4 w-full rounded"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border p-2 mb-4 w-full rounded"
                />
                <button
                    onClick={handleSignUp}
                    className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 w-full"
                >
                    Sign Up
                </button>
            </div>
        </div>
    );
};

export default SignUpPage;
