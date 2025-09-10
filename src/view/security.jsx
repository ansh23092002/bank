import React from "react";
import { ShieldCheck, Eye, FileCheck, Fingerprint } from "lucide-react";

const Security = ()=> {
  return (
    <div className="bg-gradient-to-b from-sky-200 to-white min-h-screen">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h1 className="text-3xl font-bold text-blue-800 mb-4">Security</h1>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Your safety is our top priority. We use bank-grade encryption and
          AI-driven monitoring to keep your money and data secure 24/7.
        </p>

        {/* Icon */}
        <div className="flex justify-center mt-8">
          <div className="w-28 h-28 rounded-full bg-white shadow-lg flex items-center justify-center">
            <ShieldCheck className="text-blue-600 w-14 h-14" />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <Eye className="text-yellow-500 w-10 h-10 mx-auto mb-3" />
          <h3 className="font-bold text-blue-700">256-bit Encryption</h3>
          <p className="text-gray-600 text-sm mt-2">
            All data is encrypted in transit and at rest using bank-level
            security.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <FileCheck className="text-green-600 w-10 h-10 mx-auto mb-3" />
          <h3 className="font-bold text-blue-700">Real-Time Fraud Monitoring</h3>
          <p className="text-gray-600 text-sm mt-2">
            AI-powered alerts and detection systems run 24/7 to spot suspicious
            activity instantly.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <ShieldCheck className="text-blue-600 w-10 h-10 mx-auto mb-3" />
          <h3 className="font-bold text-blue-700">Regulatory Compliance</h3>
          <p className="text-gray-600 text-sm mt-2">
            Fully compliant with RBI guidelines, PCI DSS, and ISO 27001
            standards.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <Fingerprint className="text-purple-600 w-10 h-10 mx-auto mb-3" />
          <h3 className="font-bold text-blue-700">
            Secure Login & Biometric Access
          </h3>
          <p className="text-gray-600 text-sm mt-2">
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
}

export default Security;