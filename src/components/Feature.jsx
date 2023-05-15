import { FaUserPlus } from "react-icons/fa";
import { SiFiles } from "react-icons/si";
import { RiSearch2Fill } from "react-icons/ri";
const Feature = () => {
  return (
    <div className="w-full bg-[#EBF5FF] text-[#1E2241] dark:bg-[#1E2241] dark:text-white p-6">
      <div className="max-w-6xl mx-auto p-6 lg:p-16 bg-[#FFFFFF] dark:bg-[#34385F] text-[#1E2241] dark:text-white  flex flex-col justify-center items-center rounded-tl-2xl rounded-br-2xl">
        <h1 className="text-3xl font-semibold">Features</h1>
        <p className="text-center mt-4 text-base text-[#1E2241] dark:text-white">
          The forms have three different features that can be used by the
          requesters. With these built-in features, requesters can now register,
          request, and track anytime, anywhere.
        </p>
        <div className="flex gap-0 lg:px-20 pt-20 justify-center items-center | lg:gap-20 ">
          <div className="flex flex-col justify-center items-center">
            {/* card */}
            <div className="flex flex-col px-12 pb-4 w-[17rem] lg:w-[25rem] bg-[#07081C] text-white dark:bg-[#F1EDFF] dark:text-black rounded-tl-3xl rounded-br-3xl">
              <div className="flex flex-col lg:flex-row gap-12 justify-center items-center ">
                <FaUserPlus
                  size={200}
                  className="h-20 w-20 lg:h-48 lg:w-48 mt-5 mb-[-30px] lg:mb-0 lg:mt-0"
                />
                <div className="flex flex-col text-center w-[15rem] | lg:w-[35rem] lg:text-left">
                  <h1 className="text-2xl font-bold">REGISTER</h1>
                  <p>
                    Create an account to start. Just prepare your ID or Bill
                    Statement for validation
                  </p>
                </div>
              </div>
              <div className="mx-auto flex gap-3 mt-5 lg:mt-0">
                <div className="h-4 w-4 bg-white dark:bg-[#07081C] rounded-full"></div>
                <div className="h-4 w-4 bg-[#B4B4B4] rounded-full"></div>
                <div className="h-4 w-4 bg-[#B4B4B4] rounded-full"></div>
              </div>
            </div>

            {/* card */}
            <div className="flex flex-col px-12 pb-4 mt-8 w-[17rem] lg:w-[25rem] dark:bg-[#07081C] bg-[#F1EDFF] rounded-tl-3xl rounded-br-3xl">
              <div className="flex flex-col lg:flex-row gap-12 justify-center items-center text-white]">
                <SiFiles
                  size={200}
                  className="h-20 w-20 lg:h-48 lg:w-48 mt-5 mb-[-30px] lg:mb-0 lg:mt-0"
                />
                <div className="flex flex-col text-center w-[15rem] | lg:w-[35rem] lg:text-left">
                  <h1 className="text-2xl font-bold">REQUEST</h1>
                  <p>Request your desired barangay documents</p>
                </div>
              </div>
              <div className="mx-auto flex gap-3 mt-5 lg:mt-0">
                <div className="h-4 w-4 bg-[#B4B4B4] rounded-full"></div>
                <div className="h-4 w-4 bg-[#07081C] dark:bg-white rounded-full"></div>
                <div className="h-4 w-4 bg-[#B4B4B4] rounded-full"></div>
              </div>
            </div>

            {/* card */}
            <div className="flex flex-col px-12 pb-4 mt-8 w-[17rem] lg:w-[25rem] dark:bg-[#07081C] bg-[#F1EDFF] rounded-tl-3xl rounded-br-3xl">
              <div className="flex flex-col lg:flex-row gap-12 justify-center items-center text-white]">
                <RiSearch2Fill
                  size={200}
                  className="h-20 w-20 lg:h-48 lg:w-48 mt-5 mb-[-30px] lg:mb-0 lg:mt-0"
                />
                <div className="flex flex-col text-center w-[15rem] | lg:w-[35rem] lg:text-left">
                  <h1 className="text-2xl font-bold">TRACKING</h1>
                  <p>Track the real-time status of your requested documents</p>
                </div>
              </div>
              <div className="mx-auto flex gap-3 mt-5 lg:mt-0">
                <div className="h-4 w-4 bg-[#B4B4B4] rounded-full"></div>
                <div className="h-4 w-4 bg-[#B4B4B4] rounded-full"></div>
                <div className="h-4 w-4 bg-[#07081C] dark:bg-white rounded-full"></div>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/Dark_Blocks_Request.png"
              alt="phone"
              className="w-full hidden | lg:block"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
