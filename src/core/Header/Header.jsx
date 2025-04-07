import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useParams, useSearchParams } from "react-router-dom";
import { FaChevronDown, FaUpload } from "react-icons/fa";
import NavItems from "./NavItems";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from '/assets/IJBFA.png'

const Header = () => {
  const menuRef = useRef(null);
  const [MenuOpen, setMenuOpen] = useState(false);
  const dropdown1Ref = useRef(null);
  const dropdown2Ref = useRef(null);
  const dropdown3Ref = useRef(null);
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);
  const [scroll, setScroll] = useState(false);
  const location = useLocation();
  const isActive = location.pathname;
  const ToggleMenu = () => {
    setMenuOpen(!MenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
      if (dropdown1Ref.current && !dropdown1Ref.current.contains(event.target)) {
        setDropdown1(false);
      }
      if (dropdown2Ref.current && !dropdown2Ref.current.contains(event.target)) {
        setDropdown2(false);
      }
      if (dropdown3Ref.current && !dropdown3Ref.current.contains(event.target)) {
        setDropdown3(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    console.log();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

 

  return (
    <>
      <header
        ref={menuRef}
        className={`fixed top-0 w-full z-[100] bg-white ${scroll?' ':''}  `}
      >
        <div className={`${scroll ? "bg-[#1687A7]" : "bg-[#1687A7]"}  `}>
          <div className="max-w-full mx-auto w-full ">
            <div className="w-full flex items-center justify-between">

            <div className=" flex items-center z-10 w-[150px]" >
                <div className=" " ></div>
                <Link to={'/'}>
                  <div className=" bg-white 2xl:w-[300px] xl:w-[300px] lg:w-[250px] md:w-[230px] w-[200px] rounded-tr-[150px] h-[81px] lg:border-none border border-b-[#1687A7]" >
                    
                    <div className="flex justify-center items-center h-full">
                    <img
                      src={Logo}
                      loading='lazy'
                      alt="Website Logo"
                      className=" lg:min-w-40 lg:w-48 min-w-28 w-36 select-none "
                    />
                   
                    </div>
                  </div>
                </Link>
              </div>
  
              <Link to={"/"} className="lg:block hidden  lg:pl-44 xl:pl-0">
                <div className="flex justify-center items-center">
                  <h1 className="text-2xl font-semibold  whitespace-nowrap text-white namdhinggo-bold ">International Journal of Blockchain and FinTech Applications</h1>
                </div>
              </Link>

              <div className="hidden lg:block"></div>

              <div
                onClick={ToggleMenu}
                className={`${scroll ? "" : ""
                  } text-white inline-flex align-middle cursor-pointer items-center duration-300 min-w-24 select-none lg:hidden `}
              >
                {" "}
                
                < GiHamburgerMenu 
                  className={`${scroll ? " " : ""}  ml-12 text-3xl  cursor-pointer duration-300 m-1.5  rotate-180 `}
                />
              </div>

            
              
            </div>
          </div>

          <NavItems MenuOpen={MenuOpen} ToggleMenu={ToggleMenu} isActive={isActive} dropdown1Ref={dropdown1Ref} dropdown2Ref={dropdown2Ref} setDropdown1={setDropdown1} setDropdown2={setDropdown2} dropdown1={dropdown1} dropdown2={dropdown2} />
          {MenuOpen && (
            <div
              onClick={() => setMenuOpen(false)}
              className="h-screen w-full bg-black/40 absolute top-0"
            ></div>
          )}
        </div>

        {/* lg navigations */}
        <div className="py-1 w-full  bg-[#D3E0EA]" 
        >

          <div className="flex lg:justify-end lg:items-end justify-center items-center lg:px-60 py-2">
            <Link to="https://ijbfa.com/ijbfa/index.php/ijfba/about/submissions" target="_blank" rel="noopener noreferrer">
            <button className="text-white poppins-regular bg-[#1687A7] rounded-lg lg:p-1 lg:px-4   py-1 px-2">
             <div className="flex justify-between gap-2 "> Submit Paper <FaUpload className="mt-1" /></div>
            </button>
            </Link>
          </div>
         
        </div>
      </header>
    </>
  );
};

export default Header;