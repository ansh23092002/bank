import React from "react";

const  Footer =()=> {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-blue-300 "
    style={{ clipPath: "polygon(18% 14%, 100% 0, 100% 99%, 0 100%, 0 0)" }}>
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* About Us */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-blue-800">About Us</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Personal Loans</a></li>
            <li><a href="#" className="hover:text-white">Loan Calculator</a></li>
            <li><a href="#" className="hover:text-white">FAQs</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-blue-800">Contact Us</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Business Query */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-blue-800">Business Query</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Partnership</a></li>
            <li><a href="#" className="hover:text-white">About Project</a></li>
            <li><a href="#" className="hover:text-white">Corporate</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-blue-800">Our Contact Information</h3>
          <p className="text-sm mb-3">
            <span className="font-semibold ">Address</span><br />
            123 Financial Street, Suite 456, New York, NY 10001
          </p>
          <p className="text-sm mb-3">
            <span className="font-semibold ">Email</span><br />
            support@fintechco.com
          </p>
          <p className="text-sm">
            <span className="font-semibold ">Phone</span><br />
            (555) 123-4567
          </p>
        </div>
      </div>
    </footer>
  );
}


export default Footer;