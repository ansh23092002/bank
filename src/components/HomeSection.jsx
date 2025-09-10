  import img from "../assets/bg.png";
  import Button from "../components/Button";
  import Nav from "../components/Nav";
  import clickright from "../assets/right.png";

  const home = () => {
    return (
      <div className=" ">
        {/* landing page */}
        <div className=" h-[100vh] bg-[linear-gradient(145deg,#ffffff_6%,#40C6FF_31%)]  relative overflow-hidden">
      
          <img src={img} alt="background watermark " className="absolute  max-sm:h-full max-sm:w-auto  lg:-bottom-85 " />
          <div className="absolute pl-10 md:p-5 lg:ml-[79px] md:top-25 lg:top-40 top-40 ">
            <h1 className=" text-[30px] md:text-[20px] lg:text-[50px] font-semibold text-white">
              {" "}
              <span className="bg-[linear-gradient(145deg,#88C9FF_8%,#999999_95%)] bg-clip-text text-transparent">Get Personal</span> Loans <br />{" "}
              Instantly – No Hassle, <br />{" "}
              <span className="text-[#F7FF00]">Just Cash!</span> "{" "}
            </h1>
            <p className="text-3xl max-sm:text-2xl italic font-thin text-zinc-900">
              Low interest rates, fast approval, no hidden fees
            </p>
            <div className="flex flex-col sm:flex-row gap-6 mt-8 w-full ">
              <Button
                text="Apply now "
                icon={clickright}
                classnme="max-sm:w-35 bg-[linear-gradient(118deg,#004CBD_0%,white_100%)] text-white "
              />
              <Button
                text="check Eligibility"
                classnme=" max-sm:w-35 h-8 bg-[linear-gradient(118deg,#067AFF_0%,#80D5FF_100%)] text-white"
              />
            </div>
          </div>

          {/* our bank */}

                
          
        </div>
      </div>
    );
  };

  export default home;
