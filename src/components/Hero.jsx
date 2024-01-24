import { BsArrowRightShort } from "react-icons/bs";
import useThemeStore from "../store/themeStore";
import AnimatedButton from "./AnimatedButton";

const Hero = () => {
  const theme = useThemeStore((state) => state.theme);

  return (
    <section className="bg-hero-bg bg-cover text-white ">
      <div className="bg-gradient-to-r from-[#1111113f] dark:from-[#1111116f] via-transparent to-transparent   ">
        <div className="backdrop-brightness-75 bg-gradient-to-b from-[#1111117f]  dark:from-[#111111af] via-transparent to-transparent w-full min-h-screen flex justify-center items-center pt-32 ">
          <div className="h-full mx-auto max-w-6xl flex flex-col md:flex-row px-6 md:pt-0 md:gap-6 lg:gap-10 justify-center md:justify-between items-center relative">
            <div className="flex flex-col">
              <div className="text-center md:text-left">
                <p className="text-3xl xs:text-4xl md:text-5xl font-bold leading-tight ">
                  BARANGAY 564 OFFICIAL WEBSITE
                </p>
                <p className="text-3xl xs:text-4xl md:text-5xl font-bold leading-tight  text-[#3187FF]">
                  REQUEST
                </p>
              </div>
              <div className="mt-6 text-center md:text-left">
                <p className="text-sm">
                  Barangay 564 Zone 55, Samar Street Sampaloc, Manila
                </p>
                <p className="text-sm">
                  Open Hours of Barangay: Monday to Friday (8AM - 5PM)
                </p>
              </div>

              <div className="mt-4 md:mt-12 mx-auto md:mx-0">
                {/* <span className=" font-semibold text-lg">
                  <a
                    href="https://barangay-forms.up.railway.app/"
                    className="flex flex-row items-center justify-center gap-6 "
                  >
                    <p className=""> Request Now </p>
                    <BsArrowRightShort size={30} />
                  </a>
                </span> */}
                <AnimatedButton
                  title="Request Now"
                  href="https://barangay-forms.up.railway.app/"
                />
              </div>
            </div>

            <img
              alt="phone"
              src={
                theme === "dark"
                  ? "./Dark_Homepage.png"
                  : "./Light_Homepage.png"
              }
              className="h-[20rem] xs:h-[28rem] md:h-[30rem] 2xl:h-[35rem] my-8 md:mt-0  "
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
