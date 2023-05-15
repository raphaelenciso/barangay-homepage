import { HiLocationMarker } from "react-icons/hi";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div
      className="w-full bg-[#F1EDFF] dark:bg-[#07081C] dark:text-white p-6 "
      id="contact"
    >
      <div className="max-w-6xl mx-auto flex flex-col mt-6">
        {/* row1 */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 lg:gap-36">
          <div className="mx-auto flex flex-col text-center md:text-left ">
            <h1 className="font-bold text-xl md:text-2xl">
              About Barangay 564 Website
            </h1>
            <p className="text-sm md:text-base mt-3">
              The website is designed to streamline the process of registering,
              requesting, and tracking documents for all users.
            </p>
          </div>

          {/* row2 */}
          <div className="flex flex-col items-center md:items-start">
            <h1 className="font-bold text-xl md:text-2xl">Contact us Here</h1>

            <div className="flex flex-col md:flex-row items-center  lg:items-start gap-2 mt-2 -base text-center md:text-left">
              <HiLocationMarker size={25} />
              <p className="w-[20rem]">1031 Samar Street, Sampaloc, Manila</p>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-2 mt-2 -base text-center md:text-left">
              <MdEmail size={20} />
              <p className="ml-2">564barangay@gmail.com</p>
            </div>
          </div>
        </div>

        <hr className="mt-5" />
        {/* row2 */}
        <div className="flex flex-col justify-center items-center mt-5">
          <p className="font-medium text-sm text-center lg:text-left mb-4 lg:mb-0">
            Copyright © Barangay 564
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
