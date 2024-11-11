import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import clsx from "clsx";
import logo from "../asets/logo/manaChoice.png";
import LogoTyping from "../libs/LogoTyping";

const Navbar = () => {
  const [isSideMenuOpen, setMenu] = useState(false);
  const [isProductsOpen, setProductsOpen] = useState(false);
  const [isServicesOpen, setServicesOpen] = useState(false);
  const [isTrainigOpen, setTraingOpen] = useState(false);

  const toggleProducts = () => {
    setProductsOpen((prev) => !prev);
    setServicesOpen(false);
    setTraingOpen(false);
  };

  const toggleServices = () => {
    setServicesOpen((prev) => !prev);
    setProductsOpen(false);
    setTraingOpen(false);
  };

  const toggleTraining = () => {
    setTraingOpen((prev) => !prev);
    setServicesOpen(false);
    setProductsOpen(false);
  };

  const toggleAllClose = () => {
    setServicesOpen(false);
    setProductsOpen(false);
    setTraingOpen(false);
  };
  return (
    <>
      <main className="sticky top-0 z-50 bg-white shadow-md shadow-green-800">
        <nav className="items-center relative z-50 md:py-0 md:mx-0">
          <div className="w-100 md:px-2">
            <section className="d-flex justify-content-between w-100">
              <div className="d-flex p-2">
                <Link to="/" className="no-underline">
                  <img src={logo} alt="logo" style={{ height: "70px" }} />
                </Link>
                <div className="hidden lg:block mt-6 ml-2">
                  <span className="text-2xl fw-bold text-black self-center">
                    TechWorks (OPC) Pvt. Ltd.
                  </span>
                  <br />
                  <span className="text-sm fw-normal font-mono text-green-900">
                    <LogoTyping text="LET'S BUILD THE FUTURE TOGETHER !" />
                  </span>
                </div>
              </div>

              <div className="place-content-center">
                <FiMenu
                  onClick={() => setMenu(true)}
                  className="text-4xl cursor-pointer md:hidden mx-4"
                />
              </div>

              <div className="menu hidden  lg:block place-content-center px-4">
                <div className="float-end grid grid-cols-5 gap-4">
                  <div class="relative group inline-block">
                    <span class="cursor-pointer fw-bold">PRODUCTS+</span>
                    <div class="absolute mt-2 left-0 w-full h-[4px] bg-green-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></div>
                    <div class="z-50 absolute top-full right-0 mt-4 rounded-lg w-60 bg-white shadow-md opacity-1 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 transition-all duration-300 ease-in-out origin-top">
                      <div class="p-2 cursor-pointer">
                        <Link
                          to="/food"
                          className="cursor-pointer p-2 block hover:bg-gray-100 hover:rounded-lg no-underline text-black"
                        >
                          Food Booking App
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div class="relative group inline-block">
                    <span class="cursor-pointer fw-bold">SERVICES+</span>
                    <div class="absolute mt-2 left-0 w-full h-[4px] bg-green-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></div>
                    <div class="p-2 z-50 absolute top-full right-0 mt-4 rounded-lg w-60 bg-white shadow-md opacity-1 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 transition-all duration-300 ease-in-out origin-top">
                      <Link
                        to="/web-service"
                        className="cursor-pointer p-2 block hover:bg-gray-100 hover:rounded-lg no-underline text-black"
                      >
                        Web Design & Development
                      </Link>

                      <Link
                        to="/mobile-service"
                        className="cursor-pointer p-2 block hover:bg-gray-100 hover:rounded-lg no-underline text-black"
                      >
                        Mobile App Development
                      </Link>
                    </div>
                  </div>

                  <div class="relative group inline-block">
                    <span class="cursor-pointer fw-bold"> TRAINING+</span>
                    <div class="absolute mt-2 left-0 w-full h-[4px] bg-green-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></div>
                    <div class="p-2 z-50 absolute top-full right-0 mt-4 rounded-lg w-60 bg-white shadow-md opacity-1 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 transition-all duration-300 ease-in-out origin-top">
                      <Link
                        to="/web-taining"
                        className="cursor-pointer p-2 block hover:bg-gray-100 hover:rounded-lg no-underline text-black"
                      >
                        Web Design & Development
                      </Link>

                      <Link
                        to="/mobile-taining"
                        className="cursor-pointer p-2 block hover:bg-gray-100 hover:rounded-lg no-underline text-black"
                      >
                        Mobile App Development
                      </Link>
                    </div>
                  </div>

                  <div class="relative group inline-block">
                    <span class="cursor-pointer fw-bold">
                      <Link to="/about" className="no-underline text-black">
                        ABOUT US
                      </Link>
                    </span>
                    <div class="absolute mt-2 left-0 w-full h-[4px] bg-green-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></div>
                  </div>

                  <div class="relative group inline-block">
                    <span class="cursor-pointer fw-bold">
                      <Link
                        to="/contact-us"
                        className="no-underline text-black"
                      >
                        CONTACT-US
                      </Link>
                    </span>
                    <div class="absolute mt-2 left-0 w-full h-[4px] bg-green-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div
            className={clsx(
              "fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 left-0 z-40 transition-all transform",
              isSideMenuOpen ? "translate-x-0" : "translate-x-full"
            )}
          >
            <section className="text-black bg-white flex-col absolute right-0 top-0 h-screen p-8 gap-8 z-50 flex">
              <IoCloseOutline
                onClick={() => setMenu(false)}
                className="mt-2 mb-2 text-3xl cursor-pointer"
              />

              {/* Products Dropdown */}
              <div className="relative">
                <span onClick={toggleProducts} className="cursor-pointer">
                  PRODUCTS+
                </span>
                <div
                  className={clsx(
                    "transition-all duration-300 ease-in-out overflow-hidden",
                    isProductsOpen
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  )}
                >
                  <div className="mt-2">
                    <Link
                      to="/food"
                      className="cursor-pointer p-2 block hover:bg-gray-100 hover:rounded-lg no-underline text-black"
                    >
                      - Food Booking App
                    </Link>
                  </div>
                </div>
              </div>

              {/* Services Dropdown */}
              <div className="relative">
                <span onClick={toggleServices} className="cursor-pointer">
                  SERVICES+
                </span>
                <div
                  className={clsx(
                    "transition-all duration-300 ease-in-out overflow-hidden",
                    isServicesOpen
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  )}
                >
                  <div className="mt-2">
                    <Link
                      to="/web-service"
                      className="cursor-pointer p-2 block hover:bg-gray-100 hover:rounded-lg no-underline text-black"
                    >
                      - Web Design & Development
                    </Link>
                    <Link
                      to="/mobile-service"
                      className="cursor-pointer p-2 block hover:bg-gray-100 hover:rounded-lg no-underline text-black"
                    >
                      - Mobile App Development
                    </Link>
                  </div>
                </div>
              </div>

              <div className="relative">
                <span onClick={toggleTraining} className="cursor-pointer">
                  TRAINING+
                </span>
                <div
                  className={clsx(
                    "transition-all duration-300 ease-in-out overflow-hidden",
                    isTrainigOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <div className="mt-2">
                    <Link
                      to="/web-taining"
                      className="cursor-pointer p-2 block hover:bg-gray-100 hover:rounded-lg no-underline text-black"
                    >
                      - Web Design & Development
                    </Link>
                    <Link
                      to="/mobile-taining"
                      className="cursor-pointer p-2 block hover:bg-gray-100 hover:rounded-lg no-underline text-black"
                    >
                      - Mobile App Development
                    </Link>
                  </div>
                </div>
              </div>

              <div className="relative" onClick={toggleAllClose}>
                <Link to="/about" className="no-underline text-black">
                  ABOUT US
                </Link>
              </div>
              <div className="relative" onClick={toggleAllClose}>
                <Link to="/contact-us" className="no-underline text-black">
                  CONTACT-US
                </Link>
              </div>
            </section>
          </div>
        </nav>
      </main>
    </>
  );
};

export default Navbar;
