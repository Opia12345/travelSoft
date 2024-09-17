import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-around px-6 py-6 text-white">
        <div className="logo">
          <h5 className="font-black text-lg font-mono">TravelSoft</h5>
        </div>
        <div className="flex gap-6">
          <h5>Home</h5>
          <h5>Stays</h5>
          <h5>Flights</h5>
          <h5>Airport Cabs</h5>
          <h5>Attractions</h5>
        </div>
        <div className="flex gap-4">
          <button className="bg-gradient-to-b from-blue-800 to-blue-950 text-white px-4 py-2 rounded-md">
            Book Trip
          </button>
          <button>
            EN <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
