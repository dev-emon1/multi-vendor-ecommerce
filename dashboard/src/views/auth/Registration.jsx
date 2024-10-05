import { Link } from "react-router-dom";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { useState } from "react";

const Registration = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <div className="min-w-screen min-h-screen flex justify-center items-center bg-[#a435f0] ">
      <div className="w-[450px] p-2">
        <div className="bg-white p-7 rounded-md">
          <h2 className="text-xl font-bold mb-3 text-center">
            Welcome to BazaarNook
          </h2>
          <p className="text-sm font-semibold text-center">
            Please registration your account
          </p>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col w-full gap-1 mb-3 mt-4">
              <label htmlFor="name" className="text-sm">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                name="name"
                required
                className="px-3 py-2 bg-transparent border border-slate-200 outline-none rounded-md"
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col w-full gap-1 mb-3 mt-4">
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                type="email"
                placeholder="Your email address"
                name="email"
                required
                className="px-3 py-2 bg-transparent border border-slate-200 outline-none rounded-md"
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col w-full gap-1 mb-3 mt-4">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <input
                type="password"
                placeholder="Your password"
                name="password"
                required
                className="px-3 py-2 bg-transparent border border-slate-200 outline-none rounded-md"
                onChange={handleInputChange}
              />
            </div>

            <div className="flex items-center w-full gap-3 mb-3">
              <input
                type="checkbox"
                id="checkbox"
                name="checkbox"
                className="w-4 h-4 rounded border border-slate-200 focus:ring-blue-500"
              />
              <label htmlFor="checkbox" className="text-sm">
                {" "}
                I agree to privacy policy & terms
              </label>
            </div>
            <button className="w-full bg-[#a435f0] text-white text-base font-semibold rounded-md px-7 py-2 mt-2 hover:bg-[#872bc5]">
              Sign Up
            </button>
          </form>

          <div className="flex justify-center items-center gap-3 mb-3 mt-3">
            <p className="text-sm">
              Already have an account?{" "}
              <Link to="/login" className="font-semibold">
                Sign In
              </Link>
            </p>
          </div>
          <div className="w-full flex items-center justify-center mb-3">
            <div className="w-[45%] flex items-center justify-center h-[1px] bg-slate-200"></div>
            <div className="w-[10%] flex items-center justify-center">
              <span className="text-sm">Or</span>
            </div>
            <div className="w-[45%] h-[1px] bg-slate-200 flex items-center justify-center"></div>
          </div>
          <div className="flex justify-center items-center gap-2">
            <div className="w-[135px] h-[35px] flex items-center justify-center bg-red-500 hover:bg-red-400 cursor-pointer rounded-md text-white">
              <span>
                <FaGoogle />
              </span>
            </div>
            <div className="w-[135px] h-[35px] flex items-center justify-center bg-blue-500 hover:bg-blue-400 cursor-pointer rounded-md text-white">
              <span>
                <FaFacebookF />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
