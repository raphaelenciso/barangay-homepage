import { useState } from "react";
import { BsFillSunFill } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed md:top-4 z-10 ">
      <div className="flex justify-between items-center rounded-lg bg-dark-blue bg-opacity-85 max-w-6xl mx-auto px-8 py-4 md:py-2 ">
        <div className="flex items-center">
          <img alt="brgy" src="/Barangay_Seal.png" className="h-10 w-10 mr-3" />
          <Link to="/" className="text-2xl font-semibold">
            Barangay 564
          </Link>
        </div>
        <ul className="hidden md:flex gap-10 mr-64">
          <li className="cursor-pointer">
            <a href="/">Home</a>
          </li>
          <li className="cursor-pointer">
            <a href="https://forms.barangay564.online/">Request</a>
          </li>
          <li className="cursor-pointer">
            <a href="https://forms.barangay564.online/tracker">Track</a>
          </li>
          <li className="cursor-pointer">
            <a>Contact</a>
          </li>
        </ul>

        <BsFillSunFill size={30} className="hidden md:block" />

        <div className="block md:hidden relative">
          <RxHamburgerMenu
            size={30}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
          {isMenuOpen && (
            <ul className="flex flex-col py-6 px-8 rounded-lg gap-4 text-lg  bg-dark-blue absolute top-10 right-[-20px]  ">
              <Link to="/">Home</Link>

              <li className="cursor-pointer">
                <a href="https://forms.barangay564.online/">Request</a>
              </li>
              <li className="cursor-pointer">
                <a href="https://forms.barangay564.online/tracker">Track</a>
              </li>
              <li className="cursor-pointer">
                <a>Contact</a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
