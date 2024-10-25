import React, { useState ,useEffect} from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);

    if (!showMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { 
        setShowMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="flex justify-between items-center h-[146px] px-4 md1:px-8  md1:flex-col  md1:items-start relative z-50 animate-fade-in">
      {/* Logo */}
      <div className="flex-shrink-0 ">
        <a href="/">
          <img
            src="/images/Sintana2.png"
            alt="Logo"
            className="w-[118px] h-auto mix-blend-color-burn ml-3 font-extrabold"
          />
        </a>
      </div>

      {/* Hamburger Menu for Mobile View (visible only on 'sm' screen) */}
      <div

        className="sm1:absolute  md1:hidden lg1:hidden xl1:hidden absolute top-0 right-0 p-6 text-2xl cursor-pointer z-20"

        onClick={toggleMenu}
      >
        {showMenu ? (
          <FaTimes className="text-white" />
        ) : (
          <FaBars className="text-[#E7C022]" />
        )}
      </div>

      {/* Main Menu */}
      <div
        className={`flex flex-row ${
          showMenu ? "flex-col w-screen p-6  inset-0 h-screen bg-[#425563] fixed z-10 md1:hidden lg1:hidden xl1:hidden" : "sm1:hidden"
        }`}
      >
        <div
          className="relative"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <a

            href="/#"

            className={`font-sans font-medium text-[12.96px] text-white px-6 py-3 flex items-center transition-colors duration-300 hover:text-[#f0a500]  md1:pr-[24px] md1:pl-0 md1:py-0 lg1:pr-[24px] lg1:pl-0 lg1:py-0 lg1:text-[11.52px]`}
          >
            SOLUTIONS <FaChevronDown className="ml-2 text-[#f0a500]" />
          </a>
          {showDropdown && (
            <div className="absolute font-normal sm1:static sm1:py-0  text-[15px] top-full left-0 bg-[#425563] text-[#f5b719] py-4 z-50 flex flex-col rounded-lg min-w-[180px] max-w-[250px] transition-opacity duration-300">
              <a
                href="/existing-universities"
                className="px-4 py-2  hover:bg-opacity-75 sm1:px-6 sm1:py-3"
              >
                Existing Universities
              </a>
              <a
                href="/powered-by-bu"
                className="px-4 py-2 hover:bg-opacity-75 sm1:px-6 sm1:py-3"
              >
                Powered by BU
              </a>
              <a
                href="/new-universities"
                className="px-4 py-2 hover:bg-opacity-75 sm1:px-6 sm1:py-3"
              >
                New Universities
              </a>
              <a href="/globally-ranked-universities" className="px-4 py-2 hover:bg-opacity-75 sm1:px-6 sm1:py-3">
                Globally Ranked Universities
              </a>
            </div>
          )}
        </div>

        {/* Other Links */}
        <div className={`flex font-medium sm1:flex-col md1:flex-row md1:items-center `}>
          <a
            href="/team"
            className="px-6 py-3 text-[12.96px] text-white hover:text-[#f0a500]  md1:pr-[24px] md1:pl-0 md1:py-0 lg1:pr-[24px] lg1:pl-0 lg1:py-0 lg1:text-[11.52px]"
          >
            TEAM
          </a>
          <a
            href="/sintana-alliance"
            className="px-6 py-3 text-[12.96px] text-white hover:text-[#f0a500]  md1:pr-[24px] md1:pl-0 md1:py-0 lg1:pr-[24px] lg1:pl-0 lg1:py-0 lg1:text-[11.52px]"
          >
            THE SINTANA ALLIANCE
          </a>
          <a
            href="/bu-partnership"
            className="px-6 py-3 text-[12.96px] text-white hover:text-[#f0a500]  md1:pr-[24px] md1:pl-0 md1:py-0 lg1:pr-[24px] lg1:pl-0 lg1:py-0 lg1:text-[11.52px]"
          >
            BU PARTNERSHIP
          </a>
          <a
            href="/about"
            className="px-6 py-3 text-[12.96px] text-white hover:text-[#f0a500]  md1:pr-[24px] md1:pl-0 md1:py-0 lg1:pr-[24px] lg1:pl-0 lg1:py-0 lg1:text-[11.52px]"
          >
            ABOUT
          </a>
          <a
            href="/contact"
            className="px-6 py-3 text-[12.96px] text-white hover:text-[#f0a500]  md1:pr-[24px] md1:pl-0 md1:py-0 lg1:pr-[24px] lg1:pl-0 lg1:py-0 lg1:text-[11.52px]"
          >
            CONTACT
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
