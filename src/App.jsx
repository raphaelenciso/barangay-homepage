function App() {
  return (
    // Hero Sections
    <div className="w-screen h-screen bg-hero-bg bg-cover text-white p-6">
      {/* Navbar */}
      <div className="mx-auto max-w-6xl bg-[#13163F] px-8 py-2 flex justify-between items-center rounded-xl">
        <div className="flex items-center">
          <img alt="brgy" src="/Barangay_Seal.png" className="h-10 w-10 mr-3" />
          <p className="text-xl font-semibold">Barangay 564</p>
        </div>
        <ul className="flex gap-10 mr-64">
          <li className="cursor-pointer">
            <a href="/">Home</a>
          </li>
          <li className="cursor-pointer">
            <a href="https://forms.barangay564.online/">Request</a>
          </li>
          <li className="cursor-pointer">
            <a href="https://forms.barangay564.online/tracker">Track</a>
          </li>
          <li className="cursor-pointer">
            <a>Contact</a>
          </li>
        </ul>
        <div>
          <i className="fa-solid fa-sun text-white fa-xl"></i>
        </div>
      </div>

      {/* Hero Contents */}
      <div className="mx-auto max-w-6xl flex gap-10 justify-between mt-44 relative">
        <div className="flex flex-col">
          <div>
            <p className="text-5xl font-bold leading-tight">BARANGAY 564</p>
            <p className="text-5xl font-bold leading-tight">OFFICIAL WEBSITE</p>
            <p className="text-5xl font-bold leading-tight text-[#3187FF]">
              REQUEST
            </p>
          </div>
          <div className="mt-10">
            <p>Barangay 564 Zone 55, Samar Street Sampaloc, Manila</p>
            <p>Open Hours of Barangay: Monday to Friday (8AM - 5PM)</p>
          </div>

          <div className="bg-[#033AA9] py-3 px-5 w-52 rounded-xl mt-12 cursor-pointer">
            <span className="mr-5 font-semibold text-lg">
              <a href="https://forms.barangay564.online/">Request Now</a>
            </span>
            <i className="fa-solid fa-arrow-right "></i>
          </div>
        </div>

        <div className="">
          <img
            alt="phone"
            src="/Dark_Homepage.png"
            className="h-[38rem] mt-[-75px]"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
