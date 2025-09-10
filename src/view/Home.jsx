import React   from "react";
import HomeSection from "../components/HomeSection";
import savingmonth from "../assets/Savingmonth.svg";
import { loan_type, person1 } from "../Data";
import Products from "../components/product";
import { useEffect } from "react";
import { useState } from "react";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";



const Home = () => {
const [client, setclient] = useState(0);
  useEffect(() => {
   
    setTimeout(() => {
      if(client<90){

        setclient(client+10);
      }
    }, 200);
   
  }, [client]);
  return (
    <div>
      <HomeSection />
 
       {/* About Section */}
<div className="flex flex-col md:flex-row items-center justify-between m-6 md:m-10 bg-[#F2FBEF] rounded-2xl p-6 md:p-10 gap-6">
  {/* Left Image */}
  <div className="flex justify-center md:w-1/2">
    <img
      src={savingmonth}
      alt="Saving Month"
      className="p-6 bg-[#F5F5F5] rounded-2xl w-full max-w-xs sm:max-w-sm md:max-w-md"
    />
  </div>

  {/* Right Content */}
  <div className="flex flex-col gap-6 md:w-1/2">
    <h2 className="uppercase font-bold text-lg text-green-900">Our Bank</h2>
    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
      We are a new-age fintech platform dedicated to simplifying access to personal loans for every Indian.
      Whether it's an unexpected medical bill, home renovation, or a dream vacation — we're here to fund your
      goals with fast, paperless, and secure loan solutions. At the heart of our platform lies trust,
      transparency, and technology.
    </p>

    <h2 className="font-bold text-lg text-green-900">Our Mission</h2>
    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
      To empower individuals with instant access to credit, breaking down financial barriers through
      innovation, simplicity, and customer-first experiences.
    </p>

    <h2 className="font-bold text-lg text-green-900">Our Team</h2>
    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
      We’re a passionate group of financial experts, developers, designers, and customer care professionals
      committed to making credit more accessible and fair for everyone.
    </p>
  </div>
</div>

{/* Loan Type Section */}
<h1 className="font-bold text-2xl m-6 md:m-10 text-green-900">Loan Type</h1>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-6 md:m-10">
  {loan_type.map((item) => (
    <div
      key={item.id}
      className="rounded-2xl border p-4 bg-white hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
    >
      <h1 className="text-green-800 font-bold text-sm md:text-base mb-3">
        {item.Heading}
      </h1>
      <img
        src={item.src}
        alt={item.Heading}
        className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
      />
    </div>
  ))}
</div>

      <Products />
          {/* banner */}
<div className="p-10 min-h-screen w-full flex flex-col md:flex-row items-center md:items-start justify-center">
  {/* Left Image */}
  <div className="flex-shrink-0">
    <img
      src={person1}
      alt="Person"
      className="max-w-xs md:max-w-sm lg:max-w-md"
    />
  </div>

  {/* Right Content */}
  <div className="mt-8 md:mt-0 md:ml-16">
    <h1 className="text-2xl md:text-4xl font-bold mb-6">
      We strive to deeply understand and meet user expectations
    </h1>

    {/* Stats Section */}
    <div className="text-[#1B6CE1] text-xl md:text-3xl grid grid-cols-2 gap-8">
      <div className="border-l-2 pl-4">
        <p className="font-bold mb-2">{client}+</p>
        <p className="text-base text-black">Happy Clients</p>
      </div>
      <div className="border-l-2 pl-4">
        <p className="font-bold mb-2">750+</p>
        <p className="text-base text-black">Projects Delivered</p>
      </div>
      <div className="border-l-2 pl-4">
        <p className="font-bold mb-2">400+</p>
        <p className="text-base text-black">Active Users</p>
      </div>
      <div className="border-l-2 pl-4">
        <p className="font-bold mb-2">45+</p>
        <p className="text-base text-black">Team Members</p>
      </div>
    </div>
  </div>
</div>


          {/* contact us */}
            <ContactForm/>
          
         
    </div>
  );
};

export default Home;
