import img from "../assets/bg.png";
import Button from "../components/Button";
import Nav from "../components/Nav";
import clickright from "../assets/right.png";

const home = () => {
  return (
    <div className="">
      {/* landing page */}
      <div className=" h-[100vh] bg-[linear-gradient(145deg,#ffffff_6%,#40C6FF_31%)]  relative">
        <img src={img} alt="" className="absolute right-0 -bottom-85 " />
        <Nav />
        <div className="absolute ml-[79px]">
          <h1 className=" text-[50px] font-semibold text-white">
            {" "}
            <span className="bg-[linear-gradient(145deg,#88C9FF_8%,#999999_95%)] bg-clip-text text-transparent">Get Personal</span> Loans <br />{" "}
            Instantly – No Hassle, <br />{" "}
            <span className="text-[#F7FF00]">Just Cash!</span> "{" "}
          </h1>
          <p className="text-3xl text-white w-140 italic font-thin">
            Low interest rates, fast approval, no hidden fees
          </p>
          <div className="flex gap-10 mt-10">
            <Button
              text="Apply now "
              icon={clickright}
              classnme="bg-[linear-gradient(118deg,#004CBD_0%,white_100%)] text-white "
            />
            <Button
              text="check Eligibility"
              classnme="bg-[linear-gradient(118deg,#067AFF_0%,#80D5FF_100%)] text-white"
            />
          </div>
        </div>

        {/* our bank */}

              
        
      </div>
    </div>
  );
};

export default home;
