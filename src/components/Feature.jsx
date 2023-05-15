import { FaUserPlus } from "react-icons/fa";
// import { cardContents } from "../utils/cardContents";
import Card from "./Card";
import { useState } from "react";
import { SiFiles } from "react-icons/si";
import { RiSearch2Fill } from "react-icons/ri";

const Feature = () => {
  const [featureActive, setFeatureActive] = useState("Register");

  const cardContents = [
    {
      icon: (
        <FaUserPlus
          size={200}
          className="h-20 w-20 lg:h-48 lg:w-48 mt-5 mb-[-30px] lg:mb-0 lg:mt-0"
        />
      ),
      title: "Register",
      description:
        "Create an account to start. Just prepare your ID or Bill Statement for validation",
    },
    {
      icon: (
        <SiFiles
          size={200}
          className="h-20 w-20 lg:h-48 lg:w-48 mt-5 mb-[-30px] lg:mb-0 lg:mt-0"
        />
      ),
      title: "Request",
      description: "Request your desired barangay documents",
    },
    {
      icon: (
        <RiSearch2Fill
          size={200}
          className="h-20 w-20 lg:h-48 lg:w-48 mt-5 mb-[-30px] lg:mb-0 lg:mt-0"
        />
      ),
      title: "Tracking",
      description: "Track the real-time status of your requested documents",
    },
  ];

  return (
    <section className="w-full bg-[#EBF5FF] text-[#1E2241] dark:bg-[#1E2241] dark:text-white p-6">
      <div className="max-w-6xl mx-auto p-6 lg:p-16 bg-[#FFFFFF] dark:bg-[#34385F] text-[#1E2241] dark:text-white  flex flex-col justify-center items-center rounded-tl-2xl rounded-br-2xl">
        <h1 className="text-2xl md:text-3xl font-semibold">Features</h1>
        <p className="text-center mt-2 md:mt-4 text-sm md:text-base text-[#1E2241] dark:text-white">
          The forms have three different features that can be used by the
          requesters. With these built-in features, requesters can now register,
          request, and track anytime, anywhere.
        </p>
        <div className="flex gap-0 lg:px-20 pt-8 md:pt-20 justify-center items-center | lg:gap-20 ">
          <div className="flex flex-col justify-center items-center gap-8">
            {cardContents.map((card) => (
              <Card
                icon={card.icon}
                title={card.title}
                description={card.description}
                key={card.title}
                active={featureActive}
                onClick={() => setFeatureActive(card.title)}
              />
            ))}
          </div>

          <div>
            <img
              src={`./Dark_Blocks_${featureActive}.png`}
              alt="phone"
              className="w-full hidden | lg:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
