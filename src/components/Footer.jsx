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
          <div className="flex flex-col w-[35rem]">
            <h1 className="font-bold text-2xl">About Barangay 564 Website</h1>
            <p className="mt-3">
              The website is designed to streamline the process of registering,
              requesting, and tracking documents for all users.
            </p>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-2xl">Contact us Here</h1>
            <div className="flex gap-2 mt-3">
              <HiLocationMarker size={25} />
              <p className="w-[20rem]">
                1031 Samar Street, Sampaloc, Maynila, 1008 Kalakhang Maynila
              </p>
            </div>

            <div className="flex gap-2 mt-2">
              <MdEmail size={20} />
              <p className="ml-2">support@barangay564.online</p>
            </div>

            <div className="flex gap-2 mt-2">
              <BsFillTelephoneFill size={20} />
              <p className="ml-2">8-7000</p>
            </div>
          </div>
        </div>
        <hr className="mt-5" />
        {/* row2 */}
        <div className="flex justify-between mt-5">
          <p className="font-medium text-lg">Copyright © Barangay 564</p>
          <div className="flex justify-center items-center gap-4">
            <p>Follow Us</p>
            <div className="flex gap-4">
              <div className="bg-[#151738] rounded-full p-2">
                <GrFacebookOption size={25} />
              </div>

              <div className="bg-[#151738] rounded-full p-2">
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
