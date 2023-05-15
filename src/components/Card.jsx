/* eslint-disable react/prop-types */
const Card = ({ icon, title, description, active, onClick }) => {
  return (
    <div
      className={`flex flex-col px-12 pb-4 w-[17rem] lg:w-[25rem]  rounded-tl-3xl rounded-br-3xl hover:cursor-pointer shadow-lg shadow-[#07081C] ${
        active === title
          ? "bg-[#07081C] text-white dark:bg-[#F1EDFF] dark:text-black"
          : "dark:bg-[#07081C] dark:text-white bg-[#F1EDFF] text-black"
      }`}
      onClick={onClick}
    >
      <div className="flex flex-col lg:flex-row gap-12 justify-center items-center ">
        {icon}
        <div className="flex flex-col text-center w-[15rem] | lg:w-[35rem] lg:text-left">
          <h1 className="text-xl md:text-2xl font-bold">
            {title.toUpperCase()}
          </h1>
          <p className="text-sm md:text-base">{description}</p>
        </div>
      </div>
      <div className="mx-auto flex items-center gap-3 mt-5 lg:mt-0">
        <div
          className={`rounded-full ${
            title === "Register"
              ? `h-3 w-3 ${
                  active === title
                    ? "bg-[#f1f1f1] dark:bg-[#07081C]"
                    : "bg-[#07081C] dark:bg-[#f1f1f1]"
                }`
              : "h-2 w-2 bg-[#B4B4B4]"
          }`}
        />
        <div
          className={`rounded-full ${
            title === "Request"
              ? `h-3 w-3 ${
                  active === title
                    ? "bg-[#f1f1f1] dark:bg-[#07081C]"
                    : "bg-[#07081C] dark:bg-[#f1f1f1]"
                }`
              : "h-2 w-2 bg-[#B4B4B4]"
          }`}
        />
        <div
          className={`rounded-full ${
            title === "Tracking"
              ? `h-3 w-3 ${
                  active === title
                    ? "bg-[#f1f1f1] dark:bg-[#07081C]"
                    : "bg-[#07081C] dark:bg-[#f1f1f1]"
                }`
              : "h-2 w-2 bg-[#B4B4B4]"
          }`}
        />
      </div>
    </div>
  );
};
export default Card;
