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
              confidence. Your Next Adventure Awaits
            </h5>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
