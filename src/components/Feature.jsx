import { HiUserPlus } from "react-icons/bs";

const Feature = () => {
  return (
    <div className="w-full bg-[#1E2241] p-6">
      <div className="max-w-6xl mx-auto p-6 bg-[#34385F] flex flex-col justify-center items-center text-white rounded-tl-2xl rounded-br-2xl">
        <h1 className="text-3xl font-semibold">Features</h1>
        <p className="text-center mt-4 text-base">
          The forms have three different features that can be used by the
          requesters. With these built-in features, requesters can now register,
          request, and track anytime, anywhere.
        </p>
        <div className="flex">
          <div className="flex flex-col">
            <div className="flex flex-col">
              <div className="flex">
                <HiUserPlus />
                <div className="text-center">
                  <h1>Register</h1>
                  <p>
                    Create an account to start. Just prepare your ID or Bill
                    Statement for validation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
