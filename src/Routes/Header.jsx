import React from "react";
import Navbar from "../Components/Navbar";

const Header = () => {
  return (
    <>
      <header className="bg-[url('/hero.jpg')] h-screen w-full bg-cover bg-no-repeat bg-center bg-black/50 bg-blend-darken">
        <Navbar />
        <div className="text-white p-[130px]">
          <div className="font-black text-7xl">
            <h1>Plan.</h1>
            <h1>TravelSoft.</h1>
            <h1>Enjoy.</h1>
          </div>
          <div className="mt-4 font-semibold">
            <h5>
              Plan and book your perfect trip! Discover the world <br /> with
              confidence. Your Next Adventure Awaits.
            </h5>
          </div>
          <div className="mt-4 flex gap-4 bg-slate-400/20 w-[400px] px-3 py-2 rounded-full backdrop-blur-lg">
            <span className="flex">
              <img
                src="/user_1.jpg"
                className="w-[30px] h-[30px] rounded-full"
                alt=""
              />
              <img
                src="/user_2.jpg"
                className="w-[30px] h-[30px] rounded-full -ml-3"
                alt=""
              />
              <img
                src="/user_3.jpg"
                className="w-[30px] h-[30px] rounded-full -ml-3"
                alt=""
              />
            </span>
            <h5 className="font-semibold">Over 2.5 million happy customers</h5>
          </div>
          <div className="mt-8 bg-slate-200/20 p-6 backdrop-blur-lg border rounded-md">
            <div className="flex items-center gap-[70px] text-white">
              <h5 className="text-gray-400 font-semibold">Flights</h5>
              <h5 className="font-semibold">Stays</h5>
              <h5 className="text-gray-400 font-semibold">Tours</h5>
              <h5 className="text-gray-400 font-semibold">Rides</h5>
            </div>
            <div className="bg-gray-400 w-full h-[2px] mt-4"></div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
