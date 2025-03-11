'use client';

import { useState } from 'react';

export default function DownloadAdmitCard() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);

  const handleSendOtp = () => {
    if (email) {
      setIsOtpSent(true);
      alert('OTP sent to your email');
    }
  };

  const handleGetCard = () => {
    if (otp) {
      alert('Admit Card Downloaded');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-semibold text-center text-main mb-6">
        Download Admit Card
      </h2>
      <div className="w-full max-w-lg md:max-w-2xl lg:max-w-3xl p-6 md:p-10 bg-white rounded-lg shadow-lg">
        <div className="mb-6">
          <label className="block text-gray-700 text-lg font-bold mb-2">Email *</label>
          <div className="flex flex-col md:flex-row gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="text-lg flex-grow p-3 bg-slate-100 border border-gray-300 rounded-md md:rounded-l-md md:rounded-r-none focus:outline-none"
            />
            <button
              onClick={handleSendOtp}
              className="px-6 py-3 bg-main text-white font-semibold rounded-md md:rounded-r-md md:rounded-l-none transition"
            >
              Send OTP
            </button>
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-lg font-bold mb-2">OTP *</label>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="OTP"
            className="text-lg w-full p-3 border bg-slate-100 border-gray-300 rounded-md focus:outline-none"
          />
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleGetCard}
            className="px-10 md:px-14 py-4 bg-main text-white font-bold rounded-md transition focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            GET CARD
          </button>
        </div>
      </div>
    </div>
  );
}


