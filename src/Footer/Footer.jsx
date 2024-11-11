import React from "react";
import logo from "../asets/logo/manaChoice.png";
import { Link } from "react-router-dom";
import {
  FiTwitter,
  FiFacebook,
  FiInstagram,
  FiGithub,
  FiMessageSquare,
} from "react-icons/fi";

const Footer = () => {
  return (
    <>
      <div className="bg-indigo-950 text-gray-400">
        <div className="container mx-auto py-12 md:px-1">
          <div className="grid lg:grid-cols-3 gap-4">
            <div className="grid  gap-y-1">
              <Link to="/" className="d-flex no-underline">
                <img
                  src={logo}
                  alt="logo"
                  style={{ height: "50px" }}
                  className="self-center"
                />
                <span className="ml-1 mt-2 self-center text-md fw-semibold text-white">
                  TechWorks (OPC) Pvt. Ltd.
                  <br />
                </span>
              </Link>
              <p>
                manaChoice TechWorks (OPC) Pvt. Ltd. is a Software Solutions and
                Services provider company located in VA (USA) and Benglauru
                (India)
              </p>

              <div className="sm:flex sm:items-center sm:justify-start sm:space-x-8">
                <ul className="flex items-center justify-start space-x-8">
                  {[
                    {
                      icon: <FiTwitter className="w-4 h-4" />,
                      href: "https://twitter.com",
                    },
                    {
                      icon: <FiFacebook className="w-4 h-4" />,
                      href: "https://facebook.com",
                    },
                    {
                      icon: <FiInstagram className="w-4 h-4" />,
                      href: "https://instagram.com",
                    },
                    {
                      icon: <FiGithub className="w-4 h-4" />,
                      href: "https://github.com",
                    },
                  ].map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center text-white transition-transform transform duration-200 border rounded-full w-7 h-7  hover:scale-110"
                      >
                        {item.icon}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h2 className="text-white">Contact Us</h2>
              <div className="row">
                <div className="col-1 ml-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <div className="col">
                  <div className="row">
                    <h4 className="m-0">Email</h4>
                  </div>
                  <div className="row p-0">
                    <p>
                      <a
                        href="mailto:@.com"
                        className="text-decoration-none text-gray-400"
                      >
                        info@uvaaninfotech.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-1 ml-4">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
                    />
                  </svg>
                </div>
                <div className="col">
                  <div className="row">
                    <h4 className="m-0">Phone</h4>
                  </div>
                  <div className="row p-0">
                    <p>
                      <a
                        href="tel:+91"
                        className="text-decoration-none text-gray-400"
                      >
                        +1 (703) 855-5699 / +1 (571) 370-4718 Ext: 101 / +91
                        86603 20038
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-1 ml-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                </div>
                <div className="col">
                  <div className="row">
                    <h4 className="m-0">US Office Address</h4>
                  </div>
                  <div className="row p-0">
                    <p>41451 Carriage Horse Dr, Aldie, VA, 20105</p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-1 ml-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                </div>
                <div className="col">
                  <div className="row">
                    <h4 className="m-0">India Office Address</h4>
                  </div>
                  <div className="row p-0">
                    <p>
                      #175 & #176, 4th Floor, Dollars Colony, JP Nagar 4th
                      Phase, Bannerghatta Main Road, Bengaluru, Karnataka 560078
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-white">Quick Links</h2>
              <div className="ml-6">
                <div className="row my-4">
                  <span>
                    <div class="relative group inline-block ">
                      <span class="cursor-pointer">
                        <Link
                          to="/web-service"
                          className="no-underline text-gray-400"
                        >
                          Web Development
                        </Link>
                      </span>
                      <div class="absolute mt-0 left-0 w-full h-[2px] bg-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></div>
                    </div>
                  </span>
                </div>
                <div className="row my-4">
                  <span>
                    <div class="relative group inline-block ">
                      <span class="cursor-pointer">
                        <Link
                          to="/mobile-service"
                          className="no-underline text-gray-400"
                        >
                          Mobile Apps
                        </Link>
                      </span>
                      <div class="absolute mt-0 left-0 w-full h-[2px] bg-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></div>
                    </div>
                  </span>
                </div>
                <div className="row my-4">
                  <span>
                    <div class="relative group inline-block ">
                      <span class="cursor-pointer">
                        <Link to="/" className="no-underline text-gray-400">
                          Digital Marketing
                        </Link>
                      </span>
                      <div class="absolute mt-0 left-0 w-full h-[2px] bg-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></div>
                    </div>
                  </span>
                </div>
                <div className="row my-4">
                  <span>
                    <div class="relative group inline-block ">
                      <span class="cursor-pointer">
                        <Link to="/" className="no-underline text-gray-400">
                          Animation
                        </Link>
                      </span>
                      <div class="absolute mt-0 left-0 w-full h-[2px] bg-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></div>
                    </div>
                  </span>
                </div>
                <div className="row my-4">
                  <span>
                    <div class="relative group inline-block ">
                      <span class="cursor-pointer">
                        <Link to="/" className="no-underline text-gray-400">
                          Refund Policy
                        </Link>
                      </span>
                      <div class="absolute mt-0 left-0 w-full h-[2px] bg-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></div>
                    </div>
                  </span>
                </div>
                <div className="row my-4">
                  <span>
                    <div class="relative group inline-block ">
                      <span class="cursor-pointer">
                        <Link to="/" className="no-underline text-gray-400">
                          Privacy Policy
                        </Link>
                      </span>
                      <div class="absolute mt-0 left-0 w-full h-[2px] bg-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></div>
                    </div>
                  </span>
                </div>
                <div className="row my-4">
                  <span>
                    <div class="relative group inline-block ">
                      <span class="cursor-pointer">
                        <Link to="/" className="no-underline text-gray-400">
                          Terms and Conditions
                        </Link>
                      </span>
                      <div class="absolute mt-0 left-0 w-full h-[2px] bg-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></div>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-2 py-2 text-center">
          <hr className="md:mx-32"></hr>
          <p>
            © 2024 manaChoice TechWorks (OPC) Pvt. Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
