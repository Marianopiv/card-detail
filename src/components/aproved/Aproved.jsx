import React from "react";
import cardbg from "../../assets/cardbg.png";

const Aproved = ({setData}) => {
    const reset = () => {
        setData({})
    }
  return (
    <div className="flex flex-col justify-center md:p-10 md:mr-10 md:h-screen md:w-96 items-center gap-10 mt-10">
      <div className="relative w-14 h-14 flex items-center justify-center">
        <p className="z-50 text-white text-3xl font-thin">✔</p>
        <img className=" h-full rounded-full absolute" src={cardbg} alt="" />
      </div>
      <h2 className="text-4xl uppercase font-mono">thank you!</h2>
      <p>We've added your card details</p>
      <button
      onClick={reset}
        className="w-64 bg-black text-white"
      >
        Confirm
      </button>
    </div>
  );
};

export default Aproved;
