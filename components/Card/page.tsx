'use client'
import React, { useState } from 'react';

const RegistrationCard = () => {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [cnic, setCnic] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setResult('Registration submitted successfully!');  
  };

  return (
    <div className="flex justify-center items-center mt-10 ">
      <div className="w-[800px] p-10 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-extrabold text-center text-main mb-6"></h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="registrationNumber" className="block text-2xl font-medium text-gray-700">
              Registration Number *
            </label>
            <input
              type="text"
              id="registrationNumber"
              name="registrationNumber"
              value={registrationNumber}
              onChange={(e) => setRegistrationNumber(e.target.value)}
              className="w-full px-12 py-4 border rounded-lg text-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your registration number"
              required
            />
          </div>
          <div>
            <label htmlFor="cnic" className="block text-2xl font-medium text-gray-700">
              CNIC or B-Form Number *
            </label>
            <input
              type="text"
              id="cnic"
              name="cnic"
              value={cnic}
              onChange={(e) => setCnic(e.target.value)}
              className="w-full px-16 py-4 border rounded-lg text-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter CNIC or B-Form number"
              required
            />
          </div>
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="bg-main text-white px-12 py-4 rounded-md font-bold focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Get Result
            </button>
          </div>
        </form>
        {result && <p className="text-center mt-6 text-green-500 text-xl">{result}</p>}
      </div>
    </div>
  );
};

export default RegistrationCard;
