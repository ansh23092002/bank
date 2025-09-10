import React from "react";

const Footer = () => {
  return (
    <footer
      className="bg-gradient-to-r from-blue-600 to-blue-400 text-white pt-20 sm:pt-12 md:pt-8"
      style={{ clipPath: "polygon(18% 14%, 100% 0, 100% 100%, 0 100%, 0 0)" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* About Us */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-blue-900">About Us</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-yellow-200 transition-colors">
                Personal Loans
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-200 transition-colors">
                Loan Calculator
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-200 transition-colors">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-blue-900">Contact Us</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-yellow-200 transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-200 transition-colors">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Business Query */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-blue-900">
            Business Query
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-yellow-200 transition-colors">
                Partnership
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-200 transition-colors">
                About Project
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-200 transition-colors">
                Corporate
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-blue-900">
            Our Contact Information
          </h3>
          <p className="text-sm mb-3">
            <span className="font-semibold">Address:</span>
            <br />
            123 Financial Street, Suite 456, New York, NY 10001
          </p>
          <p className="text-sm mb-3">
            <span className="font-semibold">Email:</span>
            <br />
            support@fintechco.com
          </p>
          <p className="text-sm">
            <span className="font-semibold">Phone:</span>
            <br />
            (555) 123-4567
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-blue-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} Fintech Co. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
