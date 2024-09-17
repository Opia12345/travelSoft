import React from "react";
import Navbar from "../Components/Navbar";

const Header = () => {
  return (
    <>
      <header className="bg-[url('/hero.jpg')] h-screen w-full bg-cover bg-no-repeat bg-center bg-black/20 bg-blend-darken">
        <Navbar />
      </header>
    </>
  );
};

export default Header;
