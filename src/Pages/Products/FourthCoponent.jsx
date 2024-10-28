import React, { useState } from "react";
import NewProject from "./NewProject";

const FourthComponent = () => {
  const [hotelOwnersAdvantages] = useState([
    {
      title: "Enhanced Visibility and Reach",
      description:
        "Gain a competitive edge by increasing your online presence and reaching a wider audience.",
    },
    {
      title: "Increased Sales and Revenue",
      description:
        "Drive more sales through a convenient and efficient food booking platform that attracts more customers.",
    },
    {
      title: "Efficient Order Management",
      description:
        "Streamline your operations with an easy-to-use interface that simplifies order processing.",
    },
    {
      title: "Data-Driven Insights",
      description:
        "Utilize analytics to understand customer preferences and improve your offerings.",
    },
    {
      title: "Cost-Effective Promotion",
      description:
        "Reduce marketing costs while effectively promoting your food services to a targeted audience.",
    },
    {
      title: "Centralized Control and Customization",
      description:
        "Manage your menu and pricing in real-time, allowing for quick adjustments based on demand.",
    },
  ]);

  const [customersAdvantages] = useState([
    {
      title: "Convenience and Ease",
      description:
        "Order with ease, saving time and energy with a simple, user-friendly interface that ensures a seamless ordering experience.",
    },
    {
      title: "Wide Culinary Selection",
      description:
        "Explore a plethora of flavors and cuisines, satisfying your cravings with a diverse range of delectable food options.",
    },
    {
      title: "Real-Time Order Tracking",
      description:
        "Stay informed with live tracking, knowing exactly when to expect your meal, enhancing your delivery experience.",
    },
    {
      title: "Personalized Deals and Discounts",
      description:
        "Enjoy special offers tailored to your taste, ensuring affordability while indulging in your favorite meals.",
    },
    {
      title: "Secure and Easy Payments",
      description:
        "Experience secure transactions and choose from various payment options for a smooth and worry-free checkout.",
    },
    {
      title: "Customer Support and Feedback",
      description:
        "Receive assistance when needed and share your valuable feedback, contributing to an improved app experience and service.",
    },
  ]);

  const [openIndex, setOpenIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setOpenIndex(index);
  };

  const handleMouseLeave = () => {
    setOpenIndex(null);
  };

  return (
    <div
      className="py-4 md:px-8"
      style={{
        background:
          "linear-gradient(180deg, rgba(0, 212, 255, 0.2) 0%, rgba(191, 70, 255, 0.2) 50%, rgba(222, 0, 75, 0.1) 100%)",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-4">
        <div className="bg-white p-2 m-2 border rounded-lg">
          <h3 className="font-semibold text-center text-3xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Simplify, Collaborate, Succeed
          </h3>
          <h4 className="text-center">
            The Advantages of Food Booking App for Hotel Owners
          </h4>

          <ul className="key-points">
            {hotelOwnersAdvantages.map((item, index) => (
              <li key={index}>
                <div
                  className="relative inline-block w-full"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <h5
                    className="myDIV cursor-pointer text-blue-600 hover:text-blue-800 transition duration-300 flex items-center"
                    role="button"
                    tabIndex={0}
                  >
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2"
                    >
                      <circle cx="14" cy="14" r="12" fill="#55A76A" />
                      <path
                        d="M20 10.5L12.5 18L8.5 14"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {item.title}
                  </h5>
                  {openIndex === index && (
                    <p className="hide mt-2 rounded-md bg-white ring-1 ring-black ring-opacity-5 py-2 px-4 text-gray-700 transition duration-300 ease-in-out opacity-100">
                      {item.description}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-2 m-2 border rounded-lg">
          <h3 className="font-semibold text-center text-3xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Convenient and Connected Care
          </h3>
          <h4 className="text-center">
            The Advantages of Food Booking App for Customers
          </h4>

          <ul className="key-points">
            {customersAdvantages.map((item, index) => (
              <li key={index}>
                <div
                  className="relative inline-block w-full"
                  onMouseEnter={() =>
                    handleMouseEnter(index + hotelOwnersAdvantages.length)
                  }
                  onMouseLeave={handleMouseLeave}
                >
                  <h5
                    className="myDIV cursor-pointer text-blue-600 hover:text-blue-800 transition duration-300 flex items-center"
                    role="button"
                    tabIndex={0}
                  >
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2"
                    >
                      <circle cx="14" cy="14" r="12" fill="#55A76A" />
                      <path
                        d="M20 10.5L12.5 18L8.5 14"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {item.title}
                  </h5>
                  {openIndex === index + hotelOwnersAdvantages.length && (
                    <p className="hide mt-2 rounded-md bg-white ring-1 ring-black ring-opacity-5 py-2 px-4 text-gray-700 transition duration-300 ease-in-out opacity-100">
                      {item.description}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="">
        <NewProject />
      </div>
    </div>
  );
};

export default FourthComponent;
