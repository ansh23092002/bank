import React from "react";
import { defineConfig } from "vite";

const About=()=> {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 to-white">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-4 bg-transparent">
        <h1 className="text-2xl font-bold text-blue-900">Bank</h1>
        <nav className="bg-white/40 backdrop-blur-lg px-6 py-2 rounded-full flex gap-6 text-blue-900 font-medium">
          <a href="#" className="hover:text-blue-600">About Us</a>
          <a href="#" className="hover:text-blue-600">Personal Loan</a>
          <a href="#" className="hover:text-blue-600">Security</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center mt-20 px-6">
        <h2 className="text-4xl md:text-5xl font-light text-blue-900 leading-snug">
          On a Mission to Make <br />
          Finance Simple, Secure <br />
          & Accessible
        </h2>
      </section>

      {/* Cards Section */}
      <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 px-8 max-w-6xl mx-auto">
        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <h3 className="text-lg font-bold text-blue-700 mb-4">Who We are</h3>
          <p className="text-gray-600">
            We are a team of fintech innovators, technologists, and finance
            experts dedicated to redefining the way people manage money
          </p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <h3 className="text-lg font-bold text-blue-700 mb-4">What We do</h3>
          <p className="text-gray-600">
            We simplify personal finance by providing digital tools that help
            you save smarter, spend wisely, and grow your money — all in one
            secure platform.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <h3 className="text-lg font-bold text-blue-700 mb-4">Why Choose Us</h3>
          <p className="text-gray-600">
            We're not just another fintech platform — we’re your trusted partner
            in financial growth. Here’s why thousands choose us every day:
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;