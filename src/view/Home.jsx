import React from "react";
import HomeSection from "../components/HomeSection";
import savingmonth from '../assets/Savingmonth.svg'
import { loan_type } from "../Data";
const home = () => {
  return (
    <div>
      <HomeSection />
        <div>

      <div className="  flex items-center justify-between m-10 bg[#F2FBEF] ">
        <div className="  border-black  ">
            <img src={savingmonth} alt="" className="p-10 bg-[#F5F5F5] rounded-2xl" />
        </div>
        <div className=" flex flex-col gap-6 w-1/2 ">
          <h2 className="uppercase font-bold">our back</h2>
          <p  className="">
            We are a new-age fintech platform dedicated to simplifying access to
            personal loans for every Indian. Whether it's an unexpected medical
            bill, home renovation, or a dream vacation — we're here to fund your
            goals with fast, paperless, and secure loan solutions. At the heart
            of our platform lies trust, transparency, and technology.
          </p>
          <h2 className=" font-bold">Our Mission</h2>
          <p>
            To empower individuals with instant access to credit, breaking down
            financial barriers through innovation, simplicity, and
            customer-first experiences.
          </p>
      
          <h2 className=" font-bold">Our Team</h2>
          <p>
            We’re a passionate group of financial experts, developers,
            designers, and customer care professionals committed to making
            credit more accessible and fair for everyone.
          </p>
        </div>
      </div>
      <h1 className="font-bold text-2xl m-10">Loan Type</h1>
      <div className="flex m-10  justify-around">
        {loan_type.map((item)=>(
            <div key={item.id} className=" rounded-3xl border p-3 text-green-800 font-bold flex flex-col items-center">
                <h1>{item.Heading}</h1>
                <img src={item.src} alt="" />
            </div>
        ))}
      </div>
        </div>
    </div>
  );
};

export default home;
