import React from "react";
import logo from "../asets/logo/manaChoice.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-indigo-950 text-gray-400">
      <div className="container mx-auto py-12 md:px-1">
        <div className="grid lg:grid-cols-3 gap-4">
          <div className="grid  gap-y-1">
            <Link to="/" className="d-flex no-underline">
              <img
                src={logo}
                alt="logo"
                style={{ height: "60px" }}
                className="self-center"
              />
              <span className="ml-2 self-center text-md fw-semibold text-white">
                TechWorks (OPC) Pvt. Ltd.
                <br />
              </span>
            </Link>
            <p>
              manaChoice TechWorks (OPC) Pvt. Ltd. is a Software Solutions and
              Services provider company located in VA (USA) and Benglauru
              (India)
            </p>
            <div className="d-flex justifycontent-start">
              <Link to="/">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="#343C54"
                  xmlns="http://www.w3.org/2000/svg"
                  transform="rotate(0 0 0)"
                >
                  <path
                    d="M19.7065 3H4.34844C3.62264 3 3.04199 3.58065 3.04199 4.30645V19.6935C3.04199 20.3903 3.62264 21 4.34844 21H19.6485C20.3743 21 20.9549 20.4194 20.9549 19.6935V4.27742C21.013 3.58065 20.4323 3 19.7065 3ZM8.35491 18.3H5.71297V9.73548H8.35491V18.3ZM7.01942 8.54516C6.14846 8.54516 5.4807 7.84839 5.4807 7.00645C5.4807 6.16452 6.17749 5.46774 7.01942 5.46774C7.86136 5.46774 8.55813 6.16452 8.55813 7.00645C8.55813 7.84839 7.91942 8.54516 7.01942 8.54516ZM18.371 18.3H15.7291V14.1484C15.7291 13.1613 15.7001 11.8548 14.3356 11.8548C12.942 11.8548 12.7388 12.9581 12.7388 14.0613V18.3H10.0968V9.73548H12.6807V10.9258H12.7097C13.0872 10.229 13.9291 9.53226 15.2356 9.53226C17.9356 9.53226 18.4291 11.2742 18.4291 13.6548V18.3H18.371Z"
                    fill="#343C54"
                    className="hover:fill-pink-500"
                  />
                </svg>
              </Link>

              <Link to="/">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="#343C54"
                  xmlns="http://www.w3.org/2000/svg"
                  transform="rotate(0 0 0)"
                >
                  <path
                    d="M8.22581 20.1937C15.8387 20.1937 19.9677 13.9034 19.9677 8.4518C19.9677 8.32277 19.9677 8.09696 19.9355 7.90341C20.7419 7.32277 21.4516 6.58083 22 5.77438C21.2258 6.12922 20.4516 6.32277 19.6452 6.41954C20.5161 5.90341 21.1613 5.09696 21.4516 4.12922C20.6452 4.58083 19.8065 4.93567 18.8065 5.12922C18.0323 4.32277 17 3.80664 15.8065 3.80664C13.5161 3.80664 11.6452 5.67761 11.6452 7.96793C11.6452 8.29051 11.6774 8.61309 11.7419 8.93567C8.41935 8.70986 5.3871 7.0647 3.32258 4.58083C2.96774 5.22599 2.77419 5.90341 2.77419 6.64535C2.77419 8.09696 3.51613 9.32277 4.64516 10.0647C3.96774 10.0324 3.32258 9.8389 2.77419 9.54857C2.77419 9.58083 2.77419 9.58083 2.77419 9.58083C2.77419 11.5486 4.19355 13.2583 6.06452 13.6453C5.70968 13.7421 5.32258 13.7744 5.03226 13.7744C4.77419 13.7744 4.48387 13.7421 4.25806 13.6776C4.80645 15.3228 6.32258 16.5163 8.12903 16.5486C6.70968 17.6453 4.93548 18.3228 3.03226 18.3228C2.64516 18.3873 2.32258 18.3228 2 18.2905C3.74194 19.5163 5.90323 20.1937 8.22581 20.1937Z"
                    fill="#343C54"
                    className="hover:fill-pink-500"
                  />
                </svg>
              </Link>

              <Link to="/">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="#343C54"
                  xmlns="http://www.w3.org/2000/svg"
                  transform="rotate(0 0 0)"
                >
                  <path
                    d="M17.625 3H6.375C4.51105 3 3 4.51105 3 6.375V17.625C3 19.4889 4.51105 21 6.375 21H17.625C19.4889 21 21 19.4889 21 17.625V6.375C21 4.51105 19.4889 3 17.625 3ZM17.1679 12.6939H15.4839V18.9276H12.6703V12.6939H11.5784V10.5932H12.6703V9.255C12.6703 7.50237 13.3997 6.46026 15.465 6.46026H17.5587V8.55158H16.3413C15.5361 8.55158 15.4839 8.85237 15.4839 9.41132L15.4816 10.5908H17.3953L17.1655 12.6916L17.1679 12.6939Z"
                    fill="#343C54"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    className="hover:fill-pink-500"
                  />
                </svg>
              </Link>
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
                      +1 (703) 855-5699 / +1 (571) 370-4718 Ext: 101 / +91 86603
                      20038
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
                    #175 & #176, 4th Floor, Dollars Colony, JP Nagar 4th Phase,
                    Bannerghatta Main Road, Bengaluru, Karnataka 560078
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
        <p>© 2024 manaChoice TechWorks (OPC) Pvt. Ltd. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
