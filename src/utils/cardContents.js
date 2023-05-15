import { FaUserPlus } from "react-icons/fa";
import { RiSearch2Fill } from "react-icons/ri";
import { SiFiles } from "react-icons/si";

export const cardContents = [
  {
    icon: (
      <FaUserPlus
        size={200}
        className="h-20 w-20 lg:h-48 lg:w-48 mt-5 mb-[-30px] lg:mb-0 lg:mt-0"
      />
    ),
    title: "REGISTER",
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
    title: "REQUEST",
    description: "Request your desired barangay documents",
  },
  {
    icon: (
      <RiSearch2Fill
        size={200}
        className="h-20 w-20 lg:h-48 lg:w-48 mt-5 mb-[-30px] lg:mb-0 lg:mt-0"
      />
    ),
    title: "TRACKING",
    description: "Track the real-time status of your requested documents",
  },
];
