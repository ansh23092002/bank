import React from "react";
import card from "../assets/unsplash.png";
import Button from "./Button";
import {
  Framecard1,
  Framecard2,
  Framecard3,
  frameClude,
  framefinger,
  frameGroup,
  FrameSecure,
  frameVirus,
} from "../Data";

const Products = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-6 lg:grid-rows-6 gap-4 p-4 lg:m-10 lg:h-dvh">
      
      {/* Left Image */}
      <div className="lg:col-span-2 lg:row-span-6">
        <img src={card} alt="main" className="object-cover  w-[350px] h-[300px]  md:w-[800px] md:h-[350px]  lg:w-full lg:h-full  rounded-lg" />
      </div>

      {/* Flexible Payment */}
      <div className="rounded-2xl bg-[linear-gradient(118deg,#C5D2F2_0%,#A5B8F4_100%)] flex justify-between items-center p-6 lg:col-span-2 lg:row-span-3 lg:col-start-3">
        <div className="flex flex-col gap-2 max-w-sm">
          <h3 className="text-xl lg:text-2xl font-bold text-white">Flexible Payment Plans</h3>
          <p className="text-white text-sm lg:text-base">Pay with 1-3 stages without hidden fees</p>
          <Button text="Learn More" classnme="bg-white mt-3  shadow-xl font-semibold rounded-lg" />
        </div>
        <div className="relative w-28 h-28 mt-6 sm:mt-0">
          <img src={FrameSecure} alt="secure" className="absolute top-0 left-0 w-16" />
          <img src={frameClude} alt="cloud" className="absolute top-8 left-6 w-14" />
          <img src={frameVirus} alt="virus" className="absolute top-16 left-10 w-12" />
        </div>
      </div>

      {/* Fast Loan */}
      <div className="rounded-2xl bg-[linear-gradient(118deg,#0065FD_0%,#ffffff_99%)] flex  justify-between items-center p-6 lg:col-span-2 lg:row-span-3 lg:col-start-3 lg:row-start-4">
        <div className="flex flex-col gap-2 max-w-sm">
          <h3 className="text-xl lg:text-2xl font-bold text-white">Fast Loan Upto ₹100000</h3>
          <p className="text-white text-sm lg:text-base">Instant Approval money in 5 minutes</p>
          <Button text="Learn More" classnme="bg-white mt-3  shadow-xl font-semibold rounded-lg" />
        </div>
        <div className="relative w-28 h-28 mt-6 sm:mt-0">
          <img src={Framecard1} alt="card1" className="absolute top-10 left-0 w-14" />
          <img src={Framecard2} alt="card2" className="absolute top-5 left-5 w-14" />
          <img src={Framecard3} alt="card3" className="absolute left-10 w-14" />
        </div>
      </div>

      {/* Free Credit Score */}
      <div className="rounded-2xl bg-[linear-gradient(118deg,#0063E5_0%,#066C4C_88%)] flex   justify-between items-center p-6 lg:col-span-2 lg:row-span-3 lg:col-start-5 lg:row-start-1">
        <div className="flex flex-col gap-2 max-w-sm">
          <h3 className="text-xl lg:text-2xl font-bold text-white">Free Credit Score Check</h3>
          <p className="text-white text-sm lg:text-base">No impact on your Credit history</p>
          <Button text="Learn More" classnme="bg-white mt-3 shadow-xl font-semibold rounded-lg" />
        </div>
        <div className="w-28 mt-6 sm:mt-0">
          <img src={frameGroup} alt="group" className="w-full" />
        </div>
      </div>

      {/* Data Security */}
      <div className="rounded-2xl bg-[linear-gradient(118deg,#4D536A_0%,#6E789D_71%)] flex  justify-between items-center p-6 lg:col-span-2 lg:row-span-3 lg:col-start-5 lg:row-start-4">
        <div className="flex flex-col gap-2 max-w-sm">
          <h3 className="text-xl lg:text-2xl font-bold text-white">Your Data is Secure</h3>
          <p className="text-white text-sm lg:text-base">Encrypted & not shared with third Parties</p>
          <Button text="Learn More" classnme="bg-white  shadow-xl font-semibold rounded-lg" />
        </div>
        <div className="flex justify-center items-center mt-6 sm:mt-0">
          <div className="h-24 w-24 border border-white rounded-full flex justify-center items-center">
            <div className="h-16 w-16 border border-white rounded-full flex justify-center items-center">
              <img src={framefinger} alt="fingerprint" className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
