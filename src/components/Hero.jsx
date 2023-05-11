import { BsArrowRightShort } from "react-icons/bs";

const Hero = () => {
  return (
    <section className="w-full min-h-screen h-screen mx-auto overflow-hidden">
      <div className="h-full mx-auto max-w-6xl flex flex-col md:flex-row pt-28 px-6 md:pt-0 gap-10 justify-between items-center relative  ">
        <div className="flex flex-col">
          <div>
            <p className=" text-5xl font-bold leading-tight ">
              BARANGAY 564 OFFICIAL WEBSITE
            </p>
            <p className=" text-5xl font-bold leading-tight  text-[#3187FF]">
              REQUEST
            </p>
          </div>
          <div className="mt-6">
            <p className="">
              Barangay 564 Zone 55, Samar Street Sampaloc, Manila
            </p>
            <p>Open Hours of Barangay: Monday to Friday (8AM - 5PM)</p>
          </div>

          <div className="bg-[#033AA9] py-2 w-60 rounded-xl mt-12 cursor-pointer shadow-sm shadow-blue-400">
            <span className=" font-semibold text-lg">
              <a
                href="https://forms.barangay564.online/"
                className="flex flex-row items-center justify-center gap-6 "
              >
                <p> Request Now </p>
                <BsArrowRightShort size={30} />
              </a>
            </span>
          </div>
        </div>

        <img
          alt="phone"
          src="/Dark_Homepage.png"
          className="h-[35rem] lg:h-[38rem] pt-16 lg:pt-0 "
        />
      </div>
    </section>
  );
};
export default Hero;
