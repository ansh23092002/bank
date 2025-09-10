import React from "react";
import card from "../assets/unsplash.png";
import Button from "./Button";
import { Framecard1, Framecard2, Framecard3, frameClude, framefinger, frameGroup, FrameSecure, frameVirus } from "../Data";

const Products = () => {
  return (
    <div className="grid grid-cols-6 grid-rows-6 gap-2 h-dvh m-10">
      <div className="col-span-2 row-span-6    ">
        <img src={card} alt="" className="object-fill w-full h-full" />
      </div>

      <div className=" rounded-2xl col-span-2 row-span-3  col-start-3 bg-[linear-gradient(118deg,#C5D2F2_0%,#A5B8F4_100%)] flex justify-center    py-20">
        <div className="flex flex-col  m-3 w-50 gap-2">
          <h3 className="text-2xl font-bold text-white">
            Flexible Payment plans
          </h3>
          <p className="text-white">Pay with 1-3 stages without hidden fees</p>
          <Button text="learn More" classnme=" bg-white w-30 mt-3 shadow-xl font-semibold" />
        </div>
        <div className=" relative ">
          <div className="  w-32">
            <img
              src={FrameSecure}
              alt="icon Secure"
              className="z-10 absolute top-0   "
            />
            <img
              src={frameClude}
              alt="icon clude"
              className="z-5 absolute top-10 "
            />
            <img
              src={frameVirus}
              alt=" icon virus"
              className=" absolute top-20"
            />
          </div>
        </div>
      </div>

      <div className=" rounded-2xl col-span-2 row-span-3 col-start-3 row-start-4 bg-[linear-gradient(118deg,#0065FD_0%,#ffffff_71%)] flex justify-center  py-20">
        <div className="flex flex-col  m-3 w-50 gap-2">
          <h3 className="text-2xl font-bold text-white">
            Fast Loan Upto ₹100000
          </h3>
          <p className="text-white">Instant Approval money in 5 minutes</p>
          <Button text="learn More" classnme=" bg-white w-30 mt-3 shadow-xl font-semibold" />
        </div>
        <div className="   relative ">
          <div className="h-full w-32">
            <img
              src={Framecard1}
              alt="icon Secure"
              className="z-10 absolute top-10 "
            />
            <img
              src={Framecard2}
              alt="icon clude"
              className="z-5 absolute left-5 top-5"
            />
            <img
              src={Framecard3}
              alt=" icon virus"
              className=" absolute left-10"
            />
          </div>
        </div>
      </div>

      <div className=" rounded-2xl col-span-2 row-span-3 col-start-5 row-start-1 bg-[linear-gradient(118deg,#0063E5_0%,#066C4C_88%)] flex py-20 justify-center">
        <div className="flex flex-col   gap-2 w-50">
          <h3 className="text-2xl font-bold text-white">
            Free Credit Score check
          </h3>
          <p className="text-white">No impact on your Credit history</p>
          <Button text="learn More" classnme=" bg-white w-30 mt-3 shadow-xl font-semibold" />
        </div>
        <div className=" w-32 mt-9 ">
           <img src={frameGroup} alt="group" />
        </div>
      </div>

      <div className=" rounded-2xl col-span-2 row-span-3 col-start-5 row-start-4 bg-[linear-gradient(118deg,#4D536A_0%,#6E789D_71%)] flex py-20 justify-center">
        <div className="flex flex-col  m-3 w-50 gap-2">
          <h3 className="text-2xl font-bold text-white">Your Data is Secure</h3>
          <p className="text-white">Encrypted & not shared with third Parties</p>
          <Button text="learn More" classnme=" bg-white w-30 mt-3 shadow-xl font-semibold" />
        </div>
        <div className="mt-12">
          <div className="h-32   w-32  border border-white rounded-full flex justify-center items-center ">
            <div className="border-white border size-[70%] flex justify-center items-center rounded-full ">
                <img src={framefinger} alt="fingerprint" className="size-12" />
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
