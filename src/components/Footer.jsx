import { HiLocationMarker } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrFacebookOption, GrTwitter } from "react-icons/gr";
const Footer = () => {
  return (
    <div className="w-full bg-[#F1EDFF] dark:bg-[#07081C] dark:text-white p-6 ">
      <div className="max-w-6xl mx-auto flex flex-col mt-6">
        {/* row1 */}
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex flex-col text-center lg:text-left w-[20rem] lg:w-[35rem]">
            <h1 className="font-bold text-2xl">About Barangay 564 Website</h1>
            <p className="mt-3">
              The website is designed to streamline the process of registering,
              requesting, and tracking documents for all users.
            </p>
          </div>

          {/* row2 */}
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="font-bold text-2xl">Contact us Here</h1>
            <div className="">
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-2 mt-3 -base text-center lg:text-left">
                <HiLocationMarker size={25} />
                <p className="w-[20rem]">
                  1031 Samar Street, Sampaloc, Maynila, 1008 Kalakhang Maynila
                </p>
              </div>

              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-2 mt-3 -base text-center lg:text-left">
                <MdEmail size={20} />
                <p className="ml-2">support@barangay564.online</p>
              </div>

              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-2 mt-3 -base text-center lg:text-left">
                <BsFillTelephoneFill size={20} />
                <p className="ml-2">8-7000</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-5" />
        {/* row2 */}
        <div className="flex flex-col justify-center lg:flex-row lg:justify-between mt-5">
          <p className="font-medium text-lg text-center lg:text-left mb-4 lg:mb-0">
            Copyright © Barangay 564
          </p>
          <div className="flex justify-center items-center gap-4">
            <p>Follow Us</p>
            <div className="flex gap-4">
              <div className="dark:bg-[#151738] bg-white rounded-full p-2">
                <GrFacebookOption size={25} />
              </div>

              <div className="dark:bg-[#151738] bg-white rounded-full p-2">
                <GrTwitter size={25} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
