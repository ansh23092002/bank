import React from "react";
import { ShieldCheck, Eye, FileCheck, Fingerprint } from "lucide-react";
import { cardbiometric, cardcard, cardcontract, cardpassword, security } from "../Data";

const Security = () => {
  return (
    <div className="bg-gradient-to-b from-sky-200 to-white min-h-screen py-20">
      {/* Header Section */}
      <div className="flex justify-between items-center lg:px-15 pl-8  py-12">
  {/* Text Section */}
  <div className="max-w-xl">
    <h1 className="text-3xl lg:text-6xl font-semibold text-blue-800 mb-4">Security</h1>
    <p className="text-gray-700 max-w-2xl">
      Your safety is our top priority. We use bank-grade encryption and
      AI-driven monitoring to keep your money and data secure 24/7.
    </p>
  </div>

  {/* Icon */}
  <div className="lg:h-60 lg:w-60 border-white border-20 rounded-full flex items-center justify-center">
    <div className="w-full h-full border-[#C3F4FF] border-20 rounded-full flex justify-center items-center">
      <div className="w-full h-full bg-[#B1E9F5] flex justify-center items-center rounded-full">
        <img
          src={security}
          alt="security icon"
          className="rounded-full p-3"
        />
      </div>
    </div>
  </div>
</div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-9">
  <div className="bg-white shadow-md rounded-lg p-4 lg:p-3 text-center flex flex-col max-w-xs mx-auto">
    <h3 className="font-bold text-blue-700 text-base lg:text-sm">256-bit Encryption</h3>
    <img src={cardpassword} alt="" className="w-20 h-20 mx-auto lg:w-16 lg:h-16" />
    <p className="text-gray-600 text-sm lg:text-xs mt-2">
      All data is encrypted in transit and at rest using bank-level security.
    </p>
  </div>

  <div className="bg-white shadow-md rounded-lg p-4 lg:p-3 text-center flex flex-col max-w-xs mx-auto">
    <h3 className="font-bold text-blue-700 text-base lg:text-sm">Real-Time Fraud Monitoring</h3>
    <img src={cardcard} alt="" className="w-20 h-20 mx-auto lg:w-16 lg:h-16" />
    <p className="text-gray-600 text-sm lg:text-xs mt-2">
      AI-powered alerts and detection systems run 24/7 to spot suspicious activity instantly.
    </p>
  </div>

  <div className="bg-white shadow-md rounded-lg p-4 lg:p-3 text-center flex flex-col max-w-xs mx-auto">
    <h3 className="font-bold text-blue-700 text-base lg:text-sm">Regulatory Compliance</h3>
    <img src={cardcontract} alt="" className="w-20 h-20 mx-auto lg:w-16 lg:h-16" />
    <p className="text-gray-600 text-sm lg:text-xs mt-2">
      Fully compliant with RBI guidelines, PCI DSS, and ISO 27001 standards.
    </p>
  </div>

  <div className="bg-white shadow-md rounded-lg p-4 lg:p-3 text-center flex flex-col max-w-xs mx-auto">
    <h3 className="font-bold text-blue-700 text-base lg:text-sm">Secure Login & Biometric Access</h3>
    <img src={cardbiometric} alt="" className="w-20 h-20 mx-auto lg:w-16 lg:h-16" />
    <p className="text-gray-600 text-sm lg:text-xs mt-2">
      Multi-factor authentication and biometric login for account safety.
    </p>
  </div>
</div>


      {/* Bottom Section */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-xl font-bold text-blue-800 mb-4">Security</h2>
        <p className="text-gray-700 leading-relaxed">
          Your security is our top priority. We use 256-bit encryption,
          AI-powered fraud detection, and comply with RBI and global security
          standards to protect your data and transactions. With secure login,
          real-time monitoring, and a privacy-first approach — your money is
          always in safe hands.
        </p>
      </div>
    </div>
  );
};

export default Security;
