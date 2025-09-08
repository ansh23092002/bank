import img from "../assets/bg.png";
import Button from "../components/Button";
import Nav from "../components/Nav";
import clickright from "../assets/right.png";

const home = () => {
  return (
    <div className=" h-screen bg-gradient-to-br from-white to-sky-400 ">
      <img src={img} alt="" className="absolute right-0 -bottom-85 " />
      <Nav />
      <div className="absolute ml-[79px]">
        <h1 className=" text-[50px] font-semibold text-white">
          {" "}
          <span className="text-blue-300">Get Personal</span> Loans <br />{" "}
          Instantly – No Hassle, <br />{" "}
          <span className="text-[#F7FF00]">Just Cash!</span> "{" "}
        </h1>
        <p className="text-3xl text-white w-150">
          Low interest rates, fast approval, no hidden fees
        </p>
        <div className="flex gap-10 mt-10">
          <Button
            text="Apply now "
            icon={clickright}
            classnme="bg-[linear-gradient(118deg,#004CBD_0%,white_100%)] "
          />
          <Button
            text="check Eligibility"
            classnme="bg-[linear-gradient(118deg,#067AFF_0%,#80D5FF_100%)]"
          />
        </div>
      </div>
    </div>
  );
};

export default home;
