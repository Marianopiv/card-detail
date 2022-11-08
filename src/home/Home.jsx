import React, { useEffect, useState } from "react";
import backgroundviol from "../assets/backgroundviol.png";
import cardbg from "../assets/cardbg.png";
import whitecircle from "../assets/whitecircle.png";
import Aproved from "../components/aproved/Aproved";
import Basic from "../components/pruebaFormik/Basic";
const Home = () => {
  const [data, setData] = useState({});

  const example = ["0000 0000 0000 0000", "Jane Appleseed", "00/00", "000"];

  useEffect(() => {}, [data]);

  return (
    <>
      <div className="flex flex-col md:justify-center gap-32 md:gap-10 md:flex-row">
        <div className="relative md:w-3/5 md:mr-16 lg:mr-32 h-2/5 flex  justify-end">
          <img
            className="absolute w-screen h-60 md:h-screen -z-10"
            src={backgroundviol}
            alt=""
          />
          <div className="w-60 h-36 z-50 bg-slate-300 rounded-lg mt-6 mr-5 flex flex-col md:mt-80  md:absolute md:left-40 lg:left-3/4 justify-center gap-5 items-center pb-2">
            <div className="bg-gray-800 w-full h-8"></div>
            <div className="bg-gray-400 w-5/6 h-8 flex justify-end items-center pr-2 text-xs rounded-lg">
              <p className="text-white tracking-widest">
                {data["cvc"] ? data["cvc"] : example[3]}
              </p>
            </div>
          </div>
          <div className="w-60 h-36 z-50 top-32 md:left-28 lg:left-2/4 right-1/4 rounded-lg absolute flex">
            <img className=" absolute  rounded-lg" src={cardbg} alt="" />
            <div className="z-50 flex flex-col text-white p-3 justify-between">
              <div className="flex gap-3">
                <img className="w-8 h-8" src={whitecircle} alt="" />
                <p className="text-xl font-extralight">o</p>
              </div>
              <div className="p-3 flex flex-col gap-3">
                <h3 className="tracking-widest">
                  {data["card_number"] ? data["card_number"] : example[0]}
                </h3>
                <div className="flex uppercase text-xs tracking-wider justify-around gap-5">
                  <p>
                    {data["cardholder_name"]
                      ? data["cardholder_name"]
                      : example[1]}
                  </p>
                  <div className="flex gap-3">
                    <p className="w-2">
                      {data["month"] && data["year"]
                        ? data["month"] + "/"
                        : example[2]}
                    </p>
                    <p className="w-2">
                      {data["month"] && data["year"]
                        ? [data.year].toString().slice(2, 4)
                        : ""}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          {data.card_number ? (
            <Aproved data={data} setData={setData} />
          ) : (
            <Basic data={data} setData={setData} />
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
