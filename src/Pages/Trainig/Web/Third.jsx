import React from "react";
import student from "../../../asets/Images/ecommerce.png";
import CardAnimation from "./CardAnimation";
import expert from "../../../asets/Images/undraw_experts_re_i40h.svg";
import learning from "../../../asets/Images/undraw_online_learning_re_qw08.svg";
import career from "../../../asets/Images/undraw_career_progress_ivdb.svg";
import technology from "../../../asets/Images/undraw_dev_productivity_re_fylf.svg";
import guidence from "../../../asets/Images/undraw_business_chat_re_gg4h.svg";

const Third = () => {
  const cardData1 = [
    {
      imagePath: expert,
      cardTitle: "Expertly Designed Curriculum",
      cardDescription:
        "Our web development course is thoughtfully crafted by industry experts with years of experience. We cover everything from the basics to advanced techniques, ensuring you gain a strong foundation and stay updated with the latest trends.",
    },
    {
      imagePath: learning,
      cardTitle: "Practical Learning Approach",
      cardDescription:
        "We believe in hands-on learning. Through real-life examples, practical exercises, and interactive coding sessions, you'll develop practical skills that can be immediately applied to build websites and web applications.",
    },
  ];

  const cardData2 = [
    {
      imagePath: career,
      cardTitle: "Career Growth Opportunities",
      cardDescription:
        "Unlock vast career opportunities in web development in India and Abroad! Our course equips you with essential skills for success - work for tech giants, launch a business, or freelance.",
    },
    {
      imagePath: technology,
      cardTitle: "Cutting-Edge Technologies",
      cardDescription:
        "Stay ahead of the competition by mastering the latest tools and technologies in web development. From HTML, CSS, and JavaScript to popular frameworks like React, and Angularjs we cover the essentials that will help you",
    },
    {
      imagePath: guidence,
      cardTitle: "Personalized Guidance",
      cardDescription:
        "Your success is our mission! With dedicated instructors, gain personalized guidance, expert insights, and join a supportive learner community to foster an enriching educational experience.",
    },
  ];
  return (
    <>
      <>
        <div className="md:my-4 md:py-4">
          <div className="py-6 bg-gradient-to-b from-blue-100 to-blue-50 py-12">
            <h2 className="text-center text-slate-800 text-bold">
              Course Highlights
            </h2>

            <div className="md:px-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 place-items-center p-4 md:p-12">
                {cardData1.map((card, index) => (
                  <CardAnimation
                    key={index}
                    imagePath={card.imagePath}
                    cardTitle={card.cardTitle}
                    cardDescription={card.cardDescription}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="md:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 place-items-center p-4 md:p-12">
              {cardData2.map((card, index) => (
                <CardAnimation
                  key={index}
                  imagePath={card.imagePath}
                  cardTitle={card.cardTitle}
                  cardDescription={card.cardDescription}
                />
              ))}
            </div>
          </div>
        </div>
      </>
      <>
        <div>
          <h1 className="text-center">Tools and Technologies Covered</h1>
        </div>
      </>
    </>
  );
};

export default Third;
