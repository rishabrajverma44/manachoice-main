import React from "react";
import food_app_booking from "../../asets/Images/food1_app_booking.png";
import anroid from "../../asets/Images/android.png";
import iphone from "../../asets/Images/iphone.png";
import window from "../../asets/Images/windows.png";

const Fith = () => {
  const benifites = [
    { title: "Efficient Order Handling" },
    { title: "Secure Transactions" },
    { title: "Secure, Scalable, And Well Supported" },
    { title: "Cloud Hosted" },
    { title: "Reliable Support" },
    { title: "Robust Methodology & Security" },
    { title: "Value For Money Solution" },
    { title: "Completely Configurable & Customizable" },
  ];

  return (
    <>
      <div className="md:px-8 md:py-10">
        <h1 className="text-pink-800 font-bold text-center">
          Why Food Booking <span className="text-blue-900">App</span>
        </h1>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-4">
            <div className="bg-white flex item-center p-2 m-2 border rounded-lg">
              <img src={food_app_booking} alt="food" />
            </div>
            <div className="bg-white p-2 m-2 border rounded-lg">
              <div>
                <ul>
                  {benifites.map((benifite, index) => (
                    <li key={index}>
                      <h5 className="flex items-center px-0 leading-tight m-0">
                        <span>
                          <svg
                            width="38"
                            height="38"
                            viewBox="0 0 33 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2.5 14.5001L4.5 12.5001L6.5 14.5L8.5 12.5001L10.5 14.5001L12.5 12.5"
                              stroke="#55A76A"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M3 7L6 10L12.5 3.5"
                              stroke="#55A76A"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        <p className="cursor-pointer p-0 m-0 ml-2">
                          {benifite.title}
                        </p>
                      </h5>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-end">
        <span className="d-flex" style={{ width: "300px", height: "100px" }}>
          <div className="flex justify-center relative ">
            <span className="cursor-pointer p-3 w-20 h-20 rounded-full shadow-lg transition-transform transform hover:scale-110 hover:shadow-2xl absolute left-0">
              <img src={anroid} alt="Android" className="rounded-full" />
            </span>
            <span className="cursor-pointer p-3 w-20 h-20 rounded-full shadow-lg transition-transform transform hover:scale-110 hover:shadow-2xl absolute left-16">
              <img
                src={iphone}
                alt="iPhone"
                className="w-full h-full object-cover rounded-full"
              />
            </span>
            <span className="cursor-pointer p-3 w-20 h-20 rounded-full shadow-lg transition-transform transform hover:scale-110 hover:shadow-2xl absolute left-32">
              <img
                src={window}
                alt="Windows"
                className="w-full h-full object-cover rounded-full"
              />
            </span>
          </div>
        </span>
      </div>
    </>
  );
};

export default Fith;
