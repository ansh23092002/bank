import React from "react";
import { Link } from "react-router-dom";


 const About = ()=> {
  return (
    <div className="min-h-screen  [background:linear-gradient(179deg,rgba(113,217,255,1)_23%,rgba(255,255,255,1)_73%)]">
     

      {/* Hero Section */}
      <section className="text-center px-6 pt-30 ">
        <h2 className="text-4xl md:text-5xl font-light text-blue-900 leading-snug">
          On a Mission to Make <br />
          Finance Simple, Secure <br />
          & Accessible
        </h2>
      </section>

      {/* Cards Section */}
      
      <section className="mt-16 grid grid-cols-1  md:grid-cols-3 gap-8 px-8 max-w-6xl mx-auto p-10">
        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <h3 className="text-lg font-bold text-blue-700 mb-4">Who We are</h3>
          <p className="text-gray-600">
            We are a team of fintech innovators, technologists, and finance
            experts dedicated to redefining the way people manage money
          </p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 text-center  ">
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

     {/* about text */}
      <section className="m-10 max-w-6xl ">
        <h2 className="text-lg text-blue-800 font-bold pb-3">About su</h2>
        <p className="">We simplify personal finance by providing digital tools that help you save smarter, spend wisely, and grow your money—all in one secure platform.
From instant personal loans and UPI-enabled payments to automated bill tracking, expense insights, and smart investments, we make money management effortless and transparent.<br/>
Whether you're building your savings, paying bills, or planning for the future, our all-in-one fintech solution ensures everything is done quickly, securely, and with complete control at your fingertips.</p>

      </section>
    </div>
  );
}

export default  About;

// import React from 'react'

// const About = () => {
//   return (
//     <div>
//       about
//     </div>
//   )
// }

// export default About
